import type { Metadata } from "next";
import { CartItems } from "@/components/cart/cart-items";
import { CartSummary } from "@/components/cart/cart-summary";

export const metadata: Metadata = {
  title: "Shopping Cart - Bihar Crafts",
  description: "Review your selected items and proceed to checkout.",
};

export default function CartPage() {
  return (
    <div className="page-transition">
      <div className="bg-muted/30 py-12">
        <div className="container">
          <h1 className="text-3xl lg:text-4xl font-bold text-center">
            Shopping Cart
          </h1>
        </div>
      </div>

      <div className="container py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <CartItems />
          </div>
          <div className="lg:col-span-1">
            <CartSummary />
          </div>
        </div>
      </div>
    </div>
  );
}
