"use client";

import { useState } from "react";
import { WishlistEmpty } from "./wishlist-empty";
import { ProductCard } from "@/components/ui/product-card";
import { Button } from "@/components/ui/button";
import { SkeletonCard } from "@/components/ui/skeleton-card";
import { Trash2 } from "lucide-react";

const wishlistItems = [
  {
    id: 1,
    name: "Traditional Madhubani Canvas",
    price: 2499,
    originalPrice: 3499,
    image: "/placeholder.svg?height=400&width=400",
    rating: 4.8,
    reviews: 24,
    isNew: true,
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

export function WishlistItems() {
  const [items, setItems] = useState(wishlistItems);
  const [loading, setLoading] = useState(false);

  const removeItem = (id: number) => {
    setItems(items.filter((item) => item.id !== id));
  };

  if (loading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[...Array(4)].map((_, i) => (
          <SkeletonCard key={i} />
        ))}
      </div>
    );
  }

  if (items.length === 0) {
    return <WishlistEmpty />;
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">Saved Items ({items.length})</h2>
        <Button variant="outline" size="sm">
          <Trash2 className="h-4 w-4 mr-2" />
          Clear All
        </Button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {items.map((product) => (
          <div key={product.id} className="relative group">
            <ProductCard product={product} />
            <Button
              variant="destructive"
              size="icon"
              className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity"
              onClick={() => removeItem(product.id)}
            >
              <Trash2 className="h-4 w-4" />
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}
