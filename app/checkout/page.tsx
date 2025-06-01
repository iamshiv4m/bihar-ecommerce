import type { Metadata } from "next";
import { CheckoutForm } from "@/components/checkout/checkout-form";
import { CheckoutSummary } from "@/components/checkout/checkout-summary";

export const metadata: Metadata = {
  title: "Checkout - Bihar Crafts",
  description: "Complete your order with secure checkout.",
};

export default function CheckoutPage() {
  return (
    <div className="page-transition">
      <div className="bg-muted/30 py-12">
        <div className="container">
          <h1 className="text-3xl lg:text-4xl font-bold text-center">
            Checkout
          </h1>
        </div>
      </div>

      <div className="container py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <CheckoutForm />
          </div>
          <div>
            <CheckoutSummary />
          </div>
        </div>
      </div>
    </div>
  );
}
