import Link from "next/link";
// import { products } from "@/lib/products";
// import ProductCard from "@/components/ProductCard";

export default function HomePage() {
//   const featuredProducts = products.slice(0, 3);

  return (
    <main className="home-page">
      {/* Welcome Section */}
      <section className="hero">
        <h1 className="hero-title">
          Welcome to Our Store
        </h1>

        <p className="hero-copy">
          Discover quality products at great prices.
        </p>

        <Link
          href="/products"
          className="primary-link"
        >
          Explore Products
        </Link>
      </section>

      {/* Featured Products */}
      <section className="featured-section">
        <div className="section-heading">
          <h2 className="section-title">
            Featured Products
          </h2>

          <Link
            href="/products"
            className="text-link"
          >
            View All
          </Link>
        </div>

        {/* <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div> */}
      </section>
    </main>
  );
}