import Link from "next/link";
// import { products } from "@/lib/products";
// import ProductCard from "@/components/ProductCard";

export default function HomePage() {
//   const featuredProducts = products.slice(0, 3);

  return (
    <main className="mx-auto max-w-6xl px-6 py-12">
      {/* Welcome Section */}
      <section className="rounded-2xl bg-blue-50 px-8 py-16 text-center">
        <h1 className="text-4xl font-bold text-gray-900">
          Welcome to Our Store
        </h1>

        <p className="mt-4 text-lg text-gray-600">
          Discover quality products at great prices.
        </p>

        <Link
          href="/products"
          className="mt-6 inline-block rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
        >
          Explore Products
        </Link>
      </section>

      {/* Featured Products */}
      <section className="mt-12">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-gray-900">
            Featured Products
          </h2>

          <Link
            href="/products"
            className="font-medium text-blue-600 hover:underline"
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