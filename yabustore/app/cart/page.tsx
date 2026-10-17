"use client";

import Link from "next/link";
import Image from "next/image";
import { useCartStore } from "@/store/cartStore";
import "./cart.css";

export default function CartPage() {
    const cart = useCartStore((state) => state.cart);
    const cartCount = useCartStore((state) => state.cartCount);
    const updateQuantity = useCartStore(
        (state) => state.updateQuantity
    );
    const removeFromCart = useCartStore(
        (state) => state.removeFromCart
    );
    const clearCart = useCartStore((state) => state.clearCart);

    const subtotal = cart.reduce(
        (total, item) => total + item.price * item.quantity,
        0
    );

    const formatPrice = (price: number) =>
        `${price.toLocaleString("en-US")} ETB`;

    if (cart.length === 0) {
        return (
            <main className="cart-page">
                <section className="cart-hero">
                    <p className="cart-label">YOUR SHOPPING BAG</p>
                    <h1>Your Cart</h1>
                    <p>
                        Your cart is waiting for something special.
                        Explore our collection and find something you love.
                    </p>
                </section>

                <section className="cart-empty">
                    <div className="cart-empty-icon" aria-hidden="true">
                        <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.4"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M3 3h2l2.4 12.4a2 2 0 0 0 2 1.6h7.8a2 2 0 0 0 2-1.6L21 8H6" />
                            <circle cx="10" cy="21" r="1" />
                            <circle cx="18" cy="21" r="1" />
                        </svg>
                    </div>

                    <h2>Your cart is empty</h2>
                    <p>
                        You haven't added anything to your cart yet.
                        Let&apos;s find something for you.
                    </p>

                    <Link href="/products" className="cart-primary-button">
                        Explore Products <span aria-hidden="true">→</span>
                    </Link>
                </section>
            </main>
        );
    }

    return (
        <main className="cart-page">
            <section className="cart-hero">
                <p className="cart-label">YOUR SHOPPING BAG</p>
                <h1>Your Cart</h1>
                <p>
                    Review your selection, adjust quantities, and get
                    everything ready for checkout.
                </p>
            </section>

            <section className="cart-container">
                <div className="cart-heading-row">
                    <div>
                        <h2>Shopping Cart</h2>
                        <p>
                            {cartCount} {cartCount === 1 ? "item" : "items"} in
                            your cart
                        </p>
                    </div>

                    <button
                        type="button"
                        className="cart-clear-button"
                        onClick={clearCart}
                    >
                        Clear Cart
                    </button>
                </div>

                <div className="cart-layout">
                    <div className="cart-items">
                        {cart.map((item) => (
                            <article className="cart-item" key={item.id}>
                                <Link
                                    href={`/products/${item.id}`}
                                    className="cart-item-image"
                                    aria-label={`View ${item.name}`}
                                >
                                    <div className="cart-item-image-inner">
                                        <Image
                                            src={item.image}
                                            alt={item.name}
                                            fill
                                            sizes="(max-width: 680px) 95px, 130px"
                                            className="cart-item-image-photo"
                                        />
                                    </div>
                                </Link>

                                <div className="cart-item-info">
                                    <Link
                                        href={`/products/${item.id}`}
                                        className="cart-item-name"
                                    >
                                        {item.name}
                                    </Link>

                                    <p className="cart-item-unit-price">
                                        {formatPrice(item.price)} each
                                    </p>

                                    <div className="cart-item-actions">
                                        <div
                                            className="cart-quantity"
                                            aria-label={`Quantity for ${item.name}`}
                                        >
                                            <button
                                                type="button"
                                                aria-label={`Decrease ${item.name} quantity`}
                                                disabled={item.quantity <= 1}
                                                onClick={() =>
                                                    updateQuantity(item.id, item.quantity - 1)
                                                }
                                            >
                                                −
                                            </button>

                                            <span aria-live="polite">
                                                {item.quantity}
                                            </span>

                                            <button
                                                type="button"
                                                aria-label={`Increase ${item.name} quantity`}
                                                onClick={() =>
                                                    updateQuantity(item.id, item.quantity + 1)
                                                }
                                            >
                                                +
                                            </button>
                                        </div>

                                        <button
                                            type="button"
                                            className="cart-remove-button"
                                            onClick={() => removeFromCart(item.id)}
                                        >
                                            Remove
                                        </button>
                                    </div>
                                </div>

                                <p className="cart-item-total">
                                    {formatPrice(item.price * item.quantity)}
                                </p>
                            </article>
                        ))}
                    </div>

                    <aside className="cart-summary">
                        <p className="cart-summary-label">ORDER SUMMARY</p>
                        <h2>Order Summary</h2>

                        <div className="cart-summary-row">
                            <span>Items ({cartCount})</span>
                            <span>{formatPrice(subtotal)}</span>
                        </div>

                        <div className="cart-summary-row">
                            <span>Shipping</span>
                            <span className="cart-shipping-note">
                                Calculated at checkout
                            </span>
                        </div>

                        <div className="cart-summary-divider" />

                        <div className="cart-summary-total">
                            <span>Subtotal</span>
                            <strong>{formatPrice(subtotal)}</strong>
                        </div>

                        <p className="cart-summary-note">
                            Shipping and any applicable fees will be confirmed
                            before you complete your order.
                        </p>

                        <Link
                            href="/checkout"
                            className="cart-primary-button cart-checkout-button"
                        >
                            Proceed to Checkout <span aria-hidden="true">→</span>
                        </Link>

                        <Link
                            href="/products"
                            className="cart-continue-link"
                        >
                            ← Continue Shopping
                        </Link>
                    </aside>
                </div>
            </section>
        </main>
    );
}