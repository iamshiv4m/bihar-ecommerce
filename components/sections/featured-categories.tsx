import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";

const categories = [
  {
    id: 1,
    name: "Madhubani Paintings",
    image: "/placeholder.svg?height=300&width=300",
    count: 45,
    href: "/categories/madhubani-paintings",
  },
  {
    id: 2,
    name: "Handwoven Textiles",
    image: "/placeholder.svg?height=300&width=300",
    count: 32,
    href: "/categories/textiles",
  },
  {
    id: 3,
    name: "Pottery & Ceramics",
    image: "/placeholder.svg?height=300&width=300",
    count: 28,
    href: "/categories/pottery",
  },
  {
    id: 4,
    name: "Jewelry & Accessories",
    image: "/placeholder.svg?height=300&width=300",
    count: 56,
    href: "/categories/jewelry",
  },
  {
    id: 5,
    name: "Home Decor",
    image: "/placeholder.svg?height=300&width=300",
    count: 41,
    href: "/categories/home-decor",
  },
  {
    id: 6,
    name: "Handicrafts",
    image: "/placeholder.svg?height=300&width=300",
    count: 38,
    href: "/categories/handicrafts",
  },
];

export function FeaturedCategories() {
  return (
    <section className="py-16 lg:py-24">
      <div className="container">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold">Shop by Category</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore our curated collection of authentic Bihar crafts, each
            category representing centuries of traditional artistry and cultural
            heritage.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <Link key={category.id} href={category.href}>
              <Card className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
                <CardContent className="p-0">
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={category.image || "/placeholder.svg"}
                      alt={category.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-semibold text-lg mb-1">
                      {category.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {category.count} products
                    </p>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
