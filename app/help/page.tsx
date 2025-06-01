import { ContactSupport } from "@/components/help/contact-support";
import { HelpCategories } from "@/components/help/help-categories";
import { HelpSearch } from "@/components/help/help-search";
import { PopularArticles } from "@/components/help/popular-articles";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Help Center - Bihar Crafts",
  description:
    "Find answers to your questions about Bihar Crafts products, orders, shipping, and more.",
};

export default function HelpPage() {
  return (
    <div className="page-transition min-h-screen">
      {/* Hero Section */}
      <section className="hero-gradient py-16 lg:py-24">
        <div className="container">
          <div className="text-center space-y-6">
            <h1 className="text-3xl lg:text-4xl font-bold text-orange-900">
              Help Center
            </h1>
            <p className="text-orange-700 max-w-2xl mx-auto">
              Find answers to your questions about our products, orders,
              shipping, and more.
            </p>
            <HelpSearch />
          </div>
        </div>
      </section>

      {/* Help Categories */}
      <section className="py-16 section-gradient">
        <div className="container">
          <HelpCategories />
        </div>
      </section>

      {/* Popular Articles */}
      <section className="py-16 bg-gradient-to-br from-orange-50 to-orange-100">
        <div className="container">
          <PopularArticles />
        </div>
      </section>

      {/* Contact Support */}
      <section className="py-16 section-gradient">
        <div className="container">
          <ContactSupport />
        </div>
      </section>
    </div>
  );
}
