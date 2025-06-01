"use client";

import { useState } from "react";
import { ProductCard } from "@/components/ui/product-card";
import { SkeletonCard } from "@/components/ui/skeleton-card";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Grid, List } from "lucide-react";

const products = [
  {
    id: 1,
    name: "Traditional Madhubani Canvas - Peacock Design",
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
    name: "Madhubani Fish Motif Painting",
    price: 1899,
    originalPrice: 2499,
    image: "/placeholder.svg?height=400&width=400",
    rating: 4.7,
    reviews: 18,
    isNew: false,
    category: "Paintings",
  },
  {
    id: 3,
    name: "Lotus Madhubani Art on Canvas",
    price: 2999,
    originalPrice: 3999,
    image: "/placeholder.svg?height=400&width=400",
    rating: 4.9,
    reviews: 32,
    isNew: true,
    category: "Paintings",
  },
  {
    id: 4,
    name: "Tree of Life Madhubani Painting",
    price: 3499,
    originalPrice: 4499,
    image: "/placeholder.svg?height=400&width=400",
    rating: 4.6,
    reviews: 15,
    isNew: false,
    category: "Paintings",
  },
  {
    id: 5,
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
    id: 6,
    name: "Radha Krishna Madhubani Painting",
    price: 4999,
    originalPrice: 6499,
    image: "/placeholder.svg?height=400&width=400",
    rating: 4.9,
    reviews: 28,
    isNew: true,
    category: "Paintings",
  },
];

export function ProductGrid() {
  const [loading, setLoading] = useState(false);
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [sortBy, setSortBy] = useState("featured");

  if (loading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(6)].map((_, i) => (
          <SkeletonCard key={i} />
        ))}
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Toolbar */}
      <div className="flex items-center justify-between">
        <p className="text-sm text-muted-foreground">
          {products.length} products found
        </p>

        <div className="flex items-center gap-4">
          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger className="w-48">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="featured">Featured</SelectItem>
              <SelectItem value="price-low">Price: Low to High</SelectItem>
              <SelectItem value="price-high">Price: High to Low</SelectItem>
              <SelectItem value="rating">Customer Rating</SelectItem>
              <SelectItem value="newest">Newest First</SelectItem>
            </SelectContent>
          </Select>

          <div className="flex items-center border rounded-lg">
            <Button
              variant={viewMode === "grid" ? "default" : "ghost"}
              size="sm"
              onClick={() => setViewMode("grid")}
              className="rounded-r-none"
            >
              <Grid className="h-4 w-4" />
            </Button>
            <Button
              variant={viewMode === "list" ? "default" : "ghost"}
              size="sm"
              onClick={() => setViewMode("list")}
              className="rounded-l-none"
            >
              <List className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div
        className={
          viewMode === "grid"
            ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            : "space-y-4"
        }
      >
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center pt-8">
        <div className="flex items-center gap-2">
          <Button variant="outline" disabled>
            Previous
          </Button>
          <Button variant="default">1</Button>
          <Button variant="outline">2</Button>
          <Button variant="outline">3</Button>
          <Button variant="outline">Next</Button>
        </div>
      </div>
    </div>
  );
}
