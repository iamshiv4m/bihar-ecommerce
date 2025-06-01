import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, ShoppingBag } from "lucide-react";

export function WishlistEmpty() {
  return (
    <Card className="max-w-md mx-auto">
      <CardContent className="p-12 text-center space-y-6">
        <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto">
          <Heart className="h-8 w-8 text-muted-foreground" />
        </div>

        <div className="space-y-2">
          <h3 className="text-xl font-semibold">Your wishlist is empty</h3>
          <p className="text-muted-foreground">
            Start adding products you love to your wishlist and they'll appear
            here.
          </p>
        </div>

        <Button asChild>
          <Link href="/categories">
            <ShoppingBag className="h-4 w-4 mr-2" />
            Start Shopping
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
}
