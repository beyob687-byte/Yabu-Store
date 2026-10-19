
"use client";

import { useActionState, useEffect, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { placeOrder, type CheckoutState } from "./actions";
import { useCartStore } from "@/store/cartStore";

const initialState: CheckoutState = {
  message: "",
};

export default function CheckoutForm() {
  const router = useRouter();
  const cart = useCartStore((store) => store.cart);
  const clearCart = useCartStore((store) => store.clearCart);
  const shownMessage = useRef("");
  const [state, formAction, isPending] = useActionState(
    placeOrder,
    initialState
  );

  useEffect(() => {
    if (cart.length === 0 && !state.message) {
      router.replace("/products");
    }
  }, [cart.length, router, state.message]);

  useEffect(() => {
    if (!state.message || shownMessage.current === state.message) return;

    shownMessage.current = state.message;
    window.alert(state.message);
    clearCart();
  }, [clearCart, state.message]);

  if (state.message) {
    return (
      <section className="checkout-complete" role="status">
        <h2>Order </h2>
        <p>{state.message}</p>
      </section>
    );
  }

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <form
      action={formAction}
      className="checkout-layout"
      noValidate
      onSubmit={(event) => {
        if (cart.length === 0) {
          event.preventDefault();
          router.replace("/products");
        }
      }}
    >
      <input
        type="hidden"
        name="items"
        value={JSON.stringify(cart.map(({ id, quantity }) => ({ id, quantity })))}
        readOnly
      />

      <section className="checkout-form" aria-labelledby="checkout-customer-heading">
        <h2 id="checkout-customer-heading">Your Information</h2>
        {state.errors?.product && <p role="alert">{state.errors.product}</p>}

        <label htmlFor="name">Full name</label>
        <input
          id="name"
          name="name"
          type="text"
          autoComplete="name"
          required
        />
        {state.errors?.name && <p role="alert">{state.errors.name}</p>}

        <label htmlFor="phone">Phone number</label>
        <input
          id="phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          required
        />
        {state.errors?.phone && <p role="alert">{state.errors.phone}</p>}

        <label htmlFor="address">Delivery address</label>
        <textarea
          id="address"
          name="address"
          autoComplete="street-address"
          required
        />
        {state.errors?.address && <p role="alert">{state.errors.address}</p>}
      </section>

      <aside className="checkout-summary" aria-labelledby="checkout-summary-heading">
        <p className="checkout-summary-label">ORDER SUMMARY</p>
        <h2 id="checkout-summary-heading">Selected Products</h2>
        <ul className="checkout-items" aria-label="Items in your order">
          {cart.map((item) => (
            <li key={item.id}>
              <span>{item.name} × {item.quantity}</span>
              <span>{(item.price * item.quantity).toLocaleString("en-US")} ETB</span>
            </li>
          ))}
        </ul>
        <p className="checkout-summary-total">
          <span>Total</span>
          <strong>{total.toLocaleString("en-US")} ETB</strong>
        </p>
        <Link href="/products" className="checkout-add-products">
          Add more products
        </Link>
        <button type="submit" disabled={isPending}>
          {isPending ? "Processing..." : " Order"}
          <span aria-hidden="true">→</span>
        </button>
      </aside>
    </form>
  );
}
