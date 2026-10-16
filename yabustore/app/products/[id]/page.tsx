import Link from "next/link";
import NotFound from "./Not-Found";
import { getProductById } from "@/lib/products";
import AddToCartButton from "@/components/AddToCartButton";
import "../products.css";

type ProductDetailPageProps = {
  params: Promise<{ id: string }>;
};

export default async function ProductDetailPage({
  params,
}: ProductDetailPageProps) {
  const { id } = await params;
  const product = getProductById(id);

  if (!product) {
    NotFound();
  }

  return (
    <main className="product-detail-page">
      <Link href="/products" className="product-back-link">
        ← Back to Products
      </Link>

      <div className="product-detail-layout">
        <img
          src={product.image}
          alt={product.name}
          className="product-detail-image"
        />

        <section className="product-detail-info">
          <p className="product-category">
            {product.category}
          </p>

          <h1 className="product-detail-title">
            {product.name}
          </h1>

          <p className="product-detail-description">
            {product.description}
          </p>

          <p className="product-detail-price">
            {product.price.toLocaleString()} ETB
          </p>

          <div className="product-detail-action">
            <AddToCartButton productName={product.name} />
          </div>
        </section>
      </div>
    </main>
  );
}