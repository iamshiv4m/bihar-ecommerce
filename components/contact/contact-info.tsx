"use client";

import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

const contactMethods = [
  {
    icon: MapPin,
    title: "Visit Our Office",
    details: ["123 Gandhi Maidan", "Patna, Bihar 800001", "India"],
    color: "text-orange-600",
  },
  {
    icon: Phone,
    title: "Call Us",
    details: ["+91 98765 43210", "+91 87654 32109", "Mon-Sat: 9AM-6PM"],
    color: "text-orange-600",
  },
  {
    icon: Mail,
    title: "Email Us",
    details: [
      "hello@biharcrafts.com",
      "support@biharcrafts.com",
      "We reply within 24 hours",
    ],
    color: "text-orange-600",
  },
  {
    icon: MessageCircle,
    title: "Live Chat",
    details: ["Available on website", "Mon-Sat: 9AM-6PM", "Instant support"],
    color: "text-orange-600",
  },
];

const faqs = [
  {
    question: "How long does shipping take?",
    answer:
      "Standard shipping takes 5-7 business days. Express shipping is available for 2-3 days.",
  },
  {
    question: "Do you ship internationally?",
    answer: "Yes, we ship to 50+ countries worldwide with tracking provided.",
  },
  {
    question: "What's your return policy?",
    answer:
      "We offer a 7-day return policy for all products in original condition.",
  },
];

export function ContactInfo() {
  return (
    <motion.div
      className="space-y-6"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Contact Methods */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {contactMethods.map((method, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <Card className="card-gradient border-orange-200 hover:glow-orange transition-all duration-300">
              <CardContent className="p-6 text-center space-y-3">
                <method.icon className={`h-8 w-8 mx-auto ${method.color}`} />
                <h3 className="font-semibold text-orange-900">
                  {method.title}
                </h3>
                <div className="space-y-1">
                  {method.details.map((detail, i) => (
                    <p key={i} className="text-sm text-orange-700">
                      {detail}
                    </p>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Business Hours */}
      <Card className="card-gradient border-orange-200">
        <CardContent className="p-6">
          <h3 className="font-semibold text-orange-900 mb-4 flex items-center gap-2">
            <Clock className="h-5 w-5 text-orange-600" />
            Business Hours
          </h3>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-orange-700">Monday - Friday</span>
              <span className="text-orange-900 font-medium">
                9:00 AM - 6:00 PM
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-orange-700">Saturday</span>
              <span className="text-orange-900 font-medium">
                10:00 AM - 4:00 PM
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-orange-700">Sunday</span>
              <span className="text-orange-500">Closed</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Quick FAQs */}
      <Card className="card-gradient border-orange-200">
        <CardContent className="p-6">
          <h3 className="font-semibold text-orange-900 mb-4">Quick Answers</h3>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="space-y-2">
                <h4 className="font-medium text-orange-800">{faq.question}</h4>
                <p className="text-sm text-orange-700">{faq.answer}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
