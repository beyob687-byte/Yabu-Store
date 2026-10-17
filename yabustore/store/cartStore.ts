
import { create } from "zustand";

type Product = {
  id: number;
  name: string;
  price: number;
  quantity: number;
};

type CartStore = {
  cart: Product[];
  cartCount: number;

  addToCart: (
    product: Omit<Product, "quantity">,
    quantity?: number
  ) => void;

  updateQuantity: (id: number, quantity: number) => void;
  removeFromCart: (id: number) => void;
  clearCart: () => void;
};

const getCartCount = (cart: Product[]) =>
  cart.reduce((total, item) => total + item.quantity, 0);

export const useCartStore = create<CartStore>((set) => ({
  cart: [],
  cartCount: 0,

  addToCart: (product, quantity = 1) => {
    const amount = Math.floor(quantity);

    if (!Number.isFinite(amount) || amount < 1) return;

    set((state) => {
      const existing = state.cart.find(
        (item) => item.id === product.id
      );

      const cart = existing
        ? state.cart.map((item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + amount }
              : item
          )
        : [...state.cart, { ...product, quantity: amount }];

      return {
        cart,
        cartCount: getCartCount(cart),
      };
    });
  },

  updateQuantity: (id, quantity) => {
    const amount = Math.floor(quantity);

    if (!Number.isFinite(amount) || amount < 1) {
      set((state) => {
        const cart = state.cart.filter((item) => item.id !== id);

        return {
          cart,
          cartCount: getCartCount(cart),
        };
      });

      return;
    }

    set((state) => {
      const cart = state.cart.map((item) =>
        item.id === id
          ? { ...item, quantity: amount }
          : item
      );

      return {
        cart,
        cartCount: getCartCount(cart),
      };
    });
  },

  removeFromCart: (id) =>
    set((state) => {
      const cart = state.cart.filter((item) => item.id !== id);

      return {
        cart,
        cartCount: getCartCount(cart),
      };
    }),

  clearCart: () =>
    set({
      cart: [],
      cartCount: 0,
    }),
}));