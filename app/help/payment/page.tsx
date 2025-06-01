import type { Metadata } from "next";
import { HelpArticleLayout } from "@/components/help/help-article-layout";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CreditCard, Shield, Smartphone, Building } from "lucide-react";

export const metadata: Metadata = {
  title: "Payment & Billing Help - Bihar Crafts",
  description:
    "Learn about payment methods, billing, and transaction security.",
};

const articles = [
  {
    id: "payment-methods",
    title: "Accepted payment methods",
    excerpt: "All the ways you can pay for your Bihar Crafts orders",
    content: `
      <h3>Credit & Debit Cards</h3>
      <ul>
        <li>Visa, Mastercard, American Express</li>
        <li>RuPay cards</li>
        <li>All major Indian and international banks</li>
        <li>Secure 3D authentication</li>
      </ul>
      
      <h3>Digital Wallets</h3>
      <ul>
        <li>Paytm</li>
        <li>PhonePe</li>
        <li>Google Pay</li>
        <li>Amazon Pay</li>
        <li>Mobikwik</li>
      </ul>
      
      <h3>UPI Payments</h3>
      <ul>
        <li>All UPI apps supported</li>
        <li>Instant payment confirmation</li>
        <li>No additional charges</li>
      </ul>
      
      <h3>Net Banking</h3>
      <ul>
        <li>All major Indian banks</li>
        <li>Secure bank gateway</li>
        <li>Real-time transaction</li>
      </ul>
      
      <h3>Buy Now, Pay Later</h3>
      <ul>
        <li>Simpl</li>
        <li>LazyPay</li>
        <li>PayLater by ICICI</li>
      </ul>
      
      <h3>International Payments</h3>
      <ul>
        <li>PayPal</li>
        <li>International credit/debit cards</li>
        <li>Currency conversion at checkout</li>
      </ul>
    `,
    views: 1320,
    helpful: 48,
  },
  {
    id: "payment-security",
    title: "Payment security and safety",
    excerpt:
      "How we protect your payment information and ensure secure transactions",
    content: `
      <h3>Security Measures</h3>
      
      <h4>SSL Encryption</h4>
      <ul>
        <li>256-bit SSL encryption for all transactions</li>
        <li>Secure data transmission</li>
        <li>Protected payment pages</li>
      </ul>
      
      <h4>PCI DSS Compliance</h4>
      <ul>
        <li>Payment Card Industry Data Security Standard</li>
        <li>Regular security audits</li>
        <li>Secure card data handling</li>
      </ul>
      
      <h4>3D Secure Authentication</h4>
      <ul>
        <li>Additional layer of security</li>
        <li>OTP verification</li>
        <li>Bank-level authentication</li>
      </ul>
      
      <h3>What We Don't Store</h3>
      <ul>
        <li>Credit card numbers</li>
        <li>CVV codes</li>
        <li>Banking passwords</li>
        <li>UPI PINs</li>
      </ul>
      
      <h3>Safe Payment Tips</h3>
      <ul>
        <li>Always check for "https://" in the URL</li>
        <li>Never share OTP or PIN with anyone</li>
        <li>Use secure internet connections</li>
        <li>Log out after completing payment</li>
        <li>Check bank statements regularly</li>
      </ul>
      
      <h3>Reporting Issues</h3>
      <p>If you notice any unauthorized transactions:</p>
      <ol>
        <li>Contact your bank immediately</li>
        <li>Report to us at security@biharcrafts.com</li>
        <li>We'll investigate and assist with resolution</li>
      </ol>
    `,
    views: 890,
    helpful: 42,
  },
  {
    id: "payment-failed",
    title: "Payment failed or declined",
    excerpt: "Troubleshooting payment failures and what to do next",
    content: `
      <h3>Common Reasons for Payment Failure</h3>
      
      <h4>Insufficient Funds</h4>
      <ul>
        <li>Check your account balance</li>
        <li>Ensure sufficient funds for the transaction</li>
        <li>Consider daily transaction limits</li>
      </ul>
      
      <h4>Card Issues</h4>
      <ul>
        <li>Expired card</li>
        <li>Incorrect card details</li>
        <li>Card blocked by bank</li>
        <li>International transactions disabled</li>
      </ul>
      
      <h4>Network Issues</h4>
      <ul>
        <li>Poor internet connection</li>
        <li>Bank server downtime</li>
        <li>Payment gateway issues</li>
      </ul>
      
      <h3>What to Do When Payment Fails</h3>
      <ol>
        <li>Check your internet connection</li>
        <li>Verify card details are correct</li>
        <li>Try a different payment method</li>
        <li>Contact your bank if card is declined</li>
        <li>Wait a few minutes and retry</li>
      </ol>
      
      <h3>If Money is Debited but Order Failed</h3>
      <ul>
        <li>Don't panic - this is usually temporary</li>
        <li>Amount will be auto-refunded in 3-5 business days</li>
        <li>Contact us with transaction details</li>
        <li>We'll track and expedite the refund</li>
      </ul>
      
      <h3>Getting Help</h3>
      <p>Contact our payment support team:</p>
      <ul>
        <li>Email: payments@biharcrafts.com</li>
        <li>Phone: +91 98765 43210</li>
        <li>Live chat on website</li>
        <li>Include transaction ID and order details</li>
      </ul>
    `,
    views: 756,
    helpful: 35,
  },
  {
    id: "refunds-billing",
    title: "Refunds and billing questions",
    excerpt: "Understanding refunds, invoices, and billing processes",
    content: `
      <h3>Refund Process</h3>
      
      <h4>Refund Timeline</h4>
      <ul>
        <li>Credit/Debit Cards: 3-5 business days</li>
        <li>UPI/Digital Wallets: 1-2 business days</li>
        <li>Net Banking: 3-5 business days</li>
        <li>International cards: 7-10 business days</li>
      </ul>
      
      <h4>Refund Method</h4>
      <ul>
        <li>Refunded to original payment method</li>
        <li>Cannot be refunded to different account</li>
        <li>Partial refunds for partial returns</li>
      </ul>
      
      <h3>Invoices and Receipts</h3>
      
      <h4>Order Invoice</h4>
      <ul>
        <li>Emailed after order confirmation</li>
        <li>Available in "My Orders" section</li>
        <li>Includes GST details</li>
        <li>Required for business purchases</li>
      </ul>
      
      <h4>GST Information</h4>
      <ul>
        <li>GST included in product prices</li>
        <li>GSTIN: 10AABCB1234C1Z5</li>
        <li>Separate GST invoice for B2B orders</li>
      </ul>
      
      <h3>Billing Address</h3>
      <ul>
        <li>Must match card billing address</li>
        <li>Can be different from shipping address</li>
        <li>Required for international orders</li>
        <li>Used for payment verification</li>
      </ul>
      
      <h3>Corporate Billing</h3>
      <ul>
        <li>Company GST number required</li>
        <li>Purchase orders accepted</li>
        <li>Credit terms available for verified businesses</li>
        <li>Bulk order discounts applicable</li>
      </ul>
    `,
    views: 642,
    helpful: 28,
  },
];

