"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const steps = [
  {
    step: 1,
    title: "Initiate Return",
    description:
      "Fill out the return form with your order details and reason for return",
    timeframe: "Within 7 days",
  },
  {
    step: 2,
    title: "Get Approval",
    description:
      "Our team will review your request and send you a return authorization",
    timeframe: "1-2 business days",
  },
  {
    step: 3,
    title: "Package Items",
    description:
      "Pack the items securely in original packaging with all accessories",
    timeframe: "Same day",
  },
  {
    step: 4,
    title: "Schedule Pickup",
    description: "We'll arrange a pickup from your address at no extra cost",
    timeframe: "2-3 business days",
  },
  {
    step: 5,
    title: "Quality Check",
    description:
      "Items are inspected for condition and eligibility upon receipt",
    timeframe: "1-2 business days",
  },
  {
    step: 6,
    title: "Refund Processed",
    description: "Refund is processed to your original payment method",
    timeframe: "3-5 business days",
  },
];

export function ReturnProcess() {
  return (
    <div className="space-y-8">
      <motion.div
        className="text-center space-y-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-2xl lg:text-3xl font-bold text-orange-900">
          Return Process
        </h2>
        <p className="text-orange-700 max-w-2xl mx-auto">
          Follow these simple steps to return your items hassle-free
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="relative"
          >
            <Card className="card-gradient border-orange-200 hover:glow-orange transition-all duration-300 h-full">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <Badge className="bg-primary text-white text-lg px-3 py-1">
                    {step.step}
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="bg-orange-100 text-orange-800 text-xs"
                  >
                    {step.timeframe}
                  </Badge>
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold text-orange-900">
                    {step.title}
                  </h3>
                  <p className="text-sm text-orange-700">{step.description}</p>
                </div>
              </CardContent>
            </Card>

            {/* Arrow for desktop */}
            {index < steps.length - 1 && (
              <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                <ArrowRight className="h-6 w-6 text-orange-400" />
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
