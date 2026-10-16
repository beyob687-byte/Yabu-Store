
import Link from "next/link";
// import "./Footer.css";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div className="footer-brand">
          <Link href="/" className="footer-logo">
            Yabu<span>-Store</span>
          </Link>

          <p>
            Discover your style. Find your fit.
            Shop clothing and accessories made for you.
          </p>

          <div className="footer-socials">
            <a href="https://instagram.com" aria-label="Instagram">
              Instagram
            </a>
            <a href="https://facebook.com" aria-label="Facebook">
              Facebook
            </a>
            <a href="https://tiktok.com" aria-label="TikTok">
              TikTok
            </a>
          </div>
        </div>

        <div className="footer-column">
          <h3>Shop</h3>
          <Link href="/product">All Products</Link>
          <Link href="/product?category=men">Men</Link>
          <Link href="/product?category=women">Women</Link>
          <Link href="/product?category=accessories">Accessories</Link>
        </div>

        <div className="footer-column">
          <h3>Customer Care</h3>
          <Link href="/contact">Contact Us</Link>
          <Link href="/contact">Shipping & Delivery</Link>
          <Link href="/contact">Returns & Exchanges</Link>
          <Link href="/contact">FAQs</Link>
        </div>

        <div className="footer-column">
          <h3>About Us</h3>
          <Link href="/about">Our Story</Link>
          <Link href="/about">Privacy Policy</Link>
          <Link href="/about">Terms & Conditions</Link>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          &copy; 2026 Yabu-Store. All rights reserved.
        </p>
        <p>Made with care for your style.</p>
      </div>
    </footer>
  );
}
