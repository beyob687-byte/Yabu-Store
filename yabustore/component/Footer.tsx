
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
          <Link href="/shop">All Products</Link>
          <Link href="/shop?category=men">Men</Link>
          <Link href="/shop?category=women">Women</Link>
          <Link href="/shop?category=accessories">Accessories</Link>
        </div>

        <div className="footer-column">
          <h3>Customer Care</h3>
          <Link href="/contact">Contact Us</Link>
          <Link href="/shipping">Shipping & Delivery</Link>
          <Link href="/returns">Returns & Exchanges</Link>
          <Link href="/faq">FAQs</Link>
        </div>

        <div className="footer-column">
          <h3>About Us</h3>
          <Link href="/about">Our Story</Link>
          <Link href="/privacy">Privacy Policy</Link>
          <Link href="/terms">Terms & Conditions</Link>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} Yabu-Store. All rights reserved.
        </p>
        <p>Made with care for your style.</p>
      </div>
    </footer>
  );
}
