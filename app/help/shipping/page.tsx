import type { Metadata } from "next";
import { HelpArticleLayout } from "@/components/help/help-article-layout";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Truck, MapPin, Clock, Shield } from "lucide-react";

export const metadata: Metadata = {
  title: "Shipping & Delivery Help - Bihar Crafts",
  description:
    "Learn about shipping options, delivery times, and tracking your orders.",
};

const articles = [
  {
    id: "shipping-options",
    title: "Shipping options and delivery times",
    excerpt: "Compare our shipping methods and choose what works best for you",
    content: `
      <h3>Standard Shipping (Free on orders ₹999+)</h3>
      <ul>
        <li>Delivery Time: 5-7 business days</li>
        <li>Cost: ₹99 (Free on orders above ₹999)</li>
        <li>Tracking: Yes</li>
        <li>Insurance: Included</li>
      </ul>
      
      <h3>Express Shipping</h3>
      <ul>
        <li>Delivery Time: 2-3 business days</li>
        <li>Cost: ₹199</li>
        <li>Tracking: Yes</li>
        <li>Insurance: Included</li>
      </ul>
      
      <h3>Same Day Delivery (Select Cities)</h3>
      <ul>
        <li>Available in: Delhi, Mumbai, Bangalore, Pune, Hyderabad</li>
        <li>Order by: 12 PM for same day delivery</li>
        <li>Cost: ₹299</li>
        <li>Tracking: Real-time</li>
      </ul>
      
      <h3>International Shipping</h3>
      <ul>
        <li>Delivery Time: 10-15 business days</li>
        <li>Cost: Calculated at checkout</li>
        <li>Available to: 50+ countries</li>
        <li>Customs: Customer responsibility</li>
      </ul>
    `,
    views: 1450,
    helpful: 52,
  },
  {
    id: "track-order",
    title: "How to track your order",
    excerpt: "Step-by-step guide to tracking your shipment",
    content: `
      <h3>Tracking Your Order</h3>
      <p>Once your order ships, you'll receive tracking information via email and SMS.</p>
      
      <h3>Ways to Track:</h3>
      <ol>
        <li><strong>Email/SMS Link:</strong> Click the tracking link in your notification</li>
        <li><strong>My Account:</strong> Log in and go to "My Orders"</li>
        <li><strong>Order Number:</strong> Use your order number on our tracking page</li>
        <li><strong>Phone:</strong> Call customer service with your order number</li>
      </ol>
      
      <h3>Tracking Information Includes:</h3>
      <ul>
        <li>Current location of your package</li>
        <li>Estimated delivery date</li>
        <li>Delivery attempts</li>
        <li>Delivery confirmation</li>
      </ul>
      
      <h3>Tracking Updates:</h3>
      <ul>
        <li>Order Shipped</li>
        <li>In Transit</li>
        <li>Out for Delivery</li>
        <li>Delivered</li>
      </ul>
    `,
    views: 1250,
    helpful: 48,
  },
  {
    id: "shipping-charges",
    title: "Shipping charges and free shipping",
    excerpt:
      "Understand our shipping costs and how to qualify for free shipping",
    content: `
      <h3>Shipping Charges</h3>
      
      <h4>Domestic Shipping</h4>
      <ul>
        <li>Orders under ₹999: ₹99</li>
        <li>Orders ₹999 and above: FREE</li>
        <li>Express shipping: ₹199 (regardless of order value)</li>
        <li>Same day delivery: ₹299 (select cities only)</li>
      </ul>
      
      <h4>International Shipping</h4>
      <ul>
        <li>Calculated based on weight and destination</li>
        <li>Starts from ₹1,500 for small items</li>
        <li>Free shipping on orders above ₹10,000</li>
      </ul>
      
      <h3>How to Qualify for Free Shipping</h3>
      <ol>
        <li>Add items worth ₹999 or more to your cart</li>
        <li>Free shipping will be automatically applied at checkout</li>
        <li>Offer valid on standard shipping only</li>
        <li>Cannot be combined with other shipping offers</li>
      </ol>
      
      <h3>Tips to Save on Shipping</h3>
      <ul>
        <li>Combine multiple items in one order</li>
        <li>Look for free shipping promotions</li>
        <li>Consider standard shipping for non-urgent orders</li>
      </ul>
    `,
    views: 890,
    helpful: 35,
  },
  {
    id: "delivery-issues",
    title: "Delivery issues and solutions",
    excerpt: "What to do if your package is delayed or has delivery problems",
    content: `
      <h3>Common Delivery Issues</h3>
      
      <h4>Package Delayed</h4>
      <ul>
        <li>Check tracking for latest updates</li>
        <li>Weather or local conditions may cause delays</li>
        <li>Contact us if delayed beyond estimated date</li>
      </ul>
      
      <h4>Failed Delivery Attempt</h4>
      <ul>
        <li>Delivery partner will attempt 3 times</li>
        <li>You'll receive notification of each attempt</li>
        <li>Package held at local facility for 7 days</li>
        <li>Contact delivery partner to reschedule</li>
      </ul>
      
      <h4>Wrong Address</h4>
      <ul>
        <li>Contact us immediately if you notice wrong address</li>
        <li>We can redirect if package hasn't shipped</li>
        <li>Additional charges may apply for address changes</li>
      </ul>
      
      <h4>Package Not Received</h4>
      <ul>
        <li>Check with neighbors or building security</li>
        <li>Verify delivery address in your account</li>
        <li>Contact us within 48 hours of delivery date</li>
        <li>We'll investigate and provide resolution</li>
      </ul>
      
      <h3>Getting Help</h3>
      <p>If you experience any delivery issues:</p>
      <ol>
        <li>Check your tracking information first</li>
        <li>Contact our customer service</li>
        <li>Provide your order number and tracking details</li>
        <li>We'll work with delivery partners to resolve</li>
      </ol>
    `,
    views: 675,
    helpful: 29,
  },
];

