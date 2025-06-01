"use client";

import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ShoppingCart,
  Truck,
  RotateCcw,
  CreditCard,
  User,
  Package,
  MessageCircle,
  Shield,
} from "lucide-react";
import { motion } from "framer-motion";

const categories = [
  {
    icon: ShoppingCart,
    title: "Orders & Shopping",
    description: "Help with placing orders, cart issues, and shopping",
    articles: 12,
    href: "/help/orders",
  },
  {
    icon: Truck,
    title: "Shipping & Delivery",
    description: "Tracking, delivery times, and shipping options",
    articles: 8,
    href: "/help/shipping",
  },
  {
    icon: RotateCcw,
    title: "Returns & Exchanges",
    description: "Return policy, exchange process, and refunds",
    articles: 6,
    href: "/help/returns",
  },
  {
    icon: CreditCard,
    title: "Payment & Billing",
    description: "Payment methods, billing issues, and invoices",
    articles: 7,
    href: "/help/payment",
  },
  {
    icon: User,
    title: "Account & Profile",
    description: "Account settings, profile management, and login",
    articles: 5,
    href: "/help/account",
  },
  {
    icon: Package,
    title: "Products & Quality",
    description: "Product information, quality, and authenticity",
    articles: 9,
    href: "/help/products",
  },
  {
    icon: MessageCircle,
    title: "Customer Support",
    description: "Contact options and support channels",
    articles: 4,
    href: "/help/support",
  },
  {
    icon: Shield,
    title: "Security & Privacy",
    description: "Data protection, privacy policy, and security",
    articles: 3,
    href: "/help/security",
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

export function HelpCategories() {
  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h2 className="text-2xl lg:text-3xl font-bold text-orange-900">
          Browse by Category
        </h2>
        <p className="text-orange-700">
          Choose a category to find relevant help articles
        </p>
      </div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {categories.map((category, index) => (
          <motion.div key={index} variants={item}>
            <Link href={category.href}>
              <Card className="group hover:shadow-xl transition-all duration-300 card-gradient border-orange-200 hover:glow-orange h-full">
                <CardContent className="p-6 text-center space-y-4">
                  <category.icon className="h-12 w-12 text-orange-600 mx-auto group-hover:scale-110 transition-transform" />
                  <div className="space-y-2">
                    <h3 className="font-semibold text-orange-900">
                      {category.title}
                    </h3>
                    <p className="text-sm text-orange-700">
                      {category.description}
                    </p>
                  </div>
                  <Badge
                    variant="secondary"
                    className="bg-orange-100 text-orange-800"
                  >
                    {category.articles} articles
                  </Badge>
                </CardContent>
              </Card>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
