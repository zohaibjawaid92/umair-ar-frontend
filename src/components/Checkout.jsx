import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe("pk_test_51QahiRQuN9fYUGrIfEuyQuFURJKF0XMTncUNcZR6s1C1UxVBRkHU2ZrCtBtHESmg2AY7Rx4KfZf0WfA331PBO87n000gu3Hldx");
const Checkout = () => {
    const [selectedPayment, setSelectedPayment] = useState("payment1");
    const [cartItems, setCartItems] = useState([]);  // To store cart data
    const [totalPrice, setTotalPrice] = useState(0);  // To store total price

    useEffect(() => {
        const fetchCartData = async () => {
            try {
                const response = await fetch('https://umair-ar-backend.vercel.app/product/cart'); // Your cart API endpoint
                const data = await response.json();
                setCartItems(data.data.items);  // Assuming the API response has a cartItems array
                const calculatedTotalPrice = data.data?.items.reduce((total, item) => total + item?.productId.price, 0);
                setTotalPrice(calculatedTotalPrice); // Set the calculated total price
            } catch (error) {
                console.error('Error fetching cart data:', error);
            }
        };

        fetchCartData();
    }, []);


    const handlePaymentChange = (event) => {
        setSelectedPayment(event.target.id);
    };

    const calculateTotal = () => {
        return cartItems.reduce((total, item) => total + item?.productId.price, 0).toFixed(2);
    };

    const handlePlaceOrder = async () => {
        try {
            const stripe = await stripePromise;
            const response = await fetch("https://umair-ar-backend.vercel.app/product/create-checkout-session", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ items: cartItems }),
            });

            const session = await response.json();

            // Redirect to Stripe Checkout
            const { error } = await stripe.redirectToCheckout({
                sessionId: session.id,
            });

            if (error) {
                console.error("Stripe error:", error);
            }
        } catch (error) {
            console.error("Error placing order:", error);
        }
    };

    

    return (
        <section className="checkout py-80">
            <div className="container container-lg">
                <div className="row">
                    <div className="col-xl-9 col-lg-8">
                        <form action="#" className="pe-xl-5">
                            <div className="row gy-3">
                                <div className="col-sm-6 col-xs-6">
                                    <input
                                        type="text"
                                        className="common-input border-gray-100"
                                        placeholder="First Name"
                                    />
                                </div>
                                <div className="col-sm-6 col-xs-6">
                                    <input
                                        type="text"
                                        className="common-input border-gray-100"
                                        placeholder="Last Name"
                                    />
                                </div>
                                <div className="col-12">
                                    <input
                                        type="text"
                                        className="common-input border-gray-100"
                                        placeholder="Business Name"
                                    />
                                </div>
                                <div className="col-12">
                                    <input
                                        type="text"
                                        className="common-input border-gray-100"
                                        placeholder="United states (US)"
                                    />
                                </div>
                                <div className="col-12">
                                    <input
                                        type="text"
                                        className="common-input border-gray-100"
                                        placeholder="House number and street name"
                                    />
                                </div>
                                <div className="col-12">
                                    <input
                                        type="text"
                                        className="common-input border-gray-100"
                                        placeholder="Apartment, suite, unit, etc. (Optional)"
                                    />
                                </div>
                                <div className="col-12">
                                    <input
                                        type="text"
                                        className="common-input border-gray-100"
                                        placeholder="City"
                                    />
                                </div>
                                <div className="col-12">
                                    <input
                                        type="text"
                                        className="common-input border-gray-100"
                                        placeholder="Sans Fransisco"
                                    />
                                </div>
                                <div className="col-12">
                                    <input
                                        type="text"
                                        className="common-input border-gray-100"
                                        placeholder="Post Code"
                                    />
                                </div>
                                <div className="col-12">
                                    <input
                                        type="number"
                                        className="common-input border-gray-100"
                                        placeholder="Phone"
                                    />
                                </div>
                                <div className="col-12">
                                    <input
                                        type="email"
                                        className="common-input border-gray-100"
                                        placeholder="Email Address"
                                    />
                                </div>
                                <div className="col-12">
                                    <div className="my-40">
                                        <h6 className="text-lg mb-24">Additional Information</h6>
                                        <input
                                            type="text"
                                            className="common-input border-gray-100"
                                            placeholder="Notes about your order, e.g. special notes for delivery."
                                        />
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="col-xl-3 col-lg-4">
                        <div className="checkout-sidebar">
                            <div className="bg-color-three rounded-8 p-24 text-center">
                                <span className="text-gray-900 text-xl fw-semibold">
                                    Your Orders
                                </span>
                            </div>
                            <div className="border border-gray-100 rounded-8 px-24 py-40 mt-24">
                                <div className="mb-32 pb-32 border-bottom border-gray-100 flex-between gap-8">
                                    <span className="text-gray-900 fw-medium text-xl font-heading-two">
                                        Product
                                    </span>
                                    <span className="text-gray-900 fw-medium text-xl font-heading-two">
                                        Subtotal
                                    </span>
                                </div>
                                {cartItems?.map((item, index) => (
                                    <div key={index} className="flex-between gap-24 mb-32">
                                        <div className="flex-align gap-12">
                                            <span className="text-gray-900 fw-normal text-md font-heading-two w-144">
                                                {item?.productId?.name}
                                            </span>
                                            <span className="text-gray-900 fw-normal text-md font-heading-two">
                                                <i className="ph-bold ph-x" />
                                            </span>
                                            <span className="text-gray-900 fw-semibold text-md font-heading-two">
                                                {item?.quantity}
                                            </span>
                                        </div>
                                        <span className="text-gray-900 fw-bold text-md font-heading-two">
                                            ${item?.productId?.price?.toFixed(2)}
                                        </span>
                                    </div>
                                ))}
                                <div className="border-top border-gray-100 pt-30  mt-30">
                                    <div className="mb-32 flex-between gap-8">
                                        <span className="text-gray-900 font-heading-two text-xl fw-semibold">
                                            Subtotal
                                        </span>
                                        <span className="text-gray-900 font-heading-two text-md fw-bold">
                                            ${calculateTotal()}
                                        </span>
                                    </div>
                                    <div className="mb-0 flex-between gap-8">
                                        <span className="text-gray-900 font-heading-two text-xl fw-semibold">
                                            Total
                                        </span>
                                        <span className="text-gray-900 font-heading-two text-md fw-bold">
                                            ${calculateTotal()}
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-32">
                                <div className="payment-item">
                                    <div className="form-check common-check common-radio py-16 mb-0">
                                        <input
                                            className="form-check-input"
                                            type="radio"
                                            name="payment"
                                            id="payment1"
                                            checked={selectedPayment === 'payment1'}
                                            onChange={handlePaymentChange}
                                        />
                                        <label
                                            className="form-check-label fw-semibold text-neutral-600"
                                            htmlFor="payment1"
                                        >
                                            Direct Bank transfer
                                        </label>
                                    </div>
                                    {selectedPayment === 'payment1' && (
                                        <div className="payment-item__content px-16 py-24 rounded-8 bg-main-50 position-relative d-block">
                                            <p className="text-gray-800">
                                                Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.
                                            </p>
                                        </div>
                                    )}
                                </div>
                                <div className="payment-item">
                                    <div className="form-check common-check common-radio py-16 mb-0">
                                        <input
                                            className="form-check-input"
                                            type="radio"
                                            name="payment"
                                            id="payment3"
                                            checked={selectedPayment === 'payment3'}
                                            onChange={handlePaymentChange}
                                        />
                                        <label
                                            className="form-check-label fw-semibold text-neutral-600"
                                            htmlFor="payment3"
                                        >
                                            Cash on delivery
                                        </label>
                                    </div>
                                    {selectedPayment === 'payment3' && (
                                        <div className="payment-item__content px-16 py-24 rounded-8 bg-main-50 position-relative d-block">
                                            <p className="text-gray-800">
                                                Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.
                                            </p>
                                        </div>
                                    )}
                                </div>
                            </div>
                            <div className="mt-32 pt-32 border-top border-gray-100">
                                <p className="text-gray-500">
                                    Your personal data will be used to process your order, support
                                    your experience throughout this website, and for other purposes
                                    described in our{" "}
                                    <Link to="#" className="text-main-600 text-decoration-underline">
                                        {" "}
                                        privacy policy
                                    </Link>{" "}
                                    .
                                </p>
                            </div>
                            <Link
                                onClick={handlePlaceOrder}
                                className="btn btn-main mt-40 py-18 w-100 rounded-8 mt-56"
                            >
                                Place Order
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Checkout