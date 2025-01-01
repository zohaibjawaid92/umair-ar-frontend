import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import axios from "axios";

const TrendingOne = () => {
    const [categories, setCategories] = useState([]);
    const [activeCategory, setActiveCategory] = useState("all");
    const [products, setProducts] = useState([]);

    // Fetch categories from the API
    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await axios.get("http://localhost:9000/category/categories"); // Replace with your actual API endpoint
                setCategories(response.data.data || []); // Assuming the categories are in response.data.data
            } catch (error) {
                console.error("Error fetching categories:", error);
            }
        };
        fetchCategories();
    }, []);

    // Fetch products based on the active category
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.post("http://localhost:9000/product/products/by-category", {
                    categoryId: activeCategory !== "all" ? activeCategory : null,
                });
                setProducts(response.data.data || []);
            } catch (error) {
                console.error("Error fetching products:", error);
                setProducts([]); // Clear products on error
            }
        };
        fetchProducts();
    }, [activeCategory]);

    return (
        <section className="trending-productss pt-80">
            <div className="container container-lg">
                <div className="border border-gray-100 p-24 rounded-16">
                    <div className="section-heading mb-24">
                        <div className="flex-between flex-wrap gap-8">
                            <h5 className="mb-0">Trending Products</h5>
                            <ul
                                className="nav common-tab style-two nav-pills"
                                id="pills-tab"
                                role="tablist"
                            >
                                <li className="nav-item" role="presentation">
                                    <button
                                        className={`nav-link ${activeCategory === "all" ? "active" : ""}`}
                                        onClick={() => setActiveCategory("all")}
                                    >
                                        All
                                    </button>
                                </li>
                                {categories.map((category) => (
                                    <li className="nav-item" role="presentation" key={category._id}>
                                        <button
                                            className={`nav-link ${activeCategory === category._id ? "active" : ""}`}
                                            onClick={() => setActiveCategory(category._id)}
                                        >
                                            {category.name}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="tab-content">
                        <div className="row g-12">
                            {products.map((product) => (
                                <div className="col-xxl-2 col-xl-3 col-lg-4 col-sm-6" key={product._id}>
                                    <div className="product-card h-100 p-16 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                                        <Link
                                            to={`/product-details-two/${product._id}`}
                                            className="product-card__thumb flex-center rounded-8 bg-gray-50 position-relative"
                                        >
                                            {product.isBestSeller && (
                                                <span className="product-card__badge bg-tertiary-600 px-8 py-4 text-sm text-white position-absolute inset-inline-start-0 inset-block-start-0">
                                                    Best Seller
                                                </span>
                                            )}
                                            <img
                                                src={product.mainProductImage}
                                                alt={product.name}
                                                className="w-auto max-w-unset"
                                            />
                                        </Link>
                                        <div className="product-card__content mt-16">
                                            {product.discount && (
                                                <span className="text-success-600 bg-success-50 text-sm fw-medium py-4 px-8">
                                                    {product.discount}% OFF
                                                </span>
                                            )}
                                            <h6 className="title text-lg fw-semibold my-16">
                                                <Link to={`/product-details-two/${product._id}`} className="link text-line-2">
                                                    {product.name}
                                                </Link>
                                            </h6>
                                            <div className="product-card__price mt-16 mb-30">
                                                {product.originalPrice && (
                                                    <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
                                                        ${product.originalPrice}
                                                    </span>
                                                )}
                                                <span className="text-heading text-md fw-semibold">
                                                    ${product.price}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                            {products.length === 0 && (
                                <div className="col-12">
                                    <p>No products found for this category.</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TrendingOne;
