
import Link from "next/link";
import Image from "next/image";
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
  return (
    <article className="product-card">
      <Link
        href={`/Products/${product.id}`}
        className="product-card-image-link"
      >
        <div className="product-card-image-wrapper">
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 560px) 100vw, (max-width: 900px) 50vw, 33vw"
            className="product-card-image"
          />

          <span
            className={`product-availability ${product.available ? "available" : "unavailable"
              }`}
          >
            {product.available ? "In Stock" : "Out of Stock"}
          </span>
        </div>
      </Link>

      <div className="product-card-content">
        <p className="product-card-category">
          {product.category}
        </p>

        <h2 className="product-card-title">
          {product.name}
        </h2>

        <div className="product-card-footer">
          <p className="product-card-price">
            {product.price.toLocaleString("en-US", {
              style: "currency",
              currency: "ETB",
            })}
          </p>

          <Link
            href={`/Products/${product.id}`}
            className="product-card-detail-link"
          >
            View Details <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </article>
  );
}
