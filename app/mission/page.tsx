import type { Metadata } from "next";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Heart,
  Users,
  Globe,
  Leaf,
  Handshake,
  TrendingUp,
  MapPin,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Our Mission - Bihar Crafts",
  description:
    "Learn about Bihar Crafts' mission to preserve cultural heritage, empower artisans, and promote sustainable craftsmanship.",
};

const impactStats = [
  {
    icon: Users,
    value: "500+",
    label: "Artisans Supported",
    description: "Direct partnerships with skilled craftspeople",
  },
  {
    icon: MapPin,
    value: "50+",
    label: "Villages Reached",
    description: "Rural communities across Bihar state",
  },
  {
    icon: Globe,
    value: "25+",
    label: "Countries Served",
    description: "Global reach for authentic Bihar crafts",
  },
  {
    icon: TrendingUp,
    value: "300%",
    label: "Income Increase",
    description: "Average artisan income improvement",
  },
];

const missionPillars = [
  {
    icon: Heart,
    title: "Cultural Preservation",
    description:
      "We safeguard Bihar's rich artistic traditions by documenting techniques, supporting master artisans, and ensuring knowledge transfer to younger generations.",
    color: "bg-red-100 text-red-600",
  },
  {
    icon: Handshake,
    title: "Artisan Empowerment",
    description:
      "We provide fair wages, skill development programs, and direct market access to help artisans build sustainable livelihoods and support their families.",
    color: "bg-blue-100 text-blue-600",
  },
  {
    icon: Leaf,
    title: "Sustainable Practices",
    description:
      "We promote eco-friendly production methods, use natural materials, and support environmentally conscious crafting techniques.",
    color: "bg-green-100 text-green-600",
  },
  {
    icon: Globe,
    title: "Global Reach",
    description:
      "We connect Bihar's artisans with customers worldwide, creating a bridge between traditional craftsmanship and modern markets.",
    color: "bg-purple-100 text-purple-600",
  },
];

const achievements = [
  {
    year: "2020",
    title: "Bihar Crafts Founded",
    description: "Started with 50 artisans from 5 villages",
  },
  {
    year: "2021",
    title: "First International Export",
    description: "Reached customers in 10 countries",
  },
  {
    year: "2022",
    title: "Artisan Training Program",
    description: "Launched skill development initiatives",
  },
  {
    year: "2023",
    title: "500+ Artisan Network",
    description: "Expanded to 50+ villages across Bihar",
  },
  {
    year: "2024",
    title: "Digital Platform Launch",
    description: "Enhanced online presence and global reach",
  },
];

export default function MissionPage() {
  return (
    <div className="page-transition">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 dark:from-orange-900/20 dark:via-amber-900/20 dark:to-yellow-900/20 py-16 lg:py-24">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <Badge className="mb-4 bg-orange-100 text-orange-800">
              Our Mission
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
              Preserving Heritage, Empowering Lives
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We bridge the gap between traditional artisans and modern
              consumers, ensuring that the beautiful crafts of Bihar continue to
              thrive while providing sustainable livelihoods for craftspeople
              and their families.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <Button asChild size="lg" className="glow-orange">
                <Link href="/products">
                  Shop Our Products
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/about">Learn Our Story</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 lg:py-24">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold">
                Our Core Mission
              </h2>
              <p className="text-lg text-muted-foreground">
                Bihar Crafts exists to create a sustainable ecosystem where
                traditional artisans can thrive in the modern economy while
                preserving their ancestral skills and cultural heritage.
              </p>
              <p className="text-muted-foreground">
                Every purchase you make directly supports these talented
                craftspeople, helps preserve centuries-old techniques, and
                contributes to the economic development of rural Bihar
                communities.
              </p>
              <div className="bg-orange-50 dark:bg-orange-900/20 p-6 rounded-lg border border-orange-200">
                <h3 className="font-semibold text-orange-900 dark:text-orange-100 mb-2">
                  Our Promise
                </h3>
                <p className="text-orange-700 dark:text-orange-300">
                  "To ensure that every artisan we work with receives fair
                  compensation, skill development opportunities, and the respect
                  they deserve for their incredible craftsmanship."
                </p>
              </div>
            </div>
            <div className="aspect-square rounded-2xl overflow-hidden">
              <img
                src="/placeholder.svg?height=500&width=500"
                alt="Bihar artisans working together"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Impact Statistics */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold">Our Impact</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Real numbers that show the positive change we're creating in
              Bihar's artisan communities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {impactStats.map((stat, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-8 h-8 text-orange-600" />
                  </div>
                  <div className="text-3xl font-bold text-orange-600 mb-2">
                    {stat.value}
                  </div>
                  <h3 className="font-semibold mb-2">{stat.label}</h3>
                  <p className="text-sm text-muted-foreground">
                    {stat.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Pillars */}
      <section className="py-16 lg:py-24">
        <div className="container">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold">Our Four Pillars</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              These core principles guide everything we do at Bihar Crafts.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {missionPillars.map((pillar, index) => (
              <Card
                key={index}
                className="group hover:shadow-lg transition-all duration-300"
              >
                <CardContent className="p-8">
                  <div
                    className={`w-12 h-12 ${pillar.color} rounded-lg flex items-center justify-center mb-6`}
                  >
                    <pillar.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{pillar.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {pillar.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold">Our Journey</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From humble beginnings to a thriving network of artisans across
              Bihar.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex gap-6 group">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold group-hover:scale-110 transition-transform">
                      {achievement.year.slice(-2)}
                    </div>
                    {index < achievements.length - 1 && (
                      <div className="w-0.5 h-16 bg-orange-200 mt-4" />
                    )}
                  </div>
                  <Card className="flex-1 group-hover:shadow-md transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-2">
                        <Badge
                          variant="outline"
                          className="border-orange-200 text-orange-700"
                        >
                          {achievement.year}
                        </Badge>
                        <h3 className="font-semibold">{achievement.title}</h3>
                      </div>
                      <p className="text-muted-foreground">
                        {achievement.description}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 lg:py-24">
        <div className="container">
          <Card className="bg-gradient-to-r from-orange-500 to-amber-500 text-white border-0">
            <CardContent className="p-12 text-center">
              <div className="max-w-3xl mx-auto space-y-6">
                <h2 className="text-3xl lg:text-4xl font-bold">
                  Join Our Mission
                </h2>
                <p className="text-xl opacity-90">
                  Every purchase you make helps preserve Bihar's cultural
                  heritage and supports artisan families. Be part of something
                  meaningful.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
                  <Button
                    asChild
                    variant="secondary"
                    size="lg"
                    className="bg-white text-orange-600 hover:bg-orange-50"
                  >
                    <Link href="/products">Start Shopping</Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="bg-white text-orange-600 hover:bg-orange-50"
                  >
                    <Link href="/artists">Meet Our Artisans</Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
