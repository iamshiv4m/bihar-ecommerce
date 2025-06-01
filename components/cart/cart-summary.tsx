import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export function CartSummary() {
  const subtotal = 9397;
  const shipping = 99;
  const discount = 500;
  const total = subtotal + shipping - discount;

  return (
    <Card>
      <CardHeader>
        <CardTitle>Order Summary</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <div className="flex justify-between">
            <span>Subtotal</span>
            <span>₹{subtotal.toLocaleString()}</span>
          </div>
          <div className="flex justify-between">
            <span>Shipping</span>
            <span>₹{shipping}</span>
          </div>
          <div className="flex justify-between text-green-600">
            <span>Discount</span>
            <span>-₹{discount}</span>
          </div>
        </div>

        <Separator />

        <div className="flex justify-between font-semibold text-lg">
          <span>Total</span>
          <span>₹{total.toLocaleString()}</span>
        </div>

        <div className="space-y-3 pt-4">
          <Button className="w-full" size="lg" asChild>
            <Link href="/checkout">Proceed to Checkout</Link>
          </Button>
          <Button variant="outline" className="w-full" asChild>
            <Link href="/categories">Continue Shopping</Link>
          </Button>
        </div>

        <div className="text-xs text-muted-foreground text-center pt-2">
          Free shipping on orders above ₹999
        </div>
      </CardContent>
    </Card>
  );
}
