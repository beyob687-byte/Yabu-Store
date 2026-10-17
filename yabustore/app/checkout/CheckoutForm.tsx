
"use client";

import { useActionState, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { placeOrder, type CheckoutState } from "./actions";

const initialState: CheckoutState = {
  message: "",
};

export default function CheckoutForm() {
  const router = useRouter();
  const [selectedProductId, setSelectedProductId] = useState("");
  const [state, formAction, isPending] = useActionState(
    placeOrder,
    initialState
  );

  useEffect(() => {
    setSelectedProductId(
      window.sessionStorage.getItem("yabu-order-product-id") ?? ""
    );
  }, []);

  return (
    <form
      action={formAction}
      className="checkout-form"
      noValidate
      onSubmit={(event) => {
        const productId = window.sessionStorage.getItem("yabu-order-product-id");
        if (!productId) {
          event.preventDefault();
          router.push("/products");
          return;
        }

        const productIdInput = event.currentTarget.elements.namedItem("productId");
        if (productIdInput instanceof HTMLInputElement) {
          productIdInput.value = productId;
        }
      }}
    >
      <h2>Delivery Information</h2>
      <input
        type="hidden"
        name="productId"
        value={selectedProductId}
        readOnly
      />
      {state.errors?.product && <p role="alert">{state.errors.product}</p>}

      <label htmlFor="name">Full name</label>
      <input
        id="name"
        name="name"
        type="text"
        autoComplete="name"
        required
      />
      {state.errors?.name && <p>{state.errors.name}</p>}

      <label htmlFor="phone">Phone number</label>
      <input
        id="phone"
        name="phone"
        type="tel"
        autoComplete="tel"
        required
      />
      {state.errors?.phone && <p>{state.errors.phone}</p>}

      <label htmlFor="address">Delivery address</label>
      <textarea
        id="address"
        name="address"
        autoComplete="street-address"
        required
      />
      {state.errors?.address && <p>{state.errors.address}</p>}

      <button type="submit" disabled={isPending}>
        {isPending ? "Processing..." : "Place Order"}
      </button>

      {state.message && <p role="status">{state.message}</p>}
    </form>
  );
}
