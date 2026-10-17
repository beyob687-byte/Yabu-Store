import { create } from "zustand";

type Product = {
  id: number;
  name: string;
  price: number;
  quantity: number;
};

type CartStore = {
  cart: Product[];
  addToCart: (product: Omit<Product, "quantity">) => void;
  removeFromCart: (id: number) => void;
  clearCart: () => void;
  cartCount: number;
};

export const useCartStore = create<CartStore>((set) => ({
  cart: [],
  cartCount: 0,

  addToCart: (product) =>
    set((state) => {
      const existing = state.cart.find(
        (item) => item.id === product.id
      );

      if (existing) {
        return {
          cart: state.cart.map((item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
          cartCount: state.cartCount + 1,
        };
      }

      return {
        cart: [...state.cart, { ...product, quantity: 1 }],
        cartCount: state.cartCount + 1,
      };
    }),

  removeFromCart: (id) =>
    set((state) => {
      const existing = state.cart.find((item) => item.id === id);

      if (!existing) return state;

      return {
        cart: state.cart.filter((item) => item.id !== id),
        cartCount: state.cartCount - existing.quantity,
      };
    }),

  clearCart: () => ({
    cart: [],
    cartCount: 0,
  }),
}));