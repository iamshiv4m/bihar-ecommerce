import type { Metadata } from "next";
import { WishlistItems } from "@/components/wishlist/wishlist-items";

export const metadata: Metadata = {
  title: "Wishlist - Bihar Crafts",
  description: "Your saved products and favorite items from Bihar Crafts.",
};

export default function WishlistPage() {
  return (
    <div className="page-transition min-h-screen bg-background">
      <div className="bg-muted/30 py-12">
        <div className="container">
          <div className="text-center space-y-4">
            <h1 className="text-3xl lg:text-4xl font-bold">My Wishlist</h1>
            <p className="text-muted-foreground">
              Your saved products and favorite items
            </p>
          </div>
        </div>
      </div>

      <div className="container py-8">
        <WishlistItems />
      </div>
    </div>
  );
}
