"use client";

import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Eye } from "lucide-react";
import { motion } from "framer-motion";

const articles = [
  {
    title: "How to track my order?",
    excerpt:
      "Learn how to track your order status and delivery updates using your order number.",
    category: "Shipping",
    views: 1250,
    href: "/help/track-order",
  },
  {
    title: "What is your return policy?",
    excerpt:
      "Understand our 7-day return policy and how to initiate a return or exchange.",
    category: "Returns",
    views: 980,
    href: "/help/return-policy",
  },
  {
    title: "How to verify product authenticity?",
    excerpt:
      "Every Bihar Crafts product comes with authenticity certificates and verification methods.",
    category: "Products",
    views: 756,
    href: "/help/authenticity",
  },
  {
    title: "Payment methods accepted",
    excerpt:
      "We accept various payment methods including cards, UPI, net banking, and wallets.",
    category: "Payment",
    views: 642,
    href: "/help/payment-methods",
  },
  {
    title: "How to care for handmade products?",
    excerpt:
      "Proper care instructions to maintain the quality and longevity of your crafts.",
    category: "Products",
    views: 534,
    href: "/help/product-care",
  },
  {
    title: "Shipping charges and delivery time",
    excerpt:
      "Information about shipping costs, delivery timeframes, and express options.",
    category: "Shipping",
    views: 423,
    href: "/help/shipping-info",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function PopularArticles() {
  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h2 className="text-2xl lg:text-3xl font-bold text-orange-900">
          Popular Articles
        </h2>
        <p className="text-orange-700">
          Most viewed help articles by our customers
        </p>
      </div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {articles.map((article, index) => (
          <motion.div key={index} variants={item}>
            <Link href={article.href}>
              <Card className="group hover:shadow-xl transition-all duration-300 card-gradient border-orange-200 hover:glow-orange h-full">
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <Badge
                      variant="secondary"
                      className="bg-orange-100 text-orange-800"
                    >
                      {article.category}
                    </Badge>
                    <div className="flex items-center gap-1 text-xs text-orange-600">
                      <Eye className="h-3 w-3" />
                      {article.views}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-semibold text-orange-900 group-hover:text-primary transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-sm text-orange-700 line-clamp-2">
                      {article.excerpt}
                    </p>
                  </div>

                  <div className="flex items-center text-primary text-sm font-medium group-hover:gap-2 transition-all">
                    Read more
                    <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
