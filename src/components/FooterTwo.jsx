import React from 'react'
import { Link } from 'react-router-dom'

const FooterTwo = () => {
    return (
        <footer className="footer py-80">
            <div className="container container-lg">
                <div className="footer-item-two-wrapper d-flex align-items-start flex-wrap">
                    <div className="footer-item max-w-275">
                        <div className="footer-item__logo">
                            <Link to="/">
                                {" "}
                                <img src="assets/file5.png" alt="Logo" />
                            </Link>
                        </div>
                        <p className="mb-24">
                        Transform Your Space Before You Buy – Experience Furniture in AR.
                        </p>
                        <div className="flex-align gap-16 mb-16">
                            <span className="w-32 h-32 flex-center rounded-circle border border-gray-100 text-main-two-600 text-md flex-shrink-0">
                                <i className="ph-fill ph-phone-call" />
                            </span>
                            <Link
                                to="/tel:+00123456789"
                                className="text-md text-gray-900 hover-text-main-600"
                            >
                                +00 123 456 789
                            </Link>
                        </div>
                        <div className="flex-align gap-16 mb-16">
                            <span className="w-32 h-32 flex-center rounded-circle border border-gray-100 text-main-two-600 text-md flex-shrink-0">
                                <i className="ph-fill ph-envelope" />
                            </span>
                            <Link
                                to="/mailto:support24@marketpro.com"
                                className="text-md text-gray-900 hover-text-main-600"
                            >
                                support24@snaphome.com
                            </Link>
                        </div>
                        <div className="flex-align gap-16 mb-16">
                            <span className="w-32 h-32 flex-center rounded-circle border border-gray-100 text-main-two-600 text-md flex-shrink-0">
                                <i className="ph-fill ph-map-pin" />
                            </span>
                            <span className="text-md text-gray-900 ">
                                789 Inner Lane, Karachi, Pakistan
                            </span>
                        </div>
                    </div>
                    <div className="footer-item">
                        <h6 className="footer-item__title">About us</h6>
                        <ul className="footer-menu">
                            <li className="mb-16">
                                <Link to="/shop" className="text-gray-600 hover-text-main-600">
                                    Contact Us
                                </Link>
                            </li>
                            <li className="mb-16">
                                <Link to="/shop" className="text-gray-600 hover-text-main-600">
                                    Feedback
                                </Link>
                            </li>
                            <li className="mb-16">
                                <Link to="/shop" className="text-gray-600 hover-text-main-600">
                                    Rules &amp; Policy
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="footer-item">
                        <h6 className="footer-item__title">Customer Support</h6>
                        <ul className="footer-menu">
                            <li className="mb-16">
                                <Link to="/shop" className="text-gray-600 hover-text-main-600">
                                    Help Center
                                </Link>
                            </li>
                            <li className="mb-16">
                                <Link
                                    to="/contact"
                                    className="text-gray-600 hover-text-main-600"
                                >
                                    Contact Us
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="footer-item">
                        <h6 className="footer-item__title">My Account</h6>
                        <ul className="footer-menu">
                            <li className="mb-16">
                                <Link to="/shop" className="text-gray-600 hover-text-main-600">
                                    Shoping Cart
                                </Link>
                            </li>
                            <li className="mb-16">
                                <Link to="/shop" className="text-gray-600 hover-text-main-600">
                                    Wishlist
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="footer-item">
                        <h6 className="footer-item__title">Information</h6>
                        <ul className="footer-menu">
                            <li className="mb-16">
                                <Link to="/shop" className="text-gray-600 hover-text-main-600">
                                    Privacy Policy
                                </Link>
                            </li>
                            <li className="mb-16">
                                <Link to="/shop" className="text-gray-600 hover-text-main-600">
                                    Community
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>

    )
}

export default FooterTwo