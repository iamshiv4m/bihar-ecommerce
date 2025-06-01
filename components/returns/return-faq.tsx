"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";

const faqs = [
  {
    question: "How long do I have to return an item?",
    answer:
      "You have 7 days from the delivery date to initiate a return. The item must be in its original condition with all packaging and tags intact.",
  },
  {
    question: "Do I need to pay for return shipping?",
    answer:
      "No, we provide free return pickup service for all eligible returns. We'll arrange a pickup from your address at no additional cost.",
  },
  {
    question: "When will I receive my refund?",
    answer:
      "Once we receive and inspect your returned item, the refund will be processed within 3-5 business days to your original payment method.",
  },
  {
    question: "Can I exchange an item instead of returning it?",
    answer:
      "Yes, you can request an exchange for a different size or color if available. The exchange process follows the same timeline as returns.",
  },
  {
    question: "What if my item arrives damaged?",
    answer:
      "If your item arrives damaged, please contact us immediately with photos. We'll arrange a replacement or full refund without requiring you to return the damaged item.",
  },
  {
    question: "Are customized items returnable?",
    answer:
      "Customized or personalized items cannot be returned unless they arrive damaged or defective. Please review your customization details carefully before ordering.",
  },
];

export function ReturnFAQ() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
    >
      <Card className="card-gradient border-orange-200">
        <CardContent className="p-6">
          <h3 className="text-xl font-semibold text-orange-900 mb-6">
            Frequently Asked Questions
          </h3>

          <Accordion type="single" collapsible className="space-y-2">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-orange-200"
              >
                <AccordionTrigger className="text-left text-orange-800 hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-orange-700">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </CardContent>
      </Card>
    </motion.div>
  );
}