export default function PaymentHelpPage() {
  return (
    <HelpArticleLayout
      title="Payment & Billing"
      description="Payment methods, security, and billing information"
      icon={CreditCard}
      breadcrumbs={[
        { label: "Help Center", href: "/help" },
        { label: "Payment & Billing", href: "/help/payment" },
      ]}
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Quick Stats */}
        <div className="lg:col-span-3">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
            <Card className="card-gradient border-orange-200">
              <CardContent className="p-4 text-center">
                <CreditCard className="h-8 w-8 text-orange-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-orange-900">15+</div>
                <div className="text-sm text-orange-700">Payment Methods</div>
              </CardContent>
            </Card>
            <Card className="card-gradient border-orange-200">
              <CardContent className="p-4 text-center">
                <Shield className="h-8 w-8 text-orange-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-orange-900">
                  256-bit
                </div>
                <div className="text-sm text-orange-700">SSL Encryption</div>
              </CardContent>
            </Card>
            <Card className="card-gradient border-orange-200">
              <CardContent className="p-4 text-center">
                <Smartphone className="h-8 w-8 text-orange-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-orange-900">UPI</div>
                <div className="text-sm text-orange-700">Instant Payment</div>
              </CardContent>
            </Card>
            <Card className="card-gradient border-orange-200">
              <CardContent className="p-4 text-center">
                <Building className="h-8 w-8 text-orange-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-orange-900">3-5</div>
                <div className="text-sm text-orange-700">Days Refund</div>
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
