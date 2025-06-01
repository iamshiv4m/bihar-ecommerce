import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

const categories = [
  { name: "Traditional Art", count: 12 },
  { name: "Pottery", count: 8 },
  { name: "Textiles", count: 15 },
  { name: "Jewelry", count: 6 },
  { name: "Artisan Stories", count: 20 },
  { name: "Cultural Heritage", count: 10 },
];

const recentPosts = [
  {
    title: "The Art of Madhubani Painting",
    date: "Jan 15, 2024",
    slug: "art-of-madhubani-painting",
  },
  {
    title: "Pottery Masters of Bhagalpur",
    date: "Jan 10, 2024",
    slug: "pottery-masters-bhagalpur",
  },
  {
    title: "Silk Artisans of Bihar",
    date: "Jan 5, 2024",
    slug: "silk-artisans-bihar",
  },
];

export function BlogSidebar() {
  return (
    <div className="space-y-6">
      {/* Search */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Search Articles</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input placeholder="Search articles..." className="pl-10" />
          </div>
        </CardContent>
      </Card>

      {/* Categories */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Categories</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          {categories.map((category) => (
            <div
              key={category.name}
              className="flex items-center justify-between"
            >
              <span className="text-sm hover:text-primary cursor-pointer">
                {category.name}
              </span>
              <Badge variant="secondary" className="text-xs">
                {category.count}
              </Badge>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Recent Posts */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Recent Posts</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {recentPosts.map((post, index) => (
            <div key={index} className="space-y-1">
              <h4 className="text-sm font-medium hover:text-primary cursor-pointer line-clamp-2">
                {post.title}
              </h4>
              <p className="text-xs text-muted-foreground">{post.date}</p>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Newsletter */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Newsletter</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-muted-foreground">
            Get the latest artisan stories and craft updates delivered to your
            inbox.
          </p>
          <div className="space-y-2">
            <Input placeholder="Your email" type="email" />
            <Button className="w-full" size="sm">
              Subscribe
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
