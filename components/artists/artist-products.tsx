import { ProductCard } from "@/components/ui/product-card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const artistProducts = [
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
];

export function ArtistProducts() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold">Products by Sita Devi</h2>
        <Button variant="outline">
          View All Products
          <ArrowRight className="h-4 w-4 ml-2" />
        </Button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {artistProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
