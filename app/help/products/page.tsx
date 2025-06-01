import type { Metadata } from "next";
import { HelpArticleLayout } from "@/components/help/help-article-layout";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Package, Shield, Award, Heart } from "lucide-react";

export const metadata: Metadata = {
  title: "Products & Quality Help - Bihar Crafts",
  description:
    "Learn about our products, quality standards, and authenticity verification.",
};

const articles = [
  {
    id: "product-authenticity",
    title: "Verifying product authenticity",
    excerpt:
      "How to ensure your Bihar Crafts products are genuine and authentic",
    content: `
      <h3>Authenticity Guarantee</h3>
      <p>Every Bihar Crafts product comes with our authenticity guarantee. We work directly with verified artisans to ensure genuine handmade products.</p>
      
      <h3>Authentication Features</h3>
      
      <h4>Certificate of Authenticity</h4>
      <ul>
        <li>Unique certificate number</li>
        <li>Artisan signature and details</li>
        <li>Product specifications</li>
        <li>QR code for verification</li>
      </ul>
      
      <h4>Artisan Tags</h4>
      <ul>
        <li>Each product has an artisan tag</li>
        <li>Contains artisan name and village</li>
        <li>Craft technique information</li>
        <li>Date of creation</li>
      </ul>
      
      <h4>Quality Seals</h4>
      <ul>
        <li>Bihar Crafts quality seal</li>
        <li>Handmade certification</li>
        <li>Traditional craft verification</li>
      </ul>
      
      <h3>How to Verify</h3>
      <ol>
        <li>Check for certificate of authenticity</li>
        <li>Scan QR code with your phone</li>
        <li>Verify on our website using certificate number</li>
        <li>Contact us if you have concerns</li>
      </ol>
      
      <h3>Red Flags</h3>
      <p>Be cautious of:</p>
      <ul>
        <li>Missing authenticity certificate</li>
        <li>No artisan information</li>
        <li>Unusually low prices</li>
        <li>Mass-produced appearance</li>
        <li>Poor quality materials</li>
      </ul>
      
      <h3>Reporting Concerns</h3>
      <p>If you suspect a counterfeit product:</p>
      <ul>
        <li>Contact us immediately</li>
        <li>Provide photos and certificate details</li>
        <li>We'll investigate and take action</li>
        <li>Full refund if product is not authentic</li>
      </ul>
    `,
    views: 1120,
    helpful: 52,
  },
  {
    id: "product-care",
    title: "Caring for handmade products",
    excerpt: "Proper care instructions to maintain quality and longevity",
    content: `
      <h3>General Care Guidelines</h3>
      
      <h4>Madhubani Paintings</h4>
      <ul>
        <li>Keep away from direct sunlight</li>
        <li>Avoid humid environments</li>
        <li>Clean with soft, dry cloth</li>
        <li>Frame under glass for protection</li>
        <li>Handle with clean hands</li>
      </ul>
      
      <h4>Textiles & Fabrics</h4>
      <ul>
        <li>Hand wash in cold water</li>
        <li>Use mild detergent</li>
        <li>Air dry in shade</li>
        <li>Iron on low heat with cloth</li>
        <li>Store in breathable fabric bags</li>
      </ul>
      
      <h4>Pottery & Ceramics</h4>
      <ul>
        <li>Hand wash with gentle soap</li>
        <li>Avoid sudden temperature changes</li>
        <li>Don't use in microwave unless specified</li>
        <li>Store carefully to prevent chips</li>
        <li>Use soft cloths for cleaning</li>
      </ul>
      
      <h4>Jewelry & Metal Items</h4>
      <ul>
        <li>Clean with soft jewelry cloth</li>
        <li>Store in dry place</li>
        <li>Avoid contact with chemicals</li>
        <li>Remove before swimming/bathing</li>
        <li>Polish occasionally with appropriate cleaner</li>
      </ul>
      
      <h3>Storage Tips</h3>
      <ul>
        <li>Use original packaging when possible</li>
        <li>Maintain stable temperature and humidity</li>
        <li>Avoid stacking heavy items</li>
        <li>Use acid-free materials for long-term storage</li>
        <li>Check items periodically</li>
      </ul>
      
      <h3>Professional Care</h3>
      <p>For valuable or delicate items:</p>
      <ul>
        <li>Consult professional conservators</li>
        <li>Get regular condition assessments</li>
        <li>Use museum-quality storage materials</li>
        <li>Consider professional cleaning services</li>
      </ul>
    `,
    views: 890,
    helpful: 45,
  },
  {
    id: "product-customization",
    title: "Custom orders and personalization",
    excerpt: "How to request custom products and personalized items",
    content: `
      <h3>Customization Options</h3>
      
      <h4>Available Customizations</h4>
      <ul>
        <li>Size modifications</li>
        <li>Color variations</li>
        <li>Personal messages or names</li>
        <li>Design modifications</li>
        <li>Special packaging</li>
      </ul>
      
      <h4>Products Available for Customization</h4>
      <ul>
        <li>Madhubani paintings</li>
        <li>Textiles and fabrics</li>
        <li>Pottery items</li>
        <li>Jewelry pieces</li>
        <li>Home decor items</li>
      </ul>
      
      <h3>How to Request Custom Orders</h3>
      <ol>
        <li>Contact our custom orders team</li>
        <li>Describe your requirements in detail</li>
        <li>Provide reference images if available</li>
        <li>Discuss timeline and pricing</li>
        <li>Confirm order with advance payment</li>
        <li>Receive progress updates</li>
        <li>Approve final product before shipping</li>
      </ol>
      
      <h3>Pricing and Timeline</h3>
      
      <h4>Custom Order Pricing</h4>
      <ul>
        <li>Base product price + customization fee</li>
        <li>Complexity determines additional cost</li>
        <li>Rush orders incur extra charges</li>
        <li>Bulk custom orders get discounts</li>
      </ul>
      
      <h4>Timeline</h4>
      <ul>
        <li>Simple customizations: 7-10 days</li>
        <li>Complex modifications: 15-21 days</li>
        <li>Completely new designs: 21-30 days</li>
        <li>Rush orders: 50% extra cost for half timeline</li>
      </ul>
      
      <h3>Important Notes</h3>
      <ul>
        <li>Custom orders require 50% advance payment</li>
        <li>Cannot be cancelled once production starts</li>
        <li>Final approval required before shipping</li>
        <li>Custom items not eligible for return</li>
        <li>Additional shipping time may apply</li>
      </ul>
      
      <h3>Contact Information</h3>
      <ul>
        <li>Email: custom@biharcrafts.com</li>
        <li>Phone: +91 98765 43210</li>
        <li>WhatsApp: +91 98765 43210</li>
        <li>Response time: Within 24 hours</li>
      </ul>
    `,
    views: 675,
    helpful: 32,
  },
  {
    id: "quality-standards",
    title: "Our quality standards and process",
    excerpt: "Learn about our quality control process and standards",
    content: `
      <h3>Quality Assurance Process</h3>
      
      <h4>Artisan Selection</h4>
      <ul>
        <li>Verified traditional craftspeople</li>
        <li>Minimum 5 years experience</li>
        <li>Portfolio review and assessment</li>
        <li>Regular skill evaluations</li>
        <li>Fair trade certification</li>
      </ul>
      
      <h4>Material Standards</h4>
      <ul>
        <li>Natural and eco-friendly materials</li>
        <li>Traditional techniques preserved</li>
        <li>Sustainable sourcing practices</li>
        <li>Quality testing of raw materials</li>
        <li>Authentic regional materials</li>
      </ul>
      
      <h3>Quality Control Checkpoints</h3>
      
      <h4>During Production</h4>
      <ul>
        <li>Regular artisan visits</li>
        <li>Work-in-progress inspections</li>
        <li>Technique verification</li>
        <li>Material quality checks</li>
      </ul>
      
      <h4>Pre-Shipping Inspection</h4>
      <ul>
        <li>Visual quality assessment</li>
        <li>Dimension and specification check</li>
        <li>Packaging quality review</li>
        <li>Documentation verification</li>
        <li>Final photography for records</li>
      </ul>
      
      <h3>Quality Standards</h3>
      
      <h4>Craftsmanship</h4>
      <ul>
        <li>Traditional techniques only</li>
        <li>Hand-finished details</li>
        <li>Consistent quality across batches</li>
        <li>Attention to cultural authenticity</li>
      </ul>
      
      <h4>Durability</h4>
      <ul>
        <li>Long-lasting materials</li>
        <li>Proper finishing techniques</li>
        <li>Stress testing where applicable</li>
        <li>Care instruction provision</li>
      </ul>
      
      <h3>Customer Satisfaction</h3>
      <ul>
        <li>Quality guarantee on all products</li>
        <li>Easy return for quality issues</li>
        <li>Customer feedback integration</li>
        <li>Continuous improvement process</li>
        <li>Artisan feedback and training</li>
      </ul>
      
      <h3>Reporting Quality Issues</h3>
      <p>If you receive a product with quality issues:</p>
      <ol>
        <li>Take photos of the issue</li>
        <li>Contact us within 48 hours</li>
        <li>Provide order number and details</li>
        <li>We'll arrange replacement or refund</li>
        <li>No return shipping cost for quality issues</li>
      </ol>
    `,
    views: 542,
    helpful: 28,
  },
];

