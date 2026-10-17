import Link from "next/link";
import CartIcon from "./CartIcon";
// import "./Header.css";

export default function Header() {
  return (
    <header className="site-header">
      <div className="header-inner">
        <Link href="/" className="store-logo">
          Yabu<span>-Store</span>
        </Link>

        <nav className="main-nav">
          <Link href="/">Home</Link>
          <Link href="/products">Shop</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/checkout">Checkout</Link>
        </nav>

        <div className="header-actions">
          <Link
            href="/search"
            className="header-icon"
            aria-label="Search"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <circle cx="11" cy="11" r="7" />
              <path d="m16 16 5 5" />
            </svg>
          </Link>

          <Link
            href="/account"
            className="header-icon"
            aria-label="Account"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <circle cx="12" cy="8" r="4" />
              <path d="M4 21a8 8 0 0 1 16 0" />
            </svg>
          </Link>

          <CartIcon />
        </div>
      </div>
    </header>
  );
}