"use client";

import { useState } from "react";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SkeletonBlogCard } from "@/components/ui/skeleton-card";
import { Calendar, User, ArrowRight } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title: "The Art of Madhubani: A Journey Through Mithila's Sacred Paintings",
    excerpt:
      "Explore the ancient tradition of Madhubani painting and meet the women artists who keep this sacred art form alive.",
    image: "/placeholder.svg?height=300&width=500",
    category: "Traditional Art",
    author: "Priya Sharma",
    date: "2024-01-15",
    slug: "art-of-madhubani-mithila-paintings",
    readTime: "5 min read",
  },
  {
    id: 2,
    title: "From Clay to Art: The Pottery Masters of Bhagalpur",
    excerpt:
      "Discover how skilled potters in Bhagalpur transform simple clay into beautiful terracotta masterpieces.",
    image: "/placeholder.svg?height=300&width=500",
    category: "Pottery",
    author: "Rajesh Kumar",
    date: "2024-01-10",
    slug: "pottery-masters-bhagalpur",
    readTime: "4 min read",
  },
  {
    id: 3,
    title: "Weaving Dreams: The Silk Artisans of Bhagalpur",
    excerpt:
      "Meet the master weavers who create exquisite silk fabrics using techniques passed down through generations.",
    image: "/placeholder.svg?height=300&width=500",
    category: "Textiles",
    author: "Anita Devi",
    date: "2024-01-05",
    slug: "silk-artisans-bhagalpur",
    readTime: "6 min read",
  },
  {
    id: 4,
    title: "Silver Filigree: The Delicate Art of Muzaffarpur",
    excerpt:
      "Learn about the intricate silver filigree work that makes Muzaffarpur jewelry unique and sought after.",
    image: "/placeholder.svg?height=300&width=500",
    category: "Jewelry",
    author: "Sanjay Singh",
    date: "2024-01-01",
    slug: "silver-filigree-muzaffarpur",
    readTime: "3 min read",
  },
];

export function BlogGrid() {
  const [loading, setLoading] = useState(false);

  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[...Array(6)].map((_, i) => (
          <SkeletonBlogCard key={i} />
        ))}
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">Latest Stories</h2>
        <p className="text-sm text-muted-foreground">
          {blogPosts.length} articles
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {blogPosts.map((post) => (
          <Card
            key={post.id}
            className="group hover:shadow-lg transition-all duration-300 overflow-hidden"
          >
            <CardContent className="p-0">
              <div className="aspect-[16/9] overflow-hidden">
                <img
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6 space-y-4">
                <div className="flex items-center gap-2">
                  <Badge variant="secondary">{post.category}</Badge>
                  <span className="text-xs text-muted-foreground">
                    {post.readTime}
                  </span>
                </div>

                <div className="space-y-2">
                  <Link href={`/blog/${post.slug}`}>
                    <h3 className="font-semibold text-lg hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                  </Link>
                  <p className="text-muted-foreground text-sm line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-2">
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <User className="h-3 w-3" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm" asChild>
                    <Link href={`/blog/${post.slug}`}>
                      Read More
                      <ArrowRight className="h-3 w-3 ml-1" />
                    </Link>
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
