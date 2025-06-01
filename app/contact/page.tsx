import { ContactForm } from "@/components/contact/contact-form";
import { ContactInfo } from "@/components/contact/contact-info";
import { ContactMap } from "@/components/contact/contact-map";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us - Bihar Crafts",
  description:
    "Get in touch with Bihar Crafts. We're here to help with your questions about our products and services.",
};

export default function ContactPage() {
  return (
    <div className="page-transition min-h-screen">
      {/* Hero Section */}
      <section className="hero-gradient py-16 lg:py-24">
        <div className="container">
          <div className="text-center space-y-4">
            <h1 className="text-3xl lg:text-4xl font-bold text-orange-900">
              Contact Us
            </h1>
            <p className="text-orange-700 max-w-2xl mx-auto">
              We'd love to hear from you. Send us a message and we'll respond as
              soon as possible.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 lg:py-24 section-gradient">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <ContactForm />
            <ContactInfo />
          </div>
        </div>
      </section>

      {/* Map Section */}
      <ContactMap />
    </div>
  );
}
