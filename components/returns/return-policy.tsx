"use client";

import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, XCircle, Clock, Shield } from "lucide-react";
import { motion } from "framer-motion";

const policyHighlights = [
  {
    icon: Clock,
    title: "7-Day Return Window",
    description: "You have 7 days from delivery to initiate a return",
    color: "text-orange-600",
  },
  {
    icon: Shield,
    title: "Quality Guarantee",
    description: "All products are quality checked before shipping",
    color: "text-orange-600",
  },
  {
    icon: CheckCircle,
    title: "Easy Process",
    description: "Simple online return process with pickup service",
    color: "text-orange-600",
  },
];

const eligibleItems = [
  "Products in original condition",
  "Items with original packaging",
  "Products with tags attached",
  "Unused and undamaged items",
];

const nonEligibleItems = [
  "Customized or personalized items",
  "Products damaged by misuse",
  "Items without original packaging",
  "Products used or worn",
];

export function ReturnPolicy() {
  return (
    <div className="space-y-8">
      <motion.div
        className="text-center space-y-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-2xl lg:text-3xl font-bold text-orange-900">
          Our Return Policy
        </h2>
        <p className="text-orange-700 max-w-2xl mx-auto">
          We stand behind the quality of our handcrafted products and want you
          to be completely satisfied.
        </p>
      </motion.div>

      {/* Policy Highlights */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {policyHighlights.map((highlight, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <Card className="text-center card-gradient border-orange-200 hover:glow-orange transition-all duration-300">
              <CardContent className="p-6 space-y-4">
                <highlight.icon
                  className={`h-12 w-12 mx-auto ${highlight.color}`}
                />
                <div className="space-y-2">
                  <h3 className="font-semibold text-orange-900">
                    {highlight.title}
                  </h3>
                  <p className="text-sm text-orange-700">
                    {highlight.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Eligible vs Non-Eligible */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card className="card-gradient border-orange-200">
          <CardContent className="p-6">
            <div className="flex items-center gap-2 mb-4">
              <CheckCircle className="h-5 w-5 text-green-600" />
              <h3 className="font-semibold text-orange-900">
                Eligible for Return
              </h3>
            </div>
            <ul className="space-y-2">
              {eligibleItems.map((item, index) => (
                <li
                  key={index}
                  className="flex items-center gap-2 text-sm text-orange-700"
                >
                  <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card className="card-gradient border-orange-200">
          <CardContent className="p-6">
            <div className="flex items-center gap-2 mb-4">
              <XCircle className="h-5 w-5 text-red-600" />
              <h3 className="font-semibold text-orange-900">
                Not Eligible for Return
              </h3>
            </div>
            <ul className="space-y-2">
              {nonEligibleItems.map((item, index) => (
                <li
                  key={index}
                  className="flex items-center gap-2 text-sm text-orange-700"
                >
                  <XCircle className="h-4 w-4 text-red-600 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
