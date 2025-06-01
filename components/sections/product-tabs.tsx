"use client";

import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ProductCard } from "@/components/ui/product-card";
import { motion } from "framer-motion";

const popularProducts = [
  {
    id: 1,
    name: "Traditional Madhubani Canvas",
    price: 2499,
    originalPrice: 3499,
    image: "/placeholder.svg?height=400&width=400",
    rating: 4.8,
    reviews: 24,
    isNew: false,
    category: "Paintings",
  },
  {
    id: 2,
    name: "Silver Filigree Earrings",
    price: 1899,
    originalPrice: 2499,
    image: "/placeholder.svg?height=400&width=400",
    rating: 4.7,
    reviews: 15,
    isNew: false,
    category: "Jewelry",
  },
  {
    id: 3,
    name: "Handwoven Silk Saree",
    price: 4999,
    originalPrice: 6999,
    image: "/placeholder.svg?height=400&width=400",
    rating: 4.9,
    reviews: 18,
    isNew: false,
    category: "Textiles",
  },
];

const newArrivals = [
  {
    id: 4,
    name: "Peacock Madhubani Wall Art",
    price: 3299,
    originalPrice: 4299,
    image: "/placeholder.svg?height=400&width=400",
    rating: 4.5,
    reviews: 8,
    isNew: true,
    category: "Paintings",
  },
  {
    id: 5,
    name: "Handcrafted Terracotta Vase",
    price: 1299,
    originalPrice: 1799,
    image: "/placeholder.svg?height=400&width=400",
    rating: 4.6,
    reviews: 5,
    isNew: true,
    category: "Pottery",
  },
  {
    id: 6,
    name: "Tussar Silk Stole",
    price: 1499,
    originalPrice: 1999,
    image: "/placeholder.svg?height=400&width=400",
    rating: 4.8,
    reviews: 7,
    isNew: true,
    category: "Textiles",
  },
];

const trending = [
  {
    id: 7,
    name: "Tree of Life Madhubani Painting",
    price: 3499,
    originalPrice: 4499,
    image: "/placeholder.svg?height=400&width=400",
    rating: 4.9,
    reviews: 32,
    isNew: false,
    category: "Paintings",
  },
  {
    id: 8,
    name: "Handcrafted Wooden Elephant",
    price: 1699,
    originalPrice: 2199,
    image: "/placeholder.svg?height=400&width=400",
    rating: 4.7,
    reviews: 21,
    isNew: false,
    category: "Handicrafts",
  },
  {
    id: 9,
    name: "Silver Anklet with Bells",
    price: 2299,
    originalPrice: 2999,
    image: "/placeholder.svg?height=400&width=400",
    rating: 4.8,
    reviews: 19,
    isNew: false,
    category: "Jewelry",
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

export function ProductTabs() {
  const [activeTab, setActiveTab] = useState("popular");

  return (
    <section className="py-16 lg:py-24">
      <div className="container">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold">
            Discover Our Collection
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore our handpicked selection of authentic Bihar crafts, each
            piece telling a story of tradition and artistry.
          </p>
        </div>

        <Tabs
          defaultValue="popular"
          className="space-y-8"
          onValueChange={setActiveTab}
        >
          <div className="flex justify-center">
            <TabsList className="grid grid-cols-3 w-full max-w-md">
              <TabsTrigger value="popular">Popular</TabsTrigger>
              <TabsTrigger value="new">New Arrivals</TabsTrigger>
              <TabsTrigger value="trending">Trending</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="popular">
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
              variants={container}
              initial="hidden"
              animate={activeTab === "popular" ? "show" : "hidden"}
            >
              {popularProducts.map((product) => (
                <motion.div key={product.id} variants={item}>
                  <ProductCard product={product} />
                </motion.div>
              ))}
            </motion.div>
          </TabsContent>

          <TabsContent value="new">
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
              variants={container}
              initial="hidden"
              animate={activeTab === "new" ? "show" : "hidden"}
            >
              {newArrivals.map((product) => (
                <motion.div key={product.id} variants={item}>
                  <ProductCard product={product} />
                </motion.div>
              ))}
            </motion.div>
          </TabsContent>

          <TabsContent value="trending">
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
              variants={container}
              initial="hidden"
              animate={activeTab === "trending" ? "show" : "hidden"}
            >
              {trending.map((product) => (
                <motion.div key={product.id} variants={item}>
                  <ProductCard product={product} />
                </motion.div>
              ))}
            </motion.div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
