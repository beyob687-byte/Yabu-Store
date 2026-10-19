import ProductCard from "@/component/productCard";
import { product } from "@/data/products";
import Link from "next/link";

export default async function HomePage() {
  const data = await product();
  const featuredProducts = data.slice(18, 21);

  return (
    <main className="home-page">
      {/* Hero */}
      <section className="hero">
        <div className="hero-content">
          <p className="about-label">
            THE NEW WAY TO DRESS
          </p>

          <h1 className="hero-title">
            Wear your
            <br />
            <span>own story.</span>
          </h1>

          <p className="hero-copy">
            Thoughtfully chosen styles for wherever
            life takes you. Find the pieces that feel
            like they were made for you.
          </p>

          <div className="hero-actions">
            <Link href="/products" className="primary-link">
              Explore Collection <span>↗</span>
            </Link>

            <Link href="/products" className="hero-secondary-link">
              Discover your style
            </Link>
          </div>

          <div className="hero-note">
            <span className="hero-note-line" />
            <p>EVERYDAY ESSENTIALS. EXTRAORDINARY YOU.</p>
          </div>
        </div>

        <div className="hero-visual">
          <img
          src="/images/hero-model.jpg"
            alt="Fashion models wearing contemporary outfits"
          />

          <div className="hero-image-label">
            <span>01 / THE COLLECTION</span>
            <span>Effortless style, always.</span>
          </div>

          <div className="hero-sticker">
            <span>YOUR</span>
            <span>STYLE.</span>
            <span>YOUR RULES.</span>
          </div>
        </div>

        <div className="hero-index">Y / S — 001</div>
      </section>

      {/* Brand values */}
      <section className="brand-strip">
        <span>✳ Curated for you</span>
        <span>— Timeless over trends</span>
        <span>✳ Style without limits</span>
      </section>

      {/* Featured Products */}
      <section className="featured-section">
        <div className="section-heading">
          <div>
            <p className="about-label">THE EDIT</p>
            <h2 className="section-title">
              Pieces worth <span>wearing.</span>
            </h2>
            <p className="section-description">
              Your next favorite might be right here.
            </p>
          </div>

          <Link href="/products" className="text-link">
            View all products <span>↗</span>
          </Link>
        </div>

        <div className="product-grid">
          {featuredProducts.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>

        {featuredProducts.length === 0 && (
          <p className="empty-products">
            New arrivals are on their way. Check back soon.
          </p>
        )}
      </section>

      {/* Editorial banner */}
      <section className="editorial-section">
        <div className="editorial-image">
          <img
            src="https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=1200&q=85"
            alt="A curated collection of clothing"
          />
        </div>

        <div className="editorial-content">
          <p className="about-label">LESS, BUT BETTER</p>

          <h2>
            Good style.
            <br />
            <span>No overthinking.</span>
          </h2>

          <p>
            Getting dressed should feel good. Discover
            versatile pieces that work with your style,
            your routine, and your everyday life.
          </p>

          <Link href="/products" className="primary-link">
            Find Your Next Favorite <span>↗</span>
          </Link>

          <p className="editorial-signature">
            YOUR WARDROBE, YOUR WAY.
          </p>
        </div>
      </section>
    </main>
  );
}
