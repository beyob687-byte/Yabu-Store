
"use client";
import { Suspense, useState } from "react";
import Link from "next/link";
import useSWR from "swr";
import { notFound, useParams } from "next/navigation";
import { fetcher } from "@/data/fetcher";
import { useCartStore } from "@/store/cartStore";
import "../products.css";
import "./product-details.css";

export default function ProductDetailPage() {
  return (
    <Suspense fallback={<p className="product-detail-message">Loading product...</p>}>
      <ProductDetails />
    </Suspense>
  );
}

function ProductDetails() {
  const params = useParams<{ id: string }>();
  const id = Number(params.id);

  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  const addToCart = useCartStore((state) => state.addToCart);

  const { data, isLoading, error } = useSWR(
    Number.isFinite(id) && id > 0 ? `/api/product/${id}` : null,
    fetcher
  );

  if (isLoading) {
    return <p className="product-detail-message">Loading product...</p>;
  }

  if (error) {
    if (error.status === 404) {
      notFound();
    }

    return (
      <p className="product-detail-message">
        Failed to fetch product. Please try again.
      </p>
    );
  }

  if (!data) {
    return (
      <p className="product-detail-message">Product not found.</p>
    );
  }

  const isAvailable = data.available !== false;

  const handleAddToCart = () => {
    if (!isAvailable) return;

    addToCart(
      {
        id: data.id,
        name: data.name,
        price: data.price,
        image: data.image,
      },
      quantity
    );

    setAdded(true);
  };

  return (
    <main className="product-detail-page">
      <Link href="/products" className="product-back-link">
        ← Back to Products
      </Link>

      <div className="product-detail-layout">
        <div className="product-detail-image-wrapper">
          <img
            src={data.image}
            alt={data.name}
            className="product-detail-image"
          />
        </div>

        <section className="product-detail-info">
          <p className="product-category">{data.category}</p>

          <h1 className="product-detail-title">{data.name}</h1>

          <p className="product-detail-description">
            {data.description}
          </p>

          <p className="product-detail-price">
            {data.price?.toLocaleString("en-US")} ETB
          </p>

          <p
            className={`product-detail-stock ${
              isAvailable ? "in-stock" : "out-of-stock"
            }`}
          >
            <span aria-hidden="true">●</span>{" "}
            {isAvailable ? "In Stock" : "Out of Stock"}
          </p>

          <div className="product-purchase">
            <label className="product-quantity-label">
              Quantity
            </label>

            <div className="product-purchase-controls">
              <div
                className="product-quantity"
                aria-label="Choose product quantity"
              >
                <button
                  type="button"
                  aria-label="Decrease quantity"
                  onClick={() => {
                    setQuantity((current) => Math.max(1, current - 1));
                    setAdded(false);
                  }}
                  disabled={quantity <= 1 || !isAvailable}
                >
                  −
                </button>

                <span aria-live="polite">{quantity}</span>

                <button
                  type="button"
                  aria-label="Increase quantity"
                  onClick={() => {
                    setQuantity((current) => current + 1);
                    setAdded(false);
                  }}
                  disabled={!isAvailable}
                >
                  +
                </button>
              </div>
            </div>

            <button
              type="button"
              className="product-add-to-cart"
              onClick={handleAddToCart}
              disabled={!isAvailable}
            >
              {isAvailable
                ? added
                  ? "✓ Added to Cart"
                  : "Add to Cart"
                : "Out of Stock"}
              {isAvailable && !added && (
                <span aria-hidden="true"> →</span>
              )}
            </button>

            {added && (
              <p className="product-added-message" role="status">
                {quantity} {quantity === 1 ? "item" : "items"} added
                to your cart.
                {" "}
                <Link href="/cart">View Cart</Link>
              </p>
            )}
          </div>
        </section>
      </div>
    </main>
  );
}