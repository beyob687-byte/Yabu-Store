
"use client";

import Link from "next/link";
import useSWR from "swr";
import { useParams } from "next/navigation";
import { fetcher } from "@/data/fetcher";
import "../products.css";
import "./product-details.css"

export default function ProductDetailPage() {
  const params = useParams<{ id: string }>();
  const id = Number(params.id);

  const { data, isLoading, error } = useSWR(
    `/api/product/${id}`,
    fetcher
  );

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Failed to fetch product.</p>;
  }

  if (!data) {
    return <p>Product not found.</p>;
  }

  return (
    <main className="product-detail-page">
      <Link href="/products" className="product-back-link">
        ← Back to Products
      </Link>

      <div className="product-detail-layout">
        <img
          src={data.image}
          alt={data.name}
          className="product-detail-image"
        />

        <section className="product-detail-info">
          <p className="product-category">{data.category}</p>
          <h1 className="product-detail-title">{data.name}</h1>
          <p className="product-detail-description">
            {data.description}
          </p>
          <p className="product-detail-price">
            {data.price?.toLocaleString()} ETB
          </p>
        </section>
      </div>
    </main>
  );
}
