"use client";

import { useState } from "react";
import { products } from "@/lib/products";
import ProductCard from "@/components/ProductCard";
import "./products.css";

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

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
      <h1 className="products-title">
        Our Products
      </h1>

      <p className="products-description">
        Discover your favorites, explore exciting products, and find something you'll love.
      </p>
      {/* Category Filter */}
      <div className="products-filter">
        <label htmlFor="category">
          Filter by category:
        </label>

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
        {filteredProducts.length} products found
      </p>

      {/* Catalogue Grid */}
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
        <p className="products-empty-state">
          No products found in this category.
        </p>
      )}
    </main>
  );
}