import Link from "next/link";
import "./about.css";

export default function AboutPage() {
  return (
    <main className="about-page">
      <section className="about-hero">
        <p className="about-label">ABOUT YABU-STORE</p>

        <h1>
          Style that feels like <span>you.</span>
        </h1>

        <p className="about-intro">
          We believe clothing is more than what you wear.
          It is a way to express yourself, feel confident,
          and show the world who you are.
        </p>

        <Link href="/" className="about-button">
          Explore Our Collection
        </Link>
      </section>

      <section className="about-story">
        <div className="story-content">
          <p className="about-label">OUR STORY</p>

          <h2>Welcome to Yabu-Store</h2>

          <p>
            Yabu-Store was created with a simple idea:
            finding clothing you love should be easy and enjoyable.
          </p>

          <p>
            We aim to bring together style, quality, and
            affordability so you can find pieces that suit
            your taste and everyday life.
          </p>

          <p>
            Whether you are updating your wardrobe or looking
            for something new, we are here to help you discover
            your next favorite look.
          </p>
        </div>

        <div className="story-visual" aria-label="Yabu-Store fashion">
          <div className="story-visual-content">
            <span>YABU</span>
            <p>YOUR STYLE. YOUR STORY.</p>
          </div>
        </div>
      </section>

      <section className="about-values">
        <div className="values-heading">
          <p className="about-label">WHAT MATTERS TO US</p>
          <h2>More than just clothing.</h2>
        </div>

        <div className="values-grid">
          <article className="value-card">
            <span className="value-number">01</span>
            <h3>Personal Style</h3>
            <p>
              Discover clothing that reflects your personality
              and helps you express yourself.
            </p>
          </article>

          <article className="value-card">
            <span className="value-number">02</span>
            <h3>Quality First</h3>
            <p>
              We value pieces that look good, feel comfortable,
              and fit into your everyday life.
            </p>
          </article>

          <article className="value-card">
            <span className="value-number">03</span>
            <h3>Affordable Fashion</h3>
            <p>
              Our goal is to make finding your next favorite
              outfit an enjoyable experience.
            </p>
          </article>
        </div>
      </section>

      <section className="about-cta">
        <p className="about-label">YOUR NEXT LOOK STARTS HERE</p>

        <h2>Ready to find your style?</h2>

        <p>
          Explore our collection and discover something
          that feels right for you.
        </p>

        <Link href="/products" className="about-button">
          Shop Now
        </Link>
      </section>
    </main>
  );
}