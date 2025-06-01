"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Trash2, Plus, Minus } from "lucide-react";

const cartItems = [
  {
    id: 1,
    name: "Traditional Madhubani Canvas",
    price: 2499,
    originalPrice: 3499,
    image: "/placeholder.svg?height=150&width=150",
    quantity: 1,
    inStock: true,
  },
  {
    id: 2,
    name: "Handwoven Silk Saree",
    price: 4999,
    originalPrice: 6999,
    image: "/placeholder.svg?height=150&width=150",
    quantity: 1,
    inStock: true,
  },
  {
    id: 3,
    name: "Silver Filigree Earrings",
    price: 1899,
    originalPrice: 2499,
    image: "/placeholder.svg?height=150&width=150",
    quantity: 2,
    inStock: false,
  },
];

export function CartItems() {
  const [items, setItems] = useState(cartItems);

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity < 1) return;
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeItem = (id: number) => {
    setItems(items.filter((item) => item.id !== id));
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Cart Items ({items.length})</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {items.map((item) => (
          <div key={item.id} className="flex gap-4 p-4 border rounded-lg">
            <div className="w-24 h-24 rounded-lg overflow-hidden flex-shrink-0">
              <img
                src={item.image || "/placeholder.svg"}
                alt={item.name}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex-1 space-y-2">
              <h3 className="font-semibold">{item.name}</h3>
              <div className="flex items-center gap-2">
                <span className="font-bold">
                  ₹{item.price.toLocaleString()}
                </span>
                {item.originalPrice && (
                  <span className="text-sm text-muted-foreground line-through">
                    ₹{item.originalPrice.toLocaleString()}
                  </span>
                )}
              </div>
              {!item.inStock && (
                <p className="text-sm text-destructive">Out of stock</p>
              )}
            </div>

            <div className="flex flex-col items-end gap-2">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => removeItem(item.id)}
                className="text-destructive hover:text-destructive"
              >
                <Trash2 className="h-4 w-4" />
              </Button>

              <div className="flex items-center gap-1">
                <Button
                  variant="outline"
                  size="icon"
                  className="h-8 w-8"
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  disabled={!item.inStock}
                >
                  <Minus className="h-3 w-3" />
                </Button>
                <Input
                  type="number"
                  value={item.quantity}
                  onChange={(e) =>
                    updateQuantity(
                      item.id,
                      Number.parseInt(e.target.value) || 1
                    )
                  }
                  className="w-16 h-8 text-center"
                  disabled={!item.inStock}
                />
                <Button
                  variant="outline"
                  size="icon"
                  className="h-8 w-8"
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  disabled={!item.inStock}
                >
                  <Plus className="h-3 w-3" />
                </Button>
              </div>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
