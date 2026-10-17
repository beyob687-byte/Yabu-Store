
"use client";

import { useState } from "react";
import useSWR from "swr";

import { fetcher } from "@/data/fetcher";
import ProductCard from "@/component/productCard";

import "./products.css";

export default function ProductsPage() {
  const { data, isLoading, error } = useSWR(
    "/api/product",
    fetcher
  );

  const [selectedCategory, setSelectedCategory] = useState("All");

  if (isLoading) {
    return (
      <main className="products-page">
        <p className="products-message">Loading products...</p>
      </main>
    );
  }

  if (error) {
    return (
      <main className="products-page">
        <p className="products-message">
          Failed to load products. Please try again.
        </p>
      </main>
    );
  }

  if (!data) {
    return (
      <main className="products-page">
        <p className="products-message">No products available.</p>
      </main>
    );
  }

  const categories = [
    "All",
    ...new Set(data.map((product) => product.category)),
  ];

  const filteredProducts = data.filter(
    (product) =>
      selectedCategory === "All" ||
      product.category === selectedCategory
  );

  return (
    <main className="products-page">
      {/* Page Heading */}
      <section className="products-intro">
        <p className="products-eyebrow">OUR COLLECTION</p>

        <h1 className="products-title">Our Products</h1>

        <p className="products-description">
          Discover your favorites, explore our collection,
          and find something you'll love.
        </p>
      </section>

      {/* Category Filter */}
      <section className="products-toolbar">
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

        <p className="products-count">
          Showing <strong>{filteredProducts.length}</strong>{" "}
          {filteredProducts.length === 1 ? "product" : "products"}
        </p>
      </section>

      {/* Products Grid */}
      {filteredProducts.length > 0 ? (
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
          <h2>No products found</h2>

          <p>
            Try selecting another category to explore our products.
          </p>

          <button
            type="button"
            className="products-reset-button"
            onClick={() => setSelectedCategory("All")}
          >
            View All Products
          </button>
        </div>
      )}
    </main>
  );
}
