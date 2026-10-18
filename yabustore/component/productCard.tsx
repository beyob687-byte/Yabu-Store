"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useCartStore } from "@/store/cartStore";
import "./ProductCard.css";

type Product = {
  id: number;
  name: string;
  price: number;
  category: string;
  image: string;
  available: boolean;
};

type ProductsProps = {
  product: Product;
};

export default function ProductCard({ product }: ProductsProps) {
  const addToCart = useCartStore((state) => state.addToCart);
  const [added, setAdded] = useState(false);

  const handleAddToCart = () => {
    if (!product.available) return;

    addToCart({
      id: product.id,
      name: product.name,
      image: product.image,
      price: product.price,
    });

    setAdded(true);
  };

  return (
    <article className="product-card">
      <Link
        href={`/products/${product.id}`}
        className="product-card-image-link"
        aria-label={`View ${product.name}`}
      >
        <div className="product-card-image-wrapper">
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 560px) 50vw, (max-width: 900px) 50vw, 33vw"
            className="product-card-image"
          />

          <span
            className={`product-availability ${
              product.available ? "available" : "unavailable"
            }`}
          >
            {product.available ? "In Stock" : "Out of Stock"}
          </span>
        </div>
      </Link>

      <div className="product-card-content">
        <p className="product-card-category">{product.category}</p>

        <h2 className="product-card-title">
          <Link href={`/products/${product.id}`}>{product.name}</Link>
        </h2>

        <p className="product-card-price">
          {product.price.toLocaleString("en-US")} ETB
        </p>

        <button
          type="button"
          className={`product-card-add-button ${added ? "is-added" : ""}`}
          onClick={handleAddToCart}
          disabled={!product.available}
        >
          {added ? (
            <>
              <span aria-hidden="true">✓</span>
              Added to Cart
            </>
          ) : (
            <>
              <span aria-hidden="true">+</span>
              Add to Cart
            </>
          )}
        </button>

        <Link
          href={`Products/${product.id}`}
          className="product-card-detail-link"
        >
          View Details <span aria-hidden="true">→</span>
        </Link>

        <span className="sr-only" aria-live="polite">
          {added ? `${product.name} added to cart` : ""}
        </span>
      </div>
    </article>
  );
}
