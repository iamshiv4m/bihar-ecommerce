import type { Metadata } from "next";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Calendar, User, Clock, ArrowLeft, Share2 } from "lucide-react";

export const metadata: Metadata = {
  title:
    "The Art of Madhubani: A Journey Through Mithila's Sacred Paintings - Bihar Crafts",
  description:
    "Explore the ancient tradition of Madhubani painting and meet the women artists who keep this sacred art form alive.",
};

export default function BlogArticlePage() {
  return (
    <div className="page-transition min-h-screen bg-background">
      <div className="container py-8">
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <Button variant="ghost" asChild className="mb-6">
            <Link href="/blog">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Blog
            </Link>
          </Button>

          {/* Article Header */}
          <div className="space-y-6 mb-8">
            <div className="space-y-4">
              <Badge>Traditional Art</Badge>
              <h1 className="text-3xl lg:text-4xl font-bold">
                The Art of Madhubani: A Journey Through Mithila's Sacred
                Paintings
              </h1>
              <p className="text-xl text-muted-foreground">
                Explore the ancient tradition of Madhubani painting and meet the
                women artists who keep this sacred art form alive.
              </p>
            </div>

            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span>Priya Sharma</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>January 15, 2024</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>5 min read</span>
              </div>
              <Button variant="ghost" size="sm">
                <Share2 className="h-4 w-4 mr-2" />
                Share
              </Button>
            </div>
          </div>

          {/* Featured Image */}
          <div className="aspect-[16/9] rounded-lg overflow-hidden mb-8">
            <img
              src="/placeholder.svg?height=600&width=1000"
              alt="Madhubani painting"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none">
            <p>
              In the heart of Bihar's Mithila region, an ancient art form
              continues to flourish, passed down through generations of women
              artists. Madhubani painting, also known as Mithila art, is more
              than just decoration—it's a sacred tradition that connects the
              present with the divine.
            </p>

            <h2>Origins and Sacred Significance</h2>
            <p>
              The origins of Madhubani painting can be traced back to the time
              of the Ramayana, when King Janaka commissioned artists to create
              paintings for his daughter Sita's wedding to Lord Rama. What began
              as a royal commission has evolved into a vibrant folk art
              tradition that adorns the walls of homes across the Mithila
              region.
            </p>

            <p>
              These paintings are not merely decorative; they serve as a form of
              prayer and meditation. Each motif carries deep spiritual
              significance, from the lotus representing purity to the fish
              symbolizing fertility and prosperity.
            </p>

            <h2>The Artists Behind the Art</h2>
            <p>
              Today, Madhubani painting is primarily practiced by women, who
              learn the techniques from their mothers and grandmothers. Artists
              like Sita Devi from Jitwarpur village have dedicated their lives
              to preserving and promoting this ancient art form.
            </p>

            <blockquote>
              "When I paint, I feel connected to my ancestors. Each stroke
              carries the wisdom of generations before me." - Sita Devi, Master
              Artist
            </blockquote>

            <h2>Techniques and Materials</h2>
            <p>
              Traditional Madhubani paintings are created using natural pigments
              derived from plants and minerals. The artists use bamboo sticks,
              brushes made from cotton wrapped around bamboo, and even their
              fingers to create intricate patterns and designs.
            </p>

            <p>
              The paintings typically feature bold geometric patterns, floral
              motifs, and scenes from Hindu mythology. The use of bright colors
              like red, yellow, blue, and green creates a vibrant visual impact
              that has made Madhubani art popular worldwide.
            </p>

            <h2>Preserving Tradition in Modern Times</h2>
            <p>
              While staying true to traditional techniques, contemporary
              Madhubani artists have adapted their art for modern markets. They
              now create paintings on canvas, paper, and fabric, making this
              ancient art form accessible to art lovers around the world.
            </p>

            <p>
              Organizations like Bihar Crafts work directly with these artists,
              ensuring they receive fair compensation for their work while
              helping preserve this invaluable cultural heritage for future
              generations.
            </p>
          </div>

          <Separator className="my-8" />

          {/* Related Articles */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">Related Articles</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: "Pottery Masters of Bhagalpur",
                  excerpt:
                    "Discover the skilled potters who create beautiful terracotta art.",
                  image: "/placeholder.svg?height=200&width=300",
                  slug: "pottery-masters-bhagalpur",
                },
                {
                  title: "Silk Artisans of Bihar",
                  excerpt:
                    "Meet the master weavers creating exquisite silk fabrics.",
                  image: "/placeholder.svg?height=200&width=300",
                  slug: "silk-artisans-bihar",
                },
              ].map((article, index) => (
                <Card
                  key={index}
                  className="group hover:shadow-lg transition-all duration-300"
                >
                  <CardContent className="p-0">
                    <div className="aspect-[3/2] overflow-hidden">
                      <img
                        src={article.image || "/placeholder.svg"}
                        alt={article.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-4 space-y-2">
                      <Link href={`/blog/${article.slug}`}>
                        <h4 className="font-semibold hover:text-primary transition-colors">
                          {article.title}
                        </h4>
                      </Link>
                      <p className="text-sm text-muted-foreground">
                        {article.excerpt}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
