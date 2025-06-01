import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const orderItems = [
  {
    id: 1,
    name: "Traditional Madhubani Canvas",
    price: 2499,
    quantity: 1,
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 2,
    name: "Handwoven Silk Saree",
    price: 4999,
    quantity: 1,
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 3,
    name: "Silver Filigree Earrings",
    price: 1899,
    quantity: 2,
    image: "/placeholder.svg?height=80&width=80",
  },
];

export function CheckoutSummary() {
  const subtotal = 9397;
  const shipping = 99;
  const discount = 500;
  const tax = 470;
  const total = subtotal + shipping + tax - discount;

  return (
    <Card className="sticky top-4">
      <CardHeader>
        <CardTitle>Order Summary</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Order Items */}
        <div className="space-y-3">
          {orderItems.map((item) => (
            <div key={item.id} className="flex gap-3">
              <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1">
                <h4 className="font-medium text-sm">{item.name}</h4>
                <p className="text-sm text-muted-foreground">
                  Qty: {item.quantity}
                </p>
                <p className="font-semibold">₹{item.price.toLocaleString()}</p>
              </div>
            </div>
          ))}
        </div>

        <Separator />

        {/* Price Breakdown */}
        <div className="space-y-2">
          <div className="flex justify-between">
            <span>Subtotal</span>
            <span>₹{subtotal.toLocaleString()}</span>
          </div>
          <div className="flex justify-between">
            <span>Shipping</span>
            <span>₹{shipping}</span>
          </div>
          <div className="flex justify-between">
            <span>Tax</span>
            <span>₹{tax}</span>
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

        <div className="text-xs text-muted-foreground">
          <p>• Secure payment processing</p>
          <p>• 7-day return policy</p>
          <p>• Free shipping on orders above ₹999</p>
        </div>
      </CardContent>
    </Card>
  );
}
