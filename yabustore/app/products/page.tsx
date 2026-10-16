"use client";
import useSWR from "swr"
import { useState } from "react";
import {fetcher} from "@/data/fetcher"
import ProductCard from "@/component/productCard";
import "./products.css";

export default function ProductsPage() {

  const {data,isLoading,error}= useSWR("/api/product",fetcher)
  const [selectedCategory, setSelectedCategory] = useState("All");
if(isLoading){
  return <p>Loading.....</p>
}
if(error){
  return <p>failed to fetche</p>
}




  const categories = [
    "All",
    ...new Set(data.map((pro) => pro.category)),
  ];

  const filteredProducts = data.filter(
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