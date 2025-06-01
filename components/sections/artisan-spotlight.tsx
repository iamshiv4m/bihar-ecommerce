"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Star,
  Award,
  MapPin,
  Calendar,
  Users,
  Heart,
  ChevronLeft,
  ChevronRight,
  Play,
  ExternalLink,
} from "lucide-react";
import Link from "next/link";

const featuredArtisans = [
  {
    id: 1,
    name: "Sita Devi",
    location: "Madhubani, Bihar",
    specialty: "Madhubani Painting",
    experience: "25+ years",
    rating: 4.9,
    totalProducts: 45,
    studentsTrained: 120,
    awards: ["Padma Shri", "National Award"],
    image: "/placeholder.svg?height=300&width=300",
    coverImage: "/placeholder.svg?height=400&width=600",
    story:
      "Master artist Sita Devi has been preserving the ancient art of Madhubani painting for over two decades. Her intricate designs tell stories of mythology and nature, passed down through generations.",
    specialization: "Mythological themes, Natural motifs",
    achievements: [
      "Featured in National Geographic",
      "Exhibited in 15+ countries",
      "Trained over 120 students",
    ],
    videoUrl: "#",
    isVerified: true,
  },
  {
    id: 2,
    name: "Ramesh Kumar",
    location: "Bhagalpur, Bihar",
    specialty: "Silk Weaving",
    experience: "30+ years",
    rating: 4.8,
    totalProducts: 32,
    studentsTrained: 85,
    awards: ["State Award", "Craft Excellence"],
    image: "/placeholder.svg?height=300&width=300",
    coverImage: "/placeholder.svg?height=400&width=600",
    story:
      "Ramesh Kumar is a third-generation silk weaver from Bhagalpur, famous for creating the finest Tussar silk. His family has been weaving silk for over a century.",
    specialization: "Tussar silk, Traditional patterns",
    achievements: [
      "Supplier to luxury brands",
      "Export to 8 countries",
      "Family tradition of 100+ years",
    ],
    videoUrl: "#",
    isVerified: true,
  },
  {
    id: 3,
    name: "Meera Sharma",
    location: "Muzaffarpur, Bihar",
    specialty: "Silver Filigree",
    experience: "18+ years",
    rating: 4.9,
    totalProducts: 28,
    studentsTrained: 60,
    awards: ["Young Artisan Award"],
    image: "/placeholder.svg?height=300&width=300",
    coverImage: "/placeholder.svg?height=400&width=600",
    story:
      "Meera Sharma specializes in the delicate art of silver filigree, creating intricate jewelry pieces that showcase the finest craftsmanship of Bihar.",
    specialization: "Bridal jewelry, Decorative items",
    achievements: [
      "Youngest master craftsperson",
      "Modern design innovations",
      "Women empowerment advocate",
    ],
    videoUrl: "#",
    isVerified: true,
  },
];

