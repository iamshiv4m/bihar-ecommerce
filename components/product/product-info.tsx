"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  Heart,
  ShoppingCart,
  Star,
  Truck,
  Shield,
  RotateCcw,
} from "lucide-react";
import { motion } from "framer-motion";

export function ProductInfo() {
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);

  return (
    <motion.div
      className="space-y-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Product Title and Price */}
      <div className="space-y-4">
        <div className="space-y-2">
          <Badge variant="secondary">Madhubani Paintings</Badge>
          <h1 className="text-3xl font-bold">Traditional Madhubani Canvas</h1>
          <p className="text-muted-foreground">
            Authentic handpainted Madhubani art on premium canvas by master
            artisan Sita Devi from Jitwarpur village.
          </p>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="text-3xl font-bold">₹2,499</span>
            <span className="text-xl text-muted-foreground line-through">
              ₹3,499
            </span>
            <Badge variant="destructive">29% OFF</Badge>
          </div>
        </div>

        {/* Rating */}
        <div className="flex items-center gap-2">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-4 w-4 ${
                  i < 4 ? "fill-primary text-primary" : "text-muted-foreground"
                }`}
              />
            ))}
          </div>
          <span className="text-sm text-muted-foreground">(24 reviews)</span>
        </div>
      </div>

      <Separator />

      {/* Product Details */}
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <span className="text-muted-foreground">Dimensions:</span>
            <span className="ml-2">16" x 12"</span>
          </div>
          <div>
            <span className="text-muted-foreground">Material:</span>
            <span className="ml-2">Canvas</span>
          </div>
          <div>
            <span className="text-muted-foreground">Origin:</span>
            <span className="ml-2">Jitwarpur, Bihar</span>
          </div>
          <div>
            <span className="text-muted-foreground">Stock:</span>
            <span className="ml-2 text-green-600">In Stock (5 left)</span>
          </div>
        </div>
      </div>

      <Separator />

      {/* Quantity and Actions */}
      <div className="space-y-4">
        <div className="flex items-center gap-4">
          <span className="font-medium">Quantity:</span>
          <div className="flex items-center gap-2">
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Button
                variant="outline"
                size="icon"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
              >
                -
              </Button>
            </motion.div>
            <span className="w-12 text-center">{quantity}</span>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Button
                variant="outline"
                size="icon"
                onClick={() => setQuantity(quantity + 1)}
              >
                +
              </Button>
            </motion.div>
          </div>
        </div>

        <div className="flex gap-3">
          <motion.div
            className="flex-1"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Button className="w-full" size="lg">
              <ShoppingCart className="h-4 w-4 mr-2" />
              Add to Cart
            </Button>
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <Button
              variant="outline"
              size="lg"
              onClick={() => setIsWishlisted(!isWishlisted)}
              className={isWishlisted ? "text-red-500 border-red-500" : ""}
            >
              <Heart
                className={`h-4 w-4 transition-colors ${
                  isWishlisted
                    ? "fill-red-500"
                    : "hover:fill-red-500 hover:text-red-500"
                }`}
              />
            </Button>
          </motion.div>
        </div>

        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
          <Button variant="secondary" className="w-full" size="lg">
            Buy Now
          </Button>
        </motion.div>
      </div>

      <Separator />

      {/* Features */}
      <Card>
        <CardContent className="p-4">
          <div className="grid grid-cols-1 gap-3">
            <div className="flex items-center gap-3">
              <Truck className="h-5 w-5 text-primary" />
              <div>
                <p className="font-medium">Free Shipping</p>
                <p className="text-sm text-muted-foreground">
                  On orders above ₹999
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Shield className="h-5 w-5 text-primary" />
              <div>
                <p className="font-medium">Authenticity Guaranteed</p>
                <p className="text-sm text-muted-foreground">
                  100% handmade by certified artisans
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <RotateCcw className="h-5 w-5 text-primary" />
              <div>
                <p className="font-medium">7-Day Returns</p>
                <p className="text-sm text-muted-foreground">
                  Easy returns and exchanges
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
