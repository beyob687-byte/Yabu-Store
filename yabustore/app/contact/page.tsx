
import Link from "next/link";
import "./contact.css";

export default function ContactPage() {
  return (
    <main className="contact-page">
      <section className="contact-hero">
        <p className="contact-label">GET IN TOUCH</p>
        <h1>We'd love to hear <span>from you.</span></h1>
        <p>
          Have a question about an order, our products, or anything
          else? Send us a message and we'll be happy to help.
        </p>
      </section>

      <section className="contact-content">
        <div className="contact-info">
          <p className="contact-label">CONTACT US</p>
          <h2>How can we help?</h2>
          <p className="contact-description">
            We're here to make your shopping experience simple
            and enjoyable. Reach out using the form or our contact
            details below.
          </p>

          <div className="contact-detail">
            <div className="contact-detail-icon">@</div>
            <div>
              <h3>Email</h3>
              <p>support@yabu-store.com</p>
            </div>
          </div>

          <div className="contact-detail">
            <div className="contact-detail-icon">+</div>
            <div>
              <h3>Phone</h3>
              <p>+251 9XX XXX XXX</p>
            </div>
          </div>

          <div className="contact-detail">
            <div className="contact-detail-icon">◷</div>
            <div>
              <h3>Business Hours</h3>
              <p>Monday – Saturday</p>
              <p>9:00 AM – 6:00 PM</p>
            </div>
          </div>

          <div className="contact-note">
            <p>Need something else?</p>
            <Link href="/product">Explore our products →</Link>
          </div>
        </div>

        <div className="contact-form-wrapper">
          <h2>Send us a message</h2>
          <p className="contact-form-subtitle">
            Fill out the form below and tell us how we can help.
          </p>

          <form
            className="contact-form"
            action="mailto:support@yabu-store.com"
            method="post"
            encType="text/plain"
          >
            <div className="contact-form-row">
              <div className="contact-field">
                <label htmlFor="contact-name">Full Name</label>
                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  placeholder="Your full name"
                  required
                />
              </div>

              <div className="contact-field">
                <label htmlFor="contact-email">Email Address</label>
                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  required
                />
              </div>
            </div>

            <div className="contact-field">
              <label htmlFor="contact-subject">Subject</label>
              <select
                id="contact-subject"
                name="subject"
                defaultValue=""
                required
              >
                <option value="" disabled>
                  Select a subject
                </option>
                <option value="Order Inquiry">Order Inquiry</option>
                <option value="Product Question">Product Question</option>
                <option value="Shipping and Delivery">
                  Shipping and Delivery
                </option>
                <option value="Returns and Exchanges">
                  Returns and Exchanges
                </option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div className="contact-field">
              <label htmlFor="contact-message">Message</label>
              <textarea
                id="contact-message"
                name="message"
                rows={6}
                placeholder="Write your message here..."
                required
              />
            </div>

            <button type="submit" className="contact-submit">
              Send Message <span>→</span>
            </button>

            <p className="contact-form-note">
              Please provide your correct email so we can get back
              to you.
            </p>
          </form>
        </div>
      </section>
    </main>
  );
}