export function ArtisanSpotlight() {
  const [currentArtisan, setCurrentArtisan] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const nextArtisan = () => {
    setCurrentArtisan((prev) => (prev + 1) % featuredArtisans.length);
  };

  const prevArtisan = () => {
    setCurrentArtisan(
      (prev) => (prev - 1 + featuredArtisans.length) % featuredArtisans.length
    );
  };

  const artisan = featuredArtisans[currentArtisan];

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-900/20 dark:to-amber-900/20">
      <div className="container">
        <div className="text-center space-y-4 mb-12">
          <Badge
            variant="secondary"
            className="bg-orange-100 text-orange-800 px-4 py-2"
          >
            Meet Our Artisans
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold">
            Master Craftspeople of Bihar
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover the talented artisans behind our authentic crafts. Each
            piece tells a story of tradition, skill, and cultural heritage
            passed down through generations.
          </p>
        </div>

        {/* Main Artisan Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Artisan Image & Video */}
          <div className="space-y-4">
            <Card className="overflow-hidden group">
              <CardContent className="p-0">
                <div className="relative aspect-[4/3]">
                  <img
                    src={artisan.coverImage || "/placeholder.svg"}
                    alt={`${artisan.name}'s craft work`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Button
                      size="lg"
                      className="rounded-full w-16 h-16 bg-white/90 hover:bg-white text-orange-600 hover:text-orange-700 shadow-xl"
                      onClick={() => setIsPlaying(!isPlaying)}
                    >
                      <Play className="w-6 h-6 ml-1" />
                    </Button>
                  </div>

                  {/* Artisan Badge */}
                  <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm rounded-lg p-3">
                    <div className="flex items-center gap-3">
                      <Avatar className="w-12 h-12 border-2 border-orange-200">
                        <AvatarImage
                          src={artisan.image || "/placeholder.svg"}
                          alt={artisan.name}
                        />
                        <AvatarFallback>
                          {artisan.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="font-semibold text-orange-900">
                            {artisan.name}
                          </h3>
                          {artisan.isVerified && (
                            <Badge
                              variant="secondary"
                              className="bg-blue-100 text-blue-800 text-xs"
                            >
                              Verified
                            </Badge>
                          )}
                        </div>
                        <p className="text-sm text-orange-700 flex items-center gap-1">
                          <MapPin className="w-3 h-3" />
                          {artisan.location}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Navigation */}
            <div className="flex items-center justify-between">
              <Button
                variant="outline"
                size="sm"
                onClick={prevArtisan}
                className="flex items-center gap-2"
              >
                <ChevronLeft className="w-4 h-4" />
                Previous
              </Button>

              <div className="flex gap-2">
                {featuredArtisans.map((_, index) => (
                  <button
                    key={index}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      index === currentArtisan
                        ? "bg-orange-500"
                        : "bg-orange-200"
                    }`}
                    onClick={() => setCurrentArtisan(index)}
                  />
                ))}
              </div>

              <Button
                variant="outline"
                size="sm"
                onClick={nextArtisan}
                className="flex items-center gap-2"
              >
                Next
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Artisan Details */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <h3 className="text-2xl font-bold text-orange-900">
                  {artisan.name}
                </h3>
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span className="text-sm font-medium">{artisan.rating}</span>
                </div>
              </div>

              <Badge
                variant="secondary"
                className="bg-orange-100 text-orange-800 mb-4"
              >
                {artisan.specialty}
              </Badge>

              <p className="text-muted-foreground leading-relaxed mb-6">
                {artisan.story}
              </p>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-white/80 p-4 rounded-lg border border-orange-100">
                  <div className="flex items-center gap-2 mb-2">
                    <Calendar className="w-4 h-4 text-orange-600" />
                    <span className="text-sm text-orange-700">Experience</span>
                  </div>
                  <span className="font-semibold text-orange-900">
                    {artisan.experience}
                  </span>
                </div>

                <div className="bg-white/80 p-4 rounded-lg border border-orange-100">
                  <div className="flex items-center gap-2 mb-2">
                    <Users className="w-4 h-4 text-orange-600" />
                    <span className="text-sm text-orange-700">
                      Students Trained
                    </span>
                  </div>
                  <span className="font-semibold text-orange-900">
                    {artisan.studentsTrained}+
                  </span>
                </div>
              </div>

              {/* Specialization */}
              <div className="mb-6">
                <h4 className="font-semibold text-orange-900 mb-2">
                  Specialization
                </h4>
                <p className="text-sm text-orange-700">
                  {artisan.specialization}
                </p>
              </div>

              {/* Awards */}
              <div className="mb-6">
                <h4 className="font-semibold text-orange-900 mb-3 flex items-center gap-2">
                  <Award className="w-4 h-4" />
                  Awards & Recognition
                </h4>
                <div className="flex flex-wrap gap-2">
                  {artisan.awards.map((award, index) => (
                    <Badge
                      key={index}
                      variant="outline"
                      className="border-orange-200 text-orange-700"
                    >
                      {award}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Achievements */}
              <div className="mb-6">
                <h4 className="font-semibold text-orange-900 mb-3">
                  Key Achievements
                </h4>
                <ul className="space-y-2">
                  {artisan.achievements.map((achievement, index) => (
                    <li
                      key={index}
                      className="flex items-center gap-2 text-sm text-orange-700"
                    >
                      <div className="w-1.5 h-1.5 bg-orange-400 rounded-full" />
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3">
                <Button className="flex-1 glow-orange">
                  View {artisan.name}'s Products
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="border-orange-200 hover:bg-orange-50"
                >
                  <Heart className="w-4 h-4" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="border-orange-200 hover:bg-orange-50"
                >
                  <ExternalLink className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* All Artisans Grid */}
        <div className="space-y-6">
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-2">
              All Featured Artisans
            </h3>
            <p className="text-muted-foreground">
              Meet the talented craftspeople preserving Bihar's heritage
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredArtisans.map((artist, index) => (
              <Card
                key={artist.id}
                className={`cursor-pointer transition-all duration-300 hover:shadow-lg ${
                  index === currentArtisan
                    ? "ring-2 ring-orange-200 shadow-lg"
                    : ""
                }`}
                onClick={() => setCurrentArtisan(index)}
              >
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <Avatar className="w-16 h-16 border-2 border-orange-200">
                      <AvatarImage
                        src={artist.image || "/placeholder.svg"}
                        alt={artist.name}
                      />
                      <AvatarFallback>
                        {artist.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="font-semibold text-orange-900">
                          {artist.name}
                        </h4>
                        {artist.isVerified && (
                          <Badge
                            variant="secondary"
                            className="bg-blue-100 text-blue-800 text-xs"
                          >
                            ✓
                          </Badge>
                        )}
                      </div>
                      <p className="text-sm text-orange-700">
                        {artist.specialty}
                      </p>
                      <div className="flex items-center gap-1 mt-1">
                        <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                        <span className="text-xs">{artist.rating}</span>
                        <span className="text-xs text-muted-foreground">
                          ({artist.totalProducts} products)
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3 text-sm">
                    <div className="bg-orange-50 p-2 rounded">
                      <span className="text-orange-600 block text-xs">
                        Experience
                      </span>
                      <span className="text-orange-900 font-medium">
                        {artist.experience}
                      </span>
                    </div>
                    <div className="bg-orange-50 p-2 rounded">
                      <span className="text-orange-600 block text-xs">
                        Students
                      </span>
                      <span className="text-orange-900 font-medium">
                        {artist.studentsTrained}+
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <Card className="bg-gradient-to-r from-orange-500 to-amber-500 text-white border-0">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Support Our Artisans</h3>
              <p className="mb-6 opacity-90">
                Every purchase directly supports these talented craftspeople and
                helps preserve Bihar's rich cultural heritage.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  asChild
                  variant="secondary"
                  size="lg"
                  className="bg-white text-orange-600 hover:bg-orange-50"
                >
                  <Link href="/products">Browse All Products</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="bg-white text-orange-600 hover:bg-orange-50"
                >
                  <Link href="/mission">Learn About Our Mission</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
