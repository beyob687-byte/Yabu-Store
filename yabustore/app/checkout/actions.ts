
"use server";

import { productid } from "@/data/products";

export type CheckoutState = {
  message: string;
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
  const productId = Number(formData.get("productId"));
  const selectedProduct = Number.isInteger(productId)
    ? await productid(productId)
    : undefined;

  const name = String(formData.get("name") ?? "").trim();
  const phone = String(formData.get("phone") ?? "").trim();
  const address = String(formData.get("address") ?? "").trim();

  const errors: CheckoutState["errors"] = {};

  if (!selectedProduct || !selectedProduct.available) {
    errors.product = "Choose an available product before placing your order.";
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
  return {
    message:
      "Order details validated successfully.",
  };
}
