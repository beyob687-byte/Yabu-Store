import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-[70vh] flex-col items-center justify-center px-6 text-center">
      <p className="text-7xl font-extrabold text-blue-600">404</p>
      <h1 className="mt-4 text-3xl font-bold text-gray-900">
        Oops! Product Not Found
      </h1>
      <p className="mt-3 max-w-md text-gray-600">
        This product may have been removed or the link might be incorrect.
        There are plenty more to discover.
      </p>
      <Link
        href="/products"
        className="mt-8 rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
      >
        Explore Our Products
      </Link>
      <Link
        href="/"
        className="mt-4 text-sm text-gray-600 hover:text-blue-600"
      >
        Back to Home
      </Link>
    </main>
  );
}