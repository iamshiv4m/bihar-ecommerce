import type { Metadata } from "next";
import { HelpArticleLayout } from "@/components/help/help-article-layout";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MessageCircle, Phone, Mail, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Customer Support - Bihar Crafts",
  description: "Get in touch with our customer support team for assistance.",
};

const supportChannels = [
  {
    icon: MessageCircle,
    title: "Live Chat",
    description: "Chat with our support team in real-time",
    availability: "Mon-Sat: 9AM-6PM",
    responseTime: "Instant",
    action: "Start Chat",
    href: "#",
    primary: true,
  },
  {
    icon: Phone,
    title: "Phone Support",
    description: "Call us for immediate assistance",
    availability: "Mon-Sat: 9AM-6PM",
    responseTime: "Immediate",
    action: "Call Now",
    href: "tel:+919876543210",
    primary: false,
  },
  {
    icon: Mail,
    title: "Email Support",
    description: "Send us an email and we'll respond quickly",
    availability: "24/7",
    responseTime: "Within 24 hours",
    action: "Send Email",
    href: "mailto:support@biharcrafts.com",
    primary: false,
  },
];

const articles = [
  {
    id: "contact-support",
    title: "How to contact customer support",
    excerpt:
      "Different ways to reach our support team and when to use each method",
    content: `
      <h3>Support Channels</h3>
      
      <h4>Live Chat (Recommended)</h4>
      <ul>
        <li>Available Mon-Sat: 9AM-6PM IST</li>
        <li>Instant responses</li>
        <li>Screen sharing capability</li>
        <li>File sharing for order issues</li>
        <li>Best for: Quick questions, order issues</li>
      </ul>
      
      <h4>Phone Support</h4>
      <ul>
        <li>+91 98765 43210</li>
        <li>Available Mon-Sat: 9AM-6PM IST</li>
        <li>Direct conversation with support agent</li>
        <li>Best for: Complex issues, urgent matters</li>
      </ul>
      
      <h4>Email Support</h4>
      <ul>
        <li>support@biharcrafts.com</li>
        <li>24/7 submission, response within 24 hours</li>
        <li>Detailed explanations and attachments</li>
        <li>Best for: Detailed inquiries, documentation</li>
      </ul>
      
      <h3>Specialized Support</h3>
      <ul>
        <li>Orders: orders@biharcrafts.com</li>
        <li>Returns: returns@biharcrafts.com</li>
        <li>Payments: payments@biharcrafts.com</li>
        <li>Custom Orders: custom@biharcrafts.com</li>
        <li>Wholesale: wholesale@biharcrafts.com</li>
      </ul>
      
      <h3>Before Contacting Support</h3>
      <ol>
        <li>Check our FAQ section</li>
        <li>Search help articles</li>
        <li>Have your order number ready</li>
        <li>Prepare relevant screenshots</li>
        <li>Note your account email address</li>
      </ol>
    `,
    views: 1450,
    helpful: 58,
  },
  {
    id: "response-times",
    title: "Support response times and expectations",
    excerpt: "What to expect when you contact our support team",
    content: `
      <h3>Response Time Commitments</h3>
      
      <h4>Live Chat</h4>
      <ul>
        <li>Initial response: Within 30 seconds</li>
        <li>Average resolution time: 5-10 minutes</li>
        <li>Complex issues: May require follow-up</li>
      </ul>
      
      <h4>Phone Support</h4>
      <ul>
        <li>Average wait time: Under 2 minutes</li>
        <li>Call back option available</li>
        <li>Direct resolution for most issues</li>
      </ul>
      
      <h4>Email Support</h4>
      <ul>
        <li>Acknowledgment: Within 2 hours</li>
        <li>Full response: Within 24 hours</li>
        <li>Complex issues: Up to 48 hours</li>
        <li>Weekend emails: Responded by Monday</li>
      </ul>
      
      <h3>Priority Levels</h3>
      
      <h4>High Priority (Same Day Response)</h4>
      <ul>
        <li>Payment issues</li>
        <li>Order cancellations</li>
        <li>Delivery problems</li>
        <li>Account security concerns</li>
      </ul>
      
      <h4>Medium Priority (24-48 Hours)</h4>
      <ul>
        <li>Product questions</li>
        <li>Return requests</li>
        <li>Account modifications</li>
        <li>General inquiries</li>
      </ul>
      
      <h4>Low Priority (48-72 Hours)</h4>
      <ul>
        <li>Feature requests</li>
        <li>General feedback</li>
        <li>Partnership inquiries</li>
      </ul>
      
      <h3>What We Need From You</h3>
      <ul>
        <li>Clear description of the issue</li>
        <li>Order number (if applicable)</li>
        <li>Screenshots or photos</li>
        <li>Steps you've already tried</li>
        <li>Your preferred resolution</li>
      </ul>
      
      <h3>Follow-Up Process</h3>
      <ul>
        <li>We'll confirm issue resolution</li>
        <li>Follow-up survey for feedback</li>
        <li>Case number for future reference</li>
        <li>Escalation if not satisfied</li>
      </ul>
    `,
    views: 890,
    helpful: 42,
  },
  {
    id: "escalation-process",
    title: "Escalating issues and complaints",
    excerpt: "How to escalate unresolved issues to higher management",
    content: `
      <h3>When to Escalate</h3>
      <ul>
        <li>Issue not resolved after 48 hours</li>
        <li>Unsatisfactory resolution provided</li>
        <li>Multiple failed attempts to resolve</li>
        <li>Serious service failures</li>
        <li>Policy disputes</li>
      </ul>
      
      <h3>Escalation Levels</h3>
      
      <h4>Level 1: Senior Support Agent</h4>
      <ul>
        <li>Request escalation during chat/call</li>
        <li>Email: escalation@biharcrafts.com</li>
        <li>Response time: Within 4 hours</li>
        <li>Authority to override standard policies</li>
      </ul>
      
      <h4>Level 2: Support Manager</h4>
      <ul>
        <li>For unresolved Level 1 escalations</li>
        <li>Email: manager@biharcrafts.com</li>
        <li>Response time: Within 24 hours</li>
        <li>Can authorize special resolutions</li>
      </ul>
      
      <h4>Level 3: Customer Relations Director</h4>
      <ul>
        <li>For serious complaints and disputes</li>
        <li>Email: director@biharcrafts.com</li>
        <li>Response time: Within 48 hours</li>
        <li>Final authority on customer issues</li>
      </ul>
      
      <h3>How to Escalate</h3>
      <ol>
        <li>Reference your original case number</li>
        <li>Summarize the issue and attempts made</li>
        <li>Explain why you're not satisfied</li>
        <li>State your desired resolution</li>
        <li>Provide any additional evidence</li>
      </ol>
      
      <h3>Escalation Email Template</h3>
      <p>Subject: Escalation Request - Case #[CASE_NUMBER]</p>
      <p>Dear [LEVEL] Team,</p>
      <p>I am escalating case #[CASE_NUMBER] regarding [BRIEF_ISSUE_DESCRIPTION].</p>
      <p>Original issue: [DETAILED_DESCRIPTION]</p>
      <p>Resolution attempts: [WHAT_WAS_TRIED]</p>
      <p>Why escalating: [REASON_FOR_ESCALATION]</p>
      <p>Desired resolution: [WHAT_YOU_WANT]</p>
      <p>Thank you for your attention to this matter.</p>
      
      <h3>External Escalation</h3>
      <p>If internal escalation doesn't resolve your issue:</p>
      <ul>
        <li>Consumer forums and review sites</li>
        <li>Social media channels</li>
        <li>Consumer protection agencies</li>
        <li>Legal consultation if necessary</li>
      </ul>
    `,
    views: 456,
    helpful: 23,
  },
  {
    id: "feedback-suggestions",
    title: "Providing feedback and suggestions",
    excerpt: "How to share your feedback and suggestions for improvement",
    content: `
      <h3>Types of Feedback</h3>
      
      <h4>Product Feedback</h4>
      <ul>
        <li>Product quality and design</li>
        <li>New product suggestions</li>
        <li>Pricing feedback</li>
        <li>Product descriptions and photos</li>
      </ul>
      
      <h4>Service Feedback</h4>
      <ul>
        <li>Customer service experience</li>
        <li>Website usability</li>
        <li>Shipping and delivery</li>
        <li>Return process</li>
      </ul>
      
      <h4>General Suggestions</h4>
      <ul>
        <li>New features or services</li>
        <li>Partnership opportunities</li>
        <li>Community initiatives</li>
        <li>Sustainability improvements</li>
      </ul>
      
      <h3>How to Provide Feedback</h3>
      
      <h4>Feedback Form</h4>
      <ul>
        <li>Available on our website</li>
        <li>Structured format for clarity</li>
        <li>Anonymous option available</li>
        <li>Category selection for routing</li>
      </ul>
      
      <h4>Email Feedback</h4>
      <ul>
        <li>feedback@biharcrafts.com</li>
        <li>Detailed explanations welcome</li>
        <li>Attach screenshots or examples</li>
        <li>Response within 5 business days</li>
      </ul>
      
      <h4>Social Media</h4>
      <ul>
        <li>Facebook, Instagram, Twitter</li>
        <li>Public or private messages</li>
        <li>Tag us in your posts</li>
        <li>Use #BiharCraftsFeedback</li>
      </ul>
      
      <h3>What Happens to Your Feedback</h3>
      <ol>
        <li>All feedback is reviewed by our team</li>
        <li>Categorized and prioritized</li>
        <li>Shared with relevant departments</li>
        <li>Considered for future improvements</li>
        <li>You may receive follow-up questions</li>
      </ol>
      
      <h3>Feedback Rewards</h3>
      <ul>
        <li>Valuable feedback may earn rewards</li>
        <li>Feature in customer stories</li>
        <li>Early access to new products</li>
        <li>Special discount codes</li>
        <li>Recognition in our newsletter</li>
      </ul>
      
      <h3>Making Good Feedback</h3>
      <ul>
        <li>Be specific and detailed</li>
        <li>Provide examples or screenshots</li>
        <li>Suggest solutions if possible</li>
        <li>Be constructive and respectful</li>
        <li>Include your contact information</li>
      </ul>
    `,
    views: 342,
    helpful: 18,
  },
];

