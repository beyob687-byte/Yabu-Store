
import CheckoutForm from "./CheckoutForm";
import "./checkout.css";

export default function CheckoutPage() {
  return (
    <main className="checkout-page">
      <h1>Checkout</h1>
      <p>Enter your details to continue with your order.</p>

      <CheckoutForm />
    </main>
  );
}
