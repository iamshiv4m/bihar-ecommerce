"use client";

import { ProductCard } from "@/components/ui/product-card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const relatedProducts = [
  {
    id: 10,
    name: "Fish Motif Madhubani Painting",
    price: 1899,
    originalPrice: 2499,
    image: "/placeholder.svg?height=400&width=400",
    rating: 4.7,
    reviews: 18,
    isNew: false,
    category: "Paintings",
  },
  {
    id: 11,
    name: "Lotus Design Canvas Art",
    price: 2999,
    originalPrice: 3999,
    image: "/placeholder.svg?height=400&width=400",
    rating: 4.9,
    reviews: 32,
    isNew: true,
    category: "Paintings",
  },
  {
    id: 12,
    name: "Elephant Madhubani Wall Art",
    price: 2799,
    originalPrice: 3599,
    image: "/placeholder.svg?height=400&width=400",
    rating: 4.8,
    reviews: 21,
    isNew: false,
    category: "Paintings",
  },
  {
    id: 13,
    name: "Radha Krishna Painting",
    price: 4999,
    originalPrice: 6499,
    image: "/placeholder.svg?height=400&width=400",
    rating: 4.9,
    reviews: 28,
    isNew: true,
    category: "Paintings",
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

export function RelatedProducts() {
  return (
    <section className="py-12">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold">Related Products</h2>
          <Button variant="outline">
            View All
            <ArrowRight className="h-4 w-4 ml-2" />
          </Button>
        </div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {relatedProducts.map((product) => (
            <motion.div key={product.id} variants={item}>
              <ProductCard product={product} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
