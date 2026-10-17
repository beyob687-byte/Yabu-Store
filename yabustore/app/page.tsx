import Link from "next/link";

export default function HomePage() { 
  return ( 
  <main className="home-page"> 
  <section className="hero"> 
    <p className="about-label">WELCOME TO YABU-STORE</p>

    <h1 className="hero-title">
      Style that feels like <span>you.</span>
    </h1>

    <p className="hero-copy">
      Discover clothing that expresses your personality.
      Find your next favorite look with Yabu-Store.
    </p>

    <Link href="/products" className="primary-link">
      Explore Our Collection
    </Link>
  </section>

  {/* Featured Products */}
  <section className="featured-section">
    <div className="section-heading">
      <div>
        <p className="about-label">HANDPICKED FOR YOU</p>
        <h2 className="section-title">Featured Products</h2>
      </div>

      <Link href="/product" className="text-link">
        View All →
      </Link>
    </div>

    {/* Add your featured products here */}
  </section>
</main>


); }