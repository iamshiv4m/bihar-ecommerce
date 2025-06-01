import { ReturnFAQ } from "@/components/returns/return-faq";
import { ReturnForm } from "@/components/returns/return-form";
import { ReturnPolicy } from "@/components/returns/return-policy";
import { ReturnProcess } from "@/components/returns/return-process";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Returns & Exchanges - Bihar Crafts",
  description:
    "Learn about our return policy, exchange process, and how to initiate returns for Bihar Crafts products.",
};

export default function ReturnsPage() {
  return (
    <div className="page-transition min-h-screen">
      {/* Hero Section */}
      <section className="hero-gradient py-16 lg:py-24">
        <div className="container">
          <div className="text-center space-y-4">
            <h1 className="text-3xl lg:text-4xl font-bold text-orange-900">
              Returns & Exchanges
            </h1>
            <p className="text-orange-700 max-w-2xl mx-auto">
              We want you to be completely satisfied with your purchase. Learn
              about our hassle-free return and exchange policy.
            </p>
          </div>
        </div>
      </section>

      {/* Return Policy */}
      <section className="py-16 section-gradient">
        <div className="container">
          <ReturnPolicy />
        </div>
      </section>

      {/* Return Process */}
      <section className="py-16 bg-gradient-to-br from-orange-50 to-orange-100">
        <div className="container">
          <ReturnProcess />
        </div>
      </section>

      {/* Return Form */}
      <section className="py-16 section-gradient">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <ReturnForm />
            <ReturnFAQ />
          </div>
        </div>
      </section>
    </div>
  );
}
