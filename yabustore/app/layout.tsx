import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
	title: "Yabu Store",
	description: "Discover quality products at Yabu Store.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body>
				<div className="site-shell">
					<header className="site-header">
						<div className="header-content">
							<Link href="/" className="brand">
								Yabu Store
							</Link>
							<nav aria-label="Main navigation" className="main-nav">
								<Link href="/" className="nav-link">
									Home
								</Link>
								<Link href="/products" className="nav-link">
									Products
								</Link>
							</nav>
						</div>
					</header>

					<div className="site-content">{children}</div>

					<footer className="site-footer">
						<div className="footer-content">
							Yabu Store
						</div>
					</footer>
				</div>
			</body>
		</html>
	);
}
