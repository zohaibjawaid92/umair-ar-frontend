import React , { useEffect, useState }  from 'react'
import { Link } from 'react-router-dom'
import QuantityControl from '../helper/QuantityControl'

const CartSection = () => {
    const [cart, setCart] = useState(null);

    useEffect(() => {
        const fetchCartData = async () => {
            try {
                const response = await fetch('https://umair-ar-backend.vercel.app/product/cart');
                const data = await response.json();
                if (data.success) {
                    setCart(data.data);  // Store the cart data in state
                } else {
                    console.error('Failed to fetch cart data');
                }
            } catch (error) {
                console.error('Error fetching cart data', error);
            }
        };

        fetchCartData();
    }, []);


    const removeFromCart = async (productId) => {
        try {
            // Call the backend API to remove the product from the cart
            const response = await fetch('https://umair-ar-backend.vercel.app/product/remove-from-cart', {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ productId }),
            });

            const data = await response.json();
            if (data.success) {
                // Remove the product from the state
                setCart(prevCart => ({
                    ...prevCart,
                    items: prevCart.items.filter(item => item.productId._id !== productId),
                }));
                alert('Product removed successfully.');
            } else {
                alert('Failed to remove product from cart.');
            }
        } catch (error) {
            console.error('Error removing product from cart', error);
            alert('An error occurred while removing the product.');
        }
    };


    if (!cart) {
        return <div>Loading...</div>;
    }
    const subtotal = cart.items.reduce((total, item) => total + item.productId.price * item.quantity, 0);
    return (
        <section className="cart py-80">
            <div className="container container-lg">
                <div className="row gy-4">
                    <div className="col-xl-9 col-lg-8">
                        <div className="cart-table border border-gray-100 rounded-8 px-40 py-48">
                            <div className="overflow-x-auto scroll-sm scroll-sm-horizontal">
                                <table className="table style-three">
                                    <thead>
                                        <tr>
                                            <th className="h6 mb-0 text-lg fw-bold">Delete</th>
                                            <th className="h6 mb-0 text-lg fw-bold">Product Name</th>
                                            <th className="h6 mb-0 text-lg fw-bold">Price</th>
                                            <th className="h6 mb-0 text-lg fw-bold">Quantity</th>
                                            <th className="h6 mb-0 text-lg fw-bold">Subtotal</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {cart.items.map(item => (
                                            <tr key={item._id}>
                                                <td>
                                                    <button
                                                        type="button"
                                                        className="remove-tr-btn flex-align gap-12 hover-text-danger-600"
                                                        onClick={() => removeFromCart(item.productId._id)}
                                                    >
                                                        <i className="ph ph-x-circle text-2xl d-flex" />
                                                        Remove
                                                    </button>
                                                </td>
                                                <td>
                                                    <div className="table-product d-flex align-items-center gap-24">
                                                        <Link
                                                            to={`/product-details-two/${item.productId._id}`}
                                                            className="table-product__thumb border border-gray-100 rounded-8 flex-center"
                                                        >
                                                            <img
                                                               src={item.productId?.mainProductImage || 'assets/images/thumbs/product-two-img1.png'}
                                                                alt="product"
                                                            />
                                                        </Link>
                                                        <div className="table-product__content text-start">
                                                            <h6 className="title text-lg fw-semibold mb-8">
                                                                <Link
                                                                    to={`/product-details-two/${item.productId._id}`}
                                                                    className="link text-line-2"
                                                                >
                                                                    {item.productId.name}
                                                                </Link>
                                                            </h6>
                                                            <p className="text-sm">{item.productId.description}</p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <span className="text-lg h6 mb-0 fw-semibold">${item.productId.price}</span>
                                                </td>
                                                <td>
                                                    <QuantityControl initialQuantity={item.quantity} />
                                                </td>
                                                <td>
                                                    <span className="text-lg h6 mb-0 fw-semibold">${item.productId.price * item.quantity}</span>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4">
                        <div className="cart-sidebar border border-gray-100 rounded-8 px-24 py-40">
                            <h6 className="text-xl mb-32">Cart Totals</h6>
                            <div className="bg-color-three rounded-8 p-24">
                                <div className="mb-32 flex-between gap-8">
                                    <span className="text-gray-900 font-heading-two">Subtotal</span>
                                    <span className="text-gray-900 fw-semibold">${subtotal}</span>
                                </div>
                                <div className="mb-32 flex-between gap-8">
                                    <span className="text-gray-900 font-heading-two">
                                        Extimated Delivery
                                    </span>
                                    <span className="text-gray-900 fw-semibold">Free</span>
                                </div>
                                <div className="mb-0 flex-between gap-8">
                                    <span className="text-gray-900 font-heading-two">
                                        Extimated Taxs
                                    </span>
                                    <span className="text-gray-900 fw-semibold">USD 10.00</span>
                                </div>
                            </div>
                            <div className="bg-color-three rounded-8 p-24 mt-24">
                                <div className="flex-between gap-8">
                                    <span className="text-gray-900 text-xl fw-semibold">Total</span>
                                    <span className="text-gray-900 text-xl fw-semibold">${subtotal + 10}</span>
                                </div>
                            </div>
                            <Link
                                to="/checkout"
                                className="btn btn-main mt-40 py-18 w-100 rounded-8"
                            >
                                Proceed to checkout
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default CartSection