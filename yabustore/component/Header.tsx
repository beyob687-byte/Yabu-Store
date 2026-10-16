
import Link from "next/link";
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
                    <Link href="/shop">Shop</Link>
                    <Link href="/about">About</Link>
                    <Link href="/contact">Contact</Link>
                    <Link href="/shop?category=new-arrivals">New Arrivals</Link>
                </nav>

                <div className="header-actions">
                    <Link href="/search" className="header-icon" aria-label="Search">
                        <svg viewBox="0 0 24 24" aria-hidden="true">
                            <circle cx="11" cy="11" r="7" />
                            <path d="m16 16 5 5" />
                        </svg>
                    </Link>

                    <Link href="/account" className="header-icon" aria-label="Account">
                        <svg viewBox="0 0 24 24" aria-hidden="true">
                            <circle cx="12" cy="8" r="4" />
                            <path d="M4 21a8 8 0 0 1 16 0" />
                        </svg>
                    </Link>

                    <Link href="/cart" className="header-icon" aria-label="Shopping cart">
                        <svg viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M3 3h2l2.5 12h11L21 7H6" />
                            <circle cx="9" cy="20" r="1" />
                            <circle cx="17" cy="20" r="1" />
                        </svg>
                    </Link>
                </div>
            </div>
        </header>
    );
}
