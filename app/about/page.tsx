import type { Metadata } from "next";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "About Us - Bihar Crafts",
  description:
    "Learn about Bihar Crafts mission to preserve and promote the rich cultural heritage of Bihar through authentic handmade products.",
};

const teamMembers = [
  {
    name: "Priya Sharma",
    role: "Founder & CEO",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Passionate about preserving Bihar's cultural heritage through sustainable artisan partnerships.",
  },
  {
    name: "Rajesh Kumar",
    role: "Artisan Relations",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Connecting traditional craftspeople with modern markets while ensuring fair compensation.",
  },
  {
    name: "Anita Devi",
    role: "Quality Curator",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Expert in traditional Bihar crafts with 20+ years of experience in art curation.",
  },
];

export default function AboutPage() {
  return (
    <div className="page-transition">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-50 to-primary-100 dark:from-primary-900/20 dark:to-primary-800/20 py-16 lg:py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <Badge className="mb-4">Our Story</Badge>
            <h1 className="text-4xl lg:text-5xl font-bold">
              Preserving Bihar's Rich Cultural Heritage
            </h1>
            <p className="text-xl text-muted-foreground">
              We bridge the gap between traditional artisans and modern
              consumers, ensuring that the beautiful crafts of Bihar continue to
              thrive for generations to come.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 lg:py-24">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold">Our Mission</h2>
              <p className="text-muted-foreground text-lg">
                Bihar Crafts was born from a deep love for the traditional arts
                and crafts of Bihar. Our mission is to create a sustainable
                ecosystem where artisans can thrive while preserving their
                ancestral skills.
              </p>
              <p className="text-muted-foreground">
                We work directly with over 500 artisans across 50+ villages in
                Bihar, ensuring fair wages, skill development, and market
                access. Every purchase you make directly supports these talented
                craftspeople and their families.
              </p>
              <div className="grid grid-cols-2 gap-6 pt-6">
                <div>
                  <div className="text-2xl font-bold text-primary">500+</div>
                  <div className="text-sm text-muted-foreground">
                    Artisans Supported
                  </div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary">50+</div>
                  <div className="text-sm text-muted-foreground">
                    Villages Reached
                  </div>
                </div>
              </div>
            </div>
            <div className="aspect-square rounded-2xl overflow-hidden">
              <img
                src="/placeholder.svg?height=500&width=500"
                alt="Bihar artisans at work"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold">Our Values</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              These core values guide everything we do at Bihar Crafts.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-primary text-xl">🎨</span>
                </div>
                <h3 className="text-xl font-semibold">Authenticity</h3>
                <p className="text-muted-foreground">
                  Every product is genuinely handmade using traditional
                  techniques passed down through generations.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-primary text-xl">🤝</span>
                </div>
                <h3 className="text-xl font-semibold">Fair Trade</h3>
                <p className="text-muted-foreground">
                  We ensure fair compensation and sustainable livelihoods for
                  all our artisan partners.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-primary text-xl">🌱</span>
                </div>
                <h3 className="text-xl font-semibold">Sustainability</h3>
                <p className="text-muted-foreground">
                  We promote eco-friendly practices and sustainable production
                  methods in all our operations.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 lg:py-24">
        <div className="container">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold">Meet Our Team</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Passionate individuals dedicated to preserving and promoting
              Bihar's cultural heritage.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index}>
                <CardContent className="p-6 text-center space-y-4">
                  <div className="aspect-square rounded-full overflow-hidden mx-auto w-32 h-32">
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">{member.name}</h3>
                    <p className="text-primary font-medium">{member.role}</p>
                  </div>
                  <p className="text-muted-foreground text-sm">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