export default function ProductsHelpPage() {
  return (
    <HelpArticleLayout
      title="Products & Quality"
      description="Information about our products, quality standards, and authenticity"
      icon={Package}
      breadcrumbs={[
        { label: "Help Center", href: "/help" },
        { label: "Products & Quality", href: "/help/products" },
      ]}
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Quick Stats */}
        <div className="lg:col-span-3">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
            <Card className="card-gradient border-orange-200">
              <CardContent className="p-4 text-center">
                <Package className="h-8 w-8 text-orange-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-orange-900">1000+</div>
                <div className="text-sm text-orange-700">Products</div>
              </CardContent>
            </Card>
            <Card className="card-gradient border-orange-200">
              <CardContent className="p-4 text-center">
                <Shield className="h-8 w-8 text-orange-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-orange-900">100%</div>
                <div className="text-sm text-orange-700">Authentic</div>
              </CardContent>
            </Card>
            <Card className="card-gradient border-orange-200">
              <CardContent className="p-4 text-center">
                <Award className="h-8 w-8 text-orange-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-orange-900">500+</div>
                <div className="text-sm text-orange-700">Artisans</div>
              </CardContent>
            </Card>
            <Card className="card-gradient border-orange-200">
              <CardContent className="p-4 text-center">
                <Heart className="h-8 w-8 text-orange-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-orange-900">4.9</div>
                <div className="text-sm text-orange-700">Rating</div>
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
