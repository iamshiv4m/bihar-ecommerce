"use client";

import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageCircle, Mail, Phone, Clock } from "lucide-react";
import { motion } from "framer-motion";

const supportOptions = [
  {
    icon: MessageCircle,
    title: "Live Chat",
    description: "Chat with our support team in real-time",
    availability: "Mon-Sat: 9AM-6PM",
    action: "Start Chat",
    href: "#",
    primary: true,
  },
  {
    icon: Mail,
    title: "Email Support",
    description: "Send us an email and we'll respond within 24 hours",
    availability: "24/7 Response",
    action: "Send Email",
    href: "/contact",
    primary: false,
  },
  {
    icon: Phone,
    title: "Phone Support",
    description: "Call us for immediate assistance",
    availability: "Mon-Sat: 9AM-6PM",
    action: "Call Now",
    href: "tel:+919876543210",
    primary: false,
  },
];

export function ContactSupport() {
  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h2 className="text-2xl lg:text-3xl font-bold text-orange-900">
          Still Need Help?
        </h2>
        <p className="text-orange-700">
          Our support team is here to assist you
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {supportOptions.map((option, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <Card
              className={`text-center card-gradient border-orange-200 hover:glow-orange transition-all duration-300 h-full ${
                option.primary ? "ring-2 ring-primary ring-opacity-50" : ""
              }`}
            >
              <CardContent className="p-6 space-y-4">
                <option.icon className="h-12 w-12 text-orange-600 mx-auto" />
                <div className="space-y-2">
                  <h3 className="font-semibold text-orange-900">
                    {option.title}
                  </h3>
                  <p className="text-sm text-orange-700">
                    {option.description}
                  </p>
                  <div className="flex items-center justify-center gap-1 text-xs text-orange-600">
                    <Clock className="h-3 w-3" />
                    {option.availability}
                  </div>
                </div>
                <Button
                  asChild
                  variant={option.primary ? "default" : "outline"}
                  className={
                    option.primary
                      ? "glow-orange"
                      : "border-orange-300 text-orange-800 hover:bg-orange-100"
                  }
                >
                  <Link href={option.href}>{option.action}</Link>
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
