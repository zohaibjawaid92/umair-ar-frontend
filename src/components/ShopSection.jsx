import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Preloader from "../helper/Preloader"; // Import the Preloader component

const ShopSection = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);

  // Fetch categories from the API
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(
          "https://umair-ar-backend.vercel.app/category/categories"
        );
        const categoryList = response.data.data;
        setCategories(categoryList);

        // Automatically load the first category's products
        if (categoryList.length > 0) {
          setSelectedCategory(categoryList[0]._id);
          fetchProducts(categoryList[0]._id);
        }
        setLoading(false);
      } catch (error) {
        console.error("Error fetching categories:", error);
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  const fetchProducts = async (categoryId) => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://umair-ar-backend.vercel.app/product/products/category/${categoryId}`
      );
      setProducts(response.data.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching products:", error);
      setLoading(false);
    }
  };

  const handleCategoryClick = (categoryId) => {
    setSelectedCategory(categoryId);
    fetchProducts(categoryId);
  };

  return (
    <>
      {loading ? (
        <Preloader />
      ) : (
        <section className="shop py-80">
          <div className="container container-lg">
            <div className="row">
              {/* Sidebar Start */}
              <div className="col-lg-3">
                <div className="shop-sidebar__box border border-gray-100 rounded-8 p-32 mb-32">
                  <h6 className="text-xl border-bottom border-gray-100 pb-24 mb-24">
                    Product Category
                  </h6>
                  <ul className="max-h-540 overflow-y-auto scroll-sm">
                    {categories.map((category) => (
                      <li className="mb-24" key={category._id}>
                        <button
                          onClick={() => handleCategoryClick(category._id)}
                          className={`text-gray-900 hover-text-main-600 ${
                            selectedCategory === category._id ? "font-bold" : ""
                          }`}
                        >
                          {category.name}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              {/* Sidebar End */}
              {/* Content Start */}
              <div className="col-lg-9">
                <div className="list-grid-wrapper">
                  {products.length === 0 ? (
                    <p>No products available for this category.</p>
                  ) : (
                    products.map((product) => (
                      <div
                        key={product._id}
                        className="product-card h-100 p-16 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2"
                      >
                        <Link
                          to={`/product-details-two/${product._id}`}
                          className="product-card__thumb flex-center rounded-8 bg-gray-50 position-relative"
                        >
                          <img
                            src={product.mainProductImage}
                            alt={product.name}
                            className="w-auto max-w-unset"
                          />
                          {product.isBestSale && (
                            <span className="product-card__badge bg-primary-600 px-8 py-4 text-sm text-white position-absolute inset-inline-start-0 inset-block-start-0">
                              Best Sale
                            </span>
                          )}
                        </Link>
                        <div className="product-card__content mt-16">
                          <h6 className="title text-lg fw-semibold mt-12 mb-8">
                            <Link
                              to={`/product-details/${product._id}`}
                              className="link text-line-2"
                            >
                              {product.name}
                            </Link>
                          </h6>
                          <div className="product-card__price my-20">
                            <span className="text-heading text-md fw-semibold">
                              ${product.price}{" "}
                              <span className="text-gray-500 fw-normal">
                                /Qty
                              </span>
                            </span>
                          </div>
                          <Link
                            to="/cart"
                            className="product-card__cart btn bg-gray-50 text-heading hover-bg-main-600 hover-text-white py-11 px-24 rounded-8 flex-center gap-8 fw-medium"
                          >
                            Add To Cart <i className="ph ph-shopping-cart" />
                          </Link>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </div>
              {/* Content End */}
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default ShopSection;
