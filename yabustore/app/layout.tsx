import type { Metadata } from "next";
import Header from "@/component/Header";
import Footer from "@/component/Footer";
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
					<Header/>

					<div className="site-content">{children}</div>

					<Footer/>
				</div>
			</body>
		</html>
	);
}
