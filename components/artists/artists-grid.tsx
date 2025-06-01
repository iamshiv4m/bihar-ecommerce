"use client";

import { useState } from "react";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SkeletonCard } from "@/components/ui/skeleton-card";
import { MapPin, Award, Calendar } from "lucide-react";

const artists = [
  {
    id: 1,
    name: "Sita Devi",
    specialization: "Madhubani Painting",
    location: "Jitwarpur, Madhubani",
    experience: "25+ years",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Master artist known for her intricate Madhubani paintings featuring traditional motifs and vibrant colors.",
    awards: ["Padma Shri", "National Award"],
    productsCount: 45,
    slug: "sita-devi",
    featured: true,
  },
  {
    id: 2,
    name: "Rajesh Kumar",
    specialization: "Pottery & Ceramics",
    location: "Bhagalpur",
    experience: "20+ years",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Skilled potter creating beautiful terracotta and ceramic pieces using traditional techniques.",
    awards: ["State Award"],
    productsCount: 32,
    slug: "rajesh-kumar",
    featured: false,
  },
  {
    id: 3,
    name: "Ganga Devi",
    specialization: "Madhubani Painting",
    location: "Ranti, Madhubani",
    experience: "30+ years",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Renowned for her contemporary interpretations of traditional Madhubani art forms.",
    awards: ["Padma Shri", "Bihar Ratna"],
    productsCount: 38,
    slug: "ganga-devi",
    featured: true,
  },
  {
    id: 4,
    name: "Manoj Singh",
    specialization: "Silver Filigree",
    location: "Muzaffarpur",
    experience: "18+ years",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Expert in delicate silver filigree work, creating intricate jewelry and decorative items.",
    awards: ["Craft Excellence Award"],
    productsCount: 28,
    slug: "manoj-singh",
    featured: false,
  },
  {
    id: 5,
    name: "Anita Kumari",
    specialization: "Handloom Weaving",
    location: "Bhagalpur",
    experience: "15+ years",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Master weaver specializing in silk and cotton textiles with traditional Bihar patterns.",
    awards: ["Weaving Excellence Award"],
    productsCount: 41,
    slug: "anita-kumari",
    featured: false,
  },
  {
    id: 6,
    name: "Santosh Kumar Das",
    specialization: "Madhubani Painting",
    location: "Simri, Madhubani",
    experience: "22+ years",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Known for his geometric Madhubani patterns and innovative use of natural pigments.",
    awards: ["National Craft Award"],
    productsCount: 35,
    slug: "santosh-kumar-das",
    featured: true,
  },
];

export function ArtistsGrid() {
  const [loading, setLoading] = useState(false);

  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(6)].map((_, i) => (
          <SkeletonCard key={i} />
        ))}
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">Our Talented Artisans</h2>
        <p className="text-sm text-muted-foreground">
          {artists.length} artisans
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {artists.map((artist) => (
          <Card
            key={artist.id}
            className="group hover:shadow-lg transition-all duration-300 overflow-hidden"
          >
            <CardContent className="p-0">
              <div className="relative">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={artist.image || "/placeholder.svg"}
                    alt={artist.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                {artist.featured && (
                  <Badge className="absolute top-3 left-3 bg-primary text-primary-foreground">
                    Featured
                  </Badge>
                )}
                {artist.awards.length > 0 && (
                  <div className="absolute top-3 right-3">
                    <Award className="h-5 w-5 text-yellow-500" />
                  </div>
                )}
              </div>

              <div className="p-6 space-y-4">
                <div className="space-y-2">
                  <Link href={`/artists/${artist.slug}`}>
                    <h3 className="font-semibold text-lg hover:text-primary transition-colors">
                      {artist.name}
                    </h3>
                  </Link>
                  <p className="text-primary font-medium">
                    {artist.specialization}
                  </p>
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {artist.bio}
                  </p>
                </div>

                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    <span>{artist.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span>{artist.experience} experience</span>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-2">
                  <span className="text-sm text-muted-foreground">
                    {artist.productsCount} products
                  </span>
                  <Button variant="outline" size="sm" asChild>
                    <Link href={`/artists/${artist.slug}`}>View Profile</Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
