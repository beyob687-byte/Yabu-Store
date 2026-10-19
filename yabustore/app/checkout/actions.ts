
"use server";

import { productid } from "@/data/products";

export type CheckoutState = {
  message: string;
  order?: {
    name: string;
    phone: string;
    address: string;
    items: {
      id: number;
      name: string;
      quantity: number;
      lineTotal: number;
    }[];
    total: number;
  };
  errors?: {
    product?: string;
    name?: string;
    phone?: string;
    address?: string;
  };
};

export async function placeOrder(
  _previousState: CheckoutState,
  formData: FormData
): Promise<CheckoutState> {
  const name = String(formData.get("name") ?? "").trim();
  const phone = String(formData.get("phone") ?? "").trim();
  const address = String(formData.get("address") ?? "").trim();
  const rawItems = formData.get("items");
  let items: unknown;

  try {
    items = JSON.parse(typeof rawItems === "string" ? rawItems : "");
  } catch {
    items = null;
  }

  const errors: CheckoutState["errors"] = {};
  let orderItems: NonNullable<CheckoutState["order"]>["items"] = [];

  if (!Array.isArray(items) || items.length === 0) {
    errors.product = "Your cart is empty or invalid.";
  } else {
    const resolvedItems = await Promise.all(
      items.map(async (item: unknown) => {
        if (typeof item !== "object" || item === null) return null;

        const candidate = item as { id?: unknown; quantity?: unknown };
        if (
          typeof candidate.id !== "number" ||
          !Number.isInteger(candidate.id) ||
          typeof candidate.quantity !== "number" ||
          !Number.isInteger(candidate.quantity) ||
          candidate.quantity < 1
        ) {
          return null;
        }

        const selectedProduct = await productid(candidate.id);
        if (!selectedProduct?.available) return null;

        return {
          id: selectedProduct.id,
          name: selectedProduct.name,
          quantity: candidate.quantity,
          lineTotal: selectedProduct.price * candidate.quantity,
        };
      })
    );

    if (resolvedItems.some((item) => item === null)) {
      errors.product = "Your cart contains an unavailable or invalid product.";
    } else {
      orderItems = resolvedItems.filter(
        (item): item is NonNullable<typeof item> => item !== null
      );
    }
  }

  if (name.length < 2) {
    errors.name = "Please enter your full name.";
  }

  if (!/^(09\d{8}|\+2519\d{8})$/.test(phone)) {
    errors.phone = "Enter a valid Ethiopian phone number.";
  }

  if (address.length < 3) {
    errors.address = "Please enter your delivery address.";
  }

  if (Object.keys(errors).length > 0) {
    return { message: "", errors };
  }

  return {
    message: "Your order details have been confirmed.",
  };
}
