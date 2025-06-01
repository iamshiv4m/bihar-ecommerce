import type { Metadata } from "next";
import { HelpArticleLayout } from "@/components/help/help-article-layout";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Clock, Package, CreditCard } from "lucide-react";

export const metadata: Metadata = {
  title: "Orders & Shopping Help - Bihar Crafts",
  description:
    "Get help with placing orders, managing your cart, and shopping on Bihar Crafts.",
};

const articles = [
  {
    id: "how-to-place-order",
    title: "How to place an order",
    excerpt: "Step-by-step guide to placing your first order on Bihar Crafts",
    content: `
      <h3>Placing an Order</h3>
      <p>Follow these simple steps to place your order:</p>
      <ol>
        <li>Browse our categories or search for specific products</li>
        <li>Click on a product to view details</li>
        <li>Select quantity and click "Add to Cart"</li>
        <li>Review your cart and proceed to checkout</li>
        <li>Enter shipping and payment information</li>
        <li>Review and confirm your order</li>
      </ol>
      
      <h3>Order Confirmation</h3>
      <p>After placing your order, you'll receive:</p>
      <ul>
        <li>Order confirmation email with order number</li>
        <li>Estimated delivery date</li>
        <li>Tracking information once shipped</li>
      </ul>
    `,
    views: 1250,
    helpful: 45,
  },
  {
    id: "modify-cancel-order",
    title: "How to modify or cancel an order",
    excerpt: "Learn how to make changes to your order before it ships",
    content: `
      <h3>Modifying Your Order</h3>
      <p>You can modify your order within 2 hours of placing it, provided it hasn't entered the processing stage.</p>
      
      <h3>What You Can Modify:</h3>
      <ul>
        <li>Shipping address</li>
        <li>Add or remove items (if available)</li>
        <li>Change quantity</li>
      </ul>
      
      <h3>Cancellation Policy</h3>
      <p>Orders can be cancelled:</p>
      <ul>
        <li>Within 2 hours of placing the order</li>
        <li>Before the order enters processing</li>
        <li>Full refund will be processed within 3-5 business days</li>
      </ul>
      
      <h3>How to Cancel:</h3>
      <ol>
        <li>Go to "My Orders" in your account</li>
        <li>Find the order you want to cancel</li>
        <li>Click "Cancel Order" if available</li>
        <li>Confirm cancellation</li>
      </ol>
    `,
    views: 890,
    helpful: 32,
  },
  {
    id: "order-status",
    title: "Understanding order status",
    excerpt: "Learn what each order status means and expected timelines",
    content: `
      <h3>Order Status Meanings</h3>
      
      <h4>Order Placed</h4>
      <p>Your order has been received and is being prepared for processing.</p>
      
      <h4>Processing</h4>
      <p>Your order is being prepared and packaged by our artisans.</p>
      
      <h4>Shipped</h4>
      <p>Your order has been dispatched and is on its way to you.</p>
      
      <h4>Out for Delivery</h4>
      <p>Your order is with the delivery partner and will be delivered today.</p>
      
      <h4>Delivered</h4>
      <p>Your order has been successfully delivered to your address.</p>
      
      <h3>Typical Timeline</h3>
      <ul>
        <li>Order Processing: 1-2 business days</li>
        <li>Shipping: 3-5 business days</li>
        <li>Total Delivery Time: 5-7 business days</li>
      </ul>
    `,
    views: 756,
    helpful: 28,
  },
  {
    id: "bulk-orders",
    title: "Placing bulk orders",
    excerpt: "Information about wholesale and bulk order discounts",
    content: `
      <h3>Bulk Order Benefits</h3>
      <p>We offer special pricing for bulk orders to support businesses and organizations.</p>
      
      <h3>Minimum Quantities</h3>
      <ul>
        <li>Paintings: 10+ pieces</li>
        <li>Textiles: 20+ pieces</li>
        <li>Pottery: 15+ pieces</li>
        <li>Jewelry: 25+ pieces</li>
      </ul>
      
      <h3>Bulk Discounts</h3>
      <ul>
        <li>10-24 items: 10% discount</li>
        <li>25-49 items: 15% discount</li>
        <li>50+ items: 20% discount</li>
      </ul>
      
      <h3>How to Place Bulk Orders</h3>
      <ol>
        <li>Contact our wholesale team at wholesale@biharcrafts.com</li>
        <li>Provide your requirements and quantities</li>
        <li>Receive a custom quote within 24 hours</li>
        <li>Confirm order with advance payment</li>
      </ol>
    `,
    views: 423,
    helpful: 18,
  },
];

export default function OrdersHelpPage() {
  return (
    <HelpArticleLayout
      title="Orders & Shopping"
      description="Everything you need to know about placing and managing orders"
      icon={Package}
      breadcrumbs={[
        { label: "Help Center", href: "/help" },
        { label: "Orders & Shopping", href: "/help/orders" },
      ]}
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Quick Stats */}
        <div className="lg:col-span-3">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
            <Card className="card-gradient border-orange-200">
              <CardContent className="p-4 text-center">
                <Package className="h-8 w-8 text-orange-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-orange-900">12</div>
                <div className="text-sm text-orange-700">Articles</div>
              </CardContent>
            </Card>
            <Card className="card-gradient border-orange-200">
              <CardContent className="p-4 text-center">
                <Clock className="h-8 w-8 text-orange-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-orange-900">5-7</div>
                <div className="text-sm text-orange-700">Days Delivery</div>
              </CardContent>
            </Card>
            <Card className="card-gradient border-orange-200">
              <CardContent className="p-4 text-center">
                <CheckCircle className="h-8 w-8 text-orange-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-orange-900">98%</div>
                <div className="text-sm text-orange-700">Success Rate</div>
              </CardContent>
            </Card>
            <Card className="card-gradient border-orange-200">
              <CardContent className="p-4 text-center">
                <CreditCard className="h-8 w-8 text-orange-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-orange-900">₹999</div>
                <div className="text-sm text-orange-700">Free Shipping</div>
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
