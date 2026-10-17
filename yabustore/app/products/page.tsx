"use client";

import { useState } from "react";
import useSWR from "swr";
import { fetcher } from "@/data/fetcher";
import ProductCard from "@/component/productCard";
import "./products.css";

type Product = {
  id: number;
  name: string;
  price: number;
  category: string;
  image: string;
  available: boolean;
};

export default function ProductsPage() {
  const { data, isLoading, error } = useSWR<Product[]>(
    "/api/product",
    fetcher
  );

  const [selectedCategory, setSelectedCategory] = useState("All");

  const products = Array.isArray(data) ? data : [];

  const categories = [
    "All",
    ...new Set(products.map((product) => product.category)),
  ];

  const filteredProducts = products.filter(
    (product) =>
      selectedCategory === "All" ||
      product.category === selectedCategory
  );

  return (
    <main className="products-page">
      <section className="products-intro">
        <div className="products-intro-content">
          <p className="products-eyebrow">
            YABU-STORE / THE COLLECTION
          </p>

          <h1 className="products-title">
            Find your
            <br />
            next <span>favorite.</span>
          </h1>

          <p className="products-description">
            Good style starts with the right pieces.
            Explore our collection and make every outfit your own.
          </p>

          <a
            href="#product-collection"
            className="products-explore-link"
          >
            Explore the collection <span>↓</span>
          </a>
        </div>

        <div className="products-intro-side">
          <span className="intro-side-number">Y / S — 001</span>

          <p>
            YOUR STYLE.
            <br />
            YOUR RULES.
          </p>

          <span className="intro-side-caption">
            Curated for everyday living.
          </span>
        </div>
      </section>

      <section
        className="products-collection"
        id="product-collection"
      >
        <div className="products-section-heading">
          <div>
            <p className="products-eyebrow">TAKE YOUR PICK</p>
            <h2>Explore the edit.</h2>
          </div>

          <p className="products-count">
            {isLoading
              ? "Loading collection..."
              : error
                ? "Collection unavailable"
                : `${filteredProducts.length} ${
                    filteredProducts.length === 1
                      ? "piece"
                      : "pieces"
                  }`}
          </p>
        </div>

        {!isLoading && !error && products.length > 0 && (
          <div className="products-toolbar">
            <div className="products-filter">
              <label htmlFor="category">Category</label>

              <select
                id="category"
                value={selectedCategory}
                onChange={(event) =>
                  setSelectedCategory(event.target.value)
                }
                className="category-select"
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>
          </div>
        )}

        {isLoading ? (
          <div
            className="products-grid"
            aria-label="Loading products"
          >
            {Array.from({ length: 6 }, (_, index) => (
              <div className="product-skeleton" key={index}>
                <div className="product-skeleton-image" />
                <div className="product-skeleton-line" />
                <div className="product-skeleton-short-line" />
              </div>
            ))}
          </div>
        ) : error ? (
          <div className="products-message">
            <h2>We couldn't load the collection.</h2>
            <p>Please try refreshing the page.</p>
          </div>
        ) : products.length === 0 ? (
          <div className="products-message">
            <h2>Something new is on its way.</h2>
            <p>There are no products to display just yet.</p>
          </div>
        ) : filteredProducts.length > 0 ? (
          <div className="products-grid">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
              />
            ))}
          </div>
        ) : (
          <div className="products-empty-state">
            <h2>Nothing in this edit just yet.</h2>

            <p>
              Explore the full collection to find your next favorite.
            </p>

            <button
              type="button"
              className="products-reset-button"
              onClick={() => setSelectedCategory("All")}
            >
              View all products ↗
            </button>
          </div>
        )}

        {!isLoading && !error && products.length > 0 && (
          <p className="products-bottom-note">
            GOOD STYLE. NO OVERTHINKING.
          </p>
        )}
      </section>
    </main>
  );
}