"use client";

import type React from "react";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { RotateCcw } from "lucide-react";
import { motion } from "framer-motion";

export function ReturnForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsSubmitting(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
    >
      <Card className="card-gradient border-orange-200 glow-orange">
        <CardHeader>
          <CardTitle className="text-2xl text-orange-900 flex items-center gap-2">
            <RotateCcw className="h-6 w-6 text-orange-600" />
            Initiate Return
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="orderNumber" className="text-orange-800">
                Order Number
              </Label>
              <Input
                id="orderNumber"
                placeholder="Enter your order number"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="text-orange-800">
                Email Address
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="reason" className="text-orange-800">
                Reason for Return
              </Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select a reason" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="defective">
                    Product is defective
                  </SelectItem>
                  <SelectItem value="wrong-item">
                    Wrong item received
                  </SelectItem>
                  <SelectItem value="damaged">Item arrived damaged</SelectItem>
                  <SelectItem value="not-as-described">
                    Not as described
                  </SelectItem>
                  <SelectItem value="changed-mind">Changed my mind</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="description" className="text-orange-800">
                Description
              </Label>
              <Textarea
                id="description"
                placeholder="Please provide more details about the issue..."
                rows={4}
                required
              />
            </div>

            <div className="space-y-2">
              <Label className="text-orange-800">Items to Return</Label>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Checkbox id="item1" />
                  <Label htmlFor="item1" className="text-sm text-orange-700">
                    Traditional Madhubani Canvas - ₹2,499
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="item2" />
                  <Label htmlFor="item2" className="text-sm text-orange-700">
                    Silver Filigree Earrings - ₹1,899
                  </Label>
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox id="terms" required />
              <Label htmlFor="terms" className="text-sm text-orange-700">
                I agree to the return policy terms and conditions
              </Label>
            </div>

            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button
                type="submit"
                className="w-full glow-orange"
                size="lg"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Processing..." : "Submit Return Request"}
              </Button>
            </motion.div>
          </form>
        </CardContent>
      </Card>
    </motion.div>
  );
}