export default function SupportHelpPage() {
  return (
    <HelpArticleLayout
      title="Customer Support"
      description="Get help from our customer support team"
      icon={MessageCircle}
      breadcrumbs={[
        { label: "Help Center", href: "/help" },
        { label: "Customer Support", href: "/help/support" },
      ]}
    >
      <div className="space-y-12">
        {/* Support Channels */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-orange-900 text-center">
            Contact Our Support Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {supportChannels.map((channel, index) => (
              <Card
                key={index}
                className={`text-center card-gradient border-orange-200 hover:glow-orange transition-all duration-300 ${
                  channel.primary ? "ring-2 ring-primary ring-opacity-50" : ""
                }`}
              >
                <CardContent className="p-6 space-y-4">
                  <channel.icon className="h-12 w-12 text-orange-600 mx-auto" />
                  <div className="space-y-2">
                    <h3 className="font-semibold text-orange-900">
                      {channel.title}
                    </h3>
                    <p className="text-sm text-orange-700">
                      {channel.description}
                    </p>
                    <div className="space-y-1 text-xs text-orange-600">
                      <div className="flex items-center justify-center gap-1">
                        <Clock className="h-3 w-3" />
                        {channel.availability}
                      </div>
                      <div>Response: {channel.responseTime}</div>
                    </div>
                  </div>
                  <Button
                    asChild
                    variant={channel.primary ? "default" : "outline"}
                    className={
                      channel.primary
                        ? "glow-orange"
                        : "border-orange-300 text-orange-800 hover:bg-orange-100"
                    }
                  >
                    <a href={channel.href}>{channel.action}</a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Articles */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-orange-900">
            Support Articles
          </h2>
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
