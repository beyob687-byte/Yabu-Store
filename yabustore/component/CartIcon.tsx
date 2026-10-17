
"use client";

import Link from "next/link";
import { useCartStore } from "@/store/cartStore";

export default function CartIcon() {
  const cartCount = useCartStore((state) => state.cartCount);

  return (
    <Link
      href="/cart"
      className="header-icon cart-icon"
      aria-label={`Shopping cart, ${cartCount} ${
        cartCount === 1 ? "item" : "items"
      }`}
    >
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path d="M3 3h2l2.5 12h11L21 7H6" />
        <circle cx="9" cy="20" r="1" />
        <circle cx="17" cy="20" r="1" />
      </svg>

      {cartCount > 0 && (
        <span className="cart-count-badge" aria-hidden="true">
          {cartCount > 99 ? "99+" : cartCount}
        </span>
      )}
    </Link>
  );
}