import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, User, Calendar } from "lucide-react";
import Link from "next/link";

const reviews = [
  {
    id: 1,
    user: "Priya Sharma",
    rating: 5,
    date: "2024-01-15",
    comment:
      "Absolutely beautiful painting! The colors are vibrant and the craftsmanship is exceptional. Highly recommended!",
    verified: true,
  },
  {
    id: 2,
    user: "Rajesh Kumar",
    rating: 4,
    date: "2024-01-10",
    comment:
      "Great quality artwork. The traditional motifs are beautifully executed. Fast delivery too!",
    verified: true,
  },
  {
    id: 3,
    user: "Anita Devi",
    rating: 5,
    date: "2024-01-05",
    comment:
      "This painting is a masterpiece. You can see the skill and passion of the artist in every stroke.",
    verified: false,
  },
];

export function ProductTabs() {
  return (
    <Tabs defaultValue="description" className="space-y-6">
      <TabsList className="grid w-full grid-cols-4">
        <TabsTrigger value="description">Description</TabsTrigger>
        <TabsTrigger value="artist">Artist Info</TabsTrigger>
        <TabsTrigger value="reviews">Reviews (24)</TabsTrigger>
        <TabsTrigger value="shipping">Shipping</TabsTrigger>
      </TabsList>

      <TabsContent value="description">
        <Card>
          <CardContent className="p-6 space-y-4">
            <h3 className="text-xl font-semibold">Product Description</h3>
            <div className="prose prose-gray max-w-none">
              <p>
                This exquisite Traditional Madhubani Canvas showcases the
                timeless beauty of Mithila art, handpainted by master artist
                Sita Devi from Jitwarpur village. The painting features
                intricate geometric patterns and vibrant natural colors that are
                characteristic of authentic Madhubani art.
              </p>
              <p>
                The artwork depicts traditional motifs including peacocks, fish,
                and floral patterns, each carrying deep cultural significance.
                The peacock symbolizes love and fertility, while the fish
                represents prosperity and good fortune in Mithila culture.
              </p>
              <h4>Key Features:</h4>
              <ul>
                <li>100% handpainted using traditional techniques</li>
                <li>Natural pigments and eco-friendly colors</li>
                <li>Premium quality canvas material</li>
                <li>Ready to hang with included mounting hardware</li>
                <li>Certificate of authenticity included</li>
                <li>Supports local artisan communities</li>
              </ul>
              <h4>Care Instructions:</h4>
              <ul>
                <li>Keep away from direct sunlight to preserve colors</li>
                <li>Clean gently with a soft, dry cloth</li>
                <li>Avoid exposure to moisture and humidity</li>
                <li>Frame under glass for long-term preservation</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="artist">
        <Card>
          <CardContent className="p-6 space-y-6">
            <div className="flex items-start gap-6">
              <div className="w-24 h-24 rounded-full overflow-hidden flex-shrink-0">
                <img
                  src="/placeholder.svg?height=100&width=100"
                  alt="Sita Devi"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="space-y-3">
                <div>
                  <h3 className="text-xl font-semibold">Sita Devi</h3>
                  <p className="text-primary font-medium">
                    Master Madhubani Artist
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Jitwarpur, Madhubani District, Bihar
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant="secondary">25+ Years Experience</Badge>
                  <Badge className="bg-yellow-100 text-yellow-800">
                    Padma Shri Awardee
                  </Badge>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <p>
                Sita Devi is a renowned Madhubani artist who has dedicated her
                life to preserving and promoting the traditional art form of
                Mithila. Born into a family of painters, she learned the craft
                from her mother and has been creating beautiful artworks for
                over 25 years.
              </p>
              <p>
                Her work has been exhibited in galleries across India and
                internationally. In 2020, she was honored with the prestigious
                Padma Shri award for her exceptional contribution to Indian art
                and culture.
              </p>
              <Link href="/artists/sita-devi" className="inline-block">
                <Badge
                  variant="outline"
                  className="cursor-pointer hover:bg-primary hover:text-primary-foreground"
                >
                  View Artist Profile →
                </Badge>
              </Link>
            </div>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="reviews">
        <div className="space-y-6">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold">Customer Reviews</h3>
                <div className="flex items-center gap-2">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-primary text-primary"
                      />
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground">
                    4.8 out of 5 (24 reviews)
                  </span>
                </div>
              </div>

              <div className="space-y-6">
                {reviews.map((review) => (
                  <div
                    key={review.id}
                    className="border-b pb-6 last:border-b-0"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center">
                          <User className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="font-medium">{review.user}</span>
                            {review.verified && (
                              <Badge variant="secondary" className="text-xs">
                                Verified Purchase
                              </Badge>
                            )}
                          </div>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Calendar className="h-3 w-3" />
                            <span>
                              {new Date(review.date).toLocaleDateString()}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${
                              i < review.rating
                                ? "fill-primary text-primary"
                                : "text-muted-foreground"
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                    <p className="text-sm">{review.comment}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </TabsContent>

      <TabsContent value="shipping">
        <Card>
          <CardContent className="p-6 space-y-4">
            <h3 className="text-xl font-semibold">Shipping Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium mb-2">Delivery Options</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>
                      • Standard Delivery: 5-7 business days (Free on orders
                      above ₹999)
                    </li>
                    <li>• Express Delivery: 2-3 business days (₹199)</li>
                    <li>
                      • Same Day Delivery: Available in select cities (₹299)
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Packaging</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Eco-friendly packaging materials</li>
                    <li>• Protective bubble wrap for artwork</li>
                    <li>• Moisture-resistant covering</li>
                    <li>• Fragile handling instructions included</li>
                  </ul>
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium mb-2">Return Policy</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• 7-day return policy</li>
                    <li>• Free returns for damaged items</li>
                    <li>• Original packaging required</li>
                    <li>• Refund processed within 5-7 business days</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-2">International Shipping</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Available to 50+ countries</li>
                    <li>• 10-15 business days delivery</li>
                    <li>• Customs duties may apply</li>
                    <li>• Tracking provided for all orders</li>
                  </ul>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  );
}
