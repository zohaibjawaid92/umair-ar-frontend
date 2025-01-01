import React from 'react'
import { Link } from 'react-router-dom';
import Slider from 'react-slick';

const BannerTwo = () => {
    const settings = {
        dots: true,

        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,


    };
    return (
        <div className="banner-two">
            <div className="container container-lg">
                <div className="banner-two-wrapper d-flex align-items-start">
                    {/* <div className="w-265 d-lg-block d-none flex-shrink-0">
                        <div className="responsive-dropdown style-two common-dropdown nav-submenu p-0 submenus-submenu-wrapper shadow-none border border-gray-100 position-relative border-top-0">
                            <button
                                type="button"
                                className="close-responsive-dropdown rounded-circle text-xl position-absolute inset-inline-end-0 inset-block-start-0 mt-4 me-8 d-lg-none d-flex"
                            >
                                <i className="ph ph-x" />{" "}
                            </button>
                            <div className="logo px-16 d-lg-none d-block">
                                <Link to="/" className="link">
                                    <img src="assets/images/logo/logo.png" alt="Logo" />
                                </Link>
                            </div>
                            <ul className="responsive-dropdown__list scroll-sm p-0 py-8 overflow-y-auto ">
                                <li className="has-submenus-submenu">
                                    <Link
                                        to="#"
                                        className="text-gray-500 text-15 py-12 px-16 flex-align gap-8 rounded-0"
                                    >
                                        <span>Chairs</span>
                                        <span className="icon text-md d-flex ms-auto">
                                            <i className="ph ph-caret-right" />
                                        </span>
                                    </Link>
                                    <div className="submenus-submenu py-16">
                                        <h6 className="text-lg px-16 submenus-submenu__title">
                                            Chairs
                                        </h6>
                                        <ul className="submenus-submenu__list max-h-300 overflow-y-auto scroll-sm">
                                            <li>
                                                <Link to="/shop">Dining Chairs</Link>
                                            </li>
                                            <li>
                                                <Link to="/shop">Accent Chairs</Link>
                                            </li>
                                            <li>
                                                <Link to="/shop">Office Chairs</Link>
                                            </li>
                                            <li>
                                                <Link to="/shop">Rocking Chairs</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="has-submenus-submenu">
                                    <Link
                                        to="#"
                                        className="text-gray-500 text-15 py-12 px-16 flex-align gap-8 rounded-0"
                                    >
                                        <span>Sofas</span>
                                        <span className="icon text-md d-flex ms-auto">
                                            <i className="ph ph-caret-right" />
                                        </span>
                                    </Link>
                                    <div className="submenus-submenu py-16">
                                        <h6 className="text-lg px-16 submenus-submenu__title">Sofas</h6>
                                        <ul className="submenus-submenu__list max-h-300 overflow-y-auto scroll-sm">
                                            <li>
                                                <Link to="/shop">Sectionals</Link>
                                            </li>
                                            <li>
                                                <Link to="/shop">Loveseats</Link>
                                            </li>
                                            <li>
                                                <Link to="/shop">Sleeper Sofas</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="has-submenus-submenu">
                                    <Link
                                        to="#"
                                        className="text-gray-500 text-15 py-12 px-16 flex-align gap-8 rounded-0"
                                    >
                                        <span>Tables</span>
                                        <span className="icon text-md d-flex ms-auto">
                                            <i className="ph ph-caret-right" />
                                        </span>
                                    </Link>
                                    <div className="submenus-submenu py-16">
                                        <h6 className="text-lg px-16 submenus-submenu__title">
                                        Tables
                                        </h6>
                                        <ul className="submenus-submenu__list max-h-300 overflow-y-auto scroll-sm">
                                            <li>
                                                <Link to="/shop">Dining Tables</Link>
                                            </li>
                                            <li>
                                                <Link to="/shop">Coffee Tables</Link>
                                            </li>
                                            <li>
                                                <Link to="/shop">Console Tables</Link>
                                            </li>
                                            <li>
                                                <Link to="/shop">Side Tables</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div> */}
                    <div style={{marginTop : '24px' , backgroundColor : '#e7e7e7'}} className="overflow-hidden position-relative arrow-center flex-grow-1 mb-0">
                        <div className="banner-item-two__slider">
                            <Slider {...settings}>
                                <div className="banner-item-two">
                                    <div className="banner-item-two__content">
                                        <span className="text-gray mb-8 h6">Starting at only $250</span>
                                        <h2 className="banner-item-two__title bounce text-gray">
                                            Get The Sound You Love For Less
                                        </h2>
                                        <Link
                                            to="/shop"
                                            className="btn btn-outline-black d-inline-flex align-items-center rounded-pill gap-8 mt-48"
                                        >
                                            Shop Now
                                            <span className="icon text-xl d-flex">
                                                <i className="ph ph-shopping-cart-simple" />
                                            </span>
                                        </Link>
                                    </div>
                                    <div className="banner-item-two__thumb position-absolute bottom-0">
                                        <img src="assets/images/furniture/1.webp" alt="" />
                                    </div>
                                </div>
                                <div className="banner-item-two">
                                    <div className="banner-item-two__content">
                                        <span className="text-gray mb-8 h6">Starting at only $250</span>
                                        <h2 className="banner-item-two__title bounce text-gray">
                                            Get The Sound You Love For Less
                                        </h2>
                                        <Link
                                            to="/shop"
                                            className="btn btn-outline-white d-inline-flex align-items-center rounded-pill gap-8 mt-48"
                                        >
                                            Shop Now
                                            <span className="icon text-xl d-flex">
                                                <i className="ph ph-shopping-cart-simple" />
                                            </span>
                                        </Link>
                                    </div>
                                    <div className="banner-item-two__thumb position-absolute bottom-0">
                                        <img src="assets/images/furniture/2.webp" alt="" />
                                    </div>
                                </div>
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default BannerTwo