export default function ShippingHelpPage() {
  return (
    <HelpArticleLayout
      title="Shipping & Delivery"
      description="Everything about shipping options, tracking, and delivery"
      icon={Truck}
      breadcrumbs={[
        { label: "Help Center", href: "/help" },
        { label: "Shipping & Delivery", href: "/help/shipping" },
      ]}
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Quick Stats */}
        <div className="lg:col-span-3">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
            <Card className="card-gradient border-orange-200">
              <CardContent className="p-4 text-center">
                <Truck className="h-8 w-8 text-orange-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-orange-900">5-7</div>
                <div className="text-sm text-orange-700">Days Standard</div>
              </CardContent>
            </Card>
            <Card className="card-gradient border-orange-200">
              <CardContent className="p-4 text-center">
                <MapPin className="h-8 w-8 text-orange-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-orange-900">50+</div>
                <div className="text-sm text-orange-700">Countries</div>
              </CardContent>
            </Card>
            <Card className="card-gradient border-orange-200">
              <CardContent className="p-4 text-center">
                <Clock className="h-8 w-8 text-orange-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-orange-900">2-3</div>
                <div className="text-sm text-orange-700">Days Express</div>
              </CardContent>
            </Card>
            <Card className="card-gradient border-orange-200">
              <CardContent className="p-4 text-center">
                <Shield className="h-8 w-8 text-orange-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-orange-900">100%</div>
                <div className="text-sm text-orange-700">Insured</div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Articles */}
        <div className="lg:col-span-3 space-y-6">
          {articles.map((article) => (
            <Card
              key={article.id}
              className="card-gradient border-orange-200 hover:glow-orange transition-all"
            >
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-orange-900 mb-2">
                      {article.title}
                    </h3>
                    <p className="text-orange-700 mb-4">{article.excerpt}</p>
                  </div>
                  <div className="flex gap-2 ml-4">
                    <Badge
                      variant="secondary"
                      className="bg-orange-100 text-orange-800"
                    >
                      {article.views} views
                    </Badge>
                    <Badge
                      variant="outline"
                      className="border-orange-300 text-orange-700"
                    >
                      {article.helpful} helpful
                    </Badge>
                  </div>
                </div>
                <div
                  className="prose prose-orange max-w-none text-orange-800"
                  dangerouslySetInnerHTML={{ __html: article.content }}
                />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </HelpArticleLayout>
  );
}
