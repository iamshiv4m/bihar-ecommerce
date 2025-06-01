import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const categories = [
  {
    id: 1,
    name: "Madhubani Paintings",
    description: "Traditional folk art from Mithila region",
    image: "/placeholder.svg?height=300&width=400",
    productCount: 45,
    featured: true,
    href: "/products?category=madhubani-paintings",
  },
  {
    id: 2,
    name: "Handwoven Textiles",
    description: "Silk and cotton fabrics woven by hand",
    image: "/placeholder.svg?height=300&width=400",
    productCount: 32,
    featured: false,
    href: "/products?category=textiles",
  },
  {
    id: 3,
    name: "Pottery & Ceramics",
    description: "Traditional clay work and terracotta",
    image: "/placeholder.svg?height=300&width=400",
    productCount: 28,
    featured: true,
    href: "/products?category=pottery",
  },
  {
    id: 4,
    name: "Jewelry & Accessories",
    description: "Silver filigree and traditional ornaments",
    image: "/placeholder.svg?height=300&width=400",
    productCount: 56,
    featured: false,
    href: "/products?category=jewelry",
  },
  {
    id: 5,
    name: "Home Decor",
    description: "Decorative items for your living space",
    image: "/placeholder.svg?height=300&width=400",
    productCount: 41,
    featured: false,
    href: "/products?category=home-decor",
  },
  {
    id: 6,
    name: "Handicrafts",
    description: "Miscellaneous handmade crafts",
    image: "/placeholder.svg?height=300&width=400",
    productCount: 38,
    featured: true,
    href: "/products?category=handicrafts",
  },
];

export function CategoriesGrid() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">All Categories</h2>
        <p className="text-sm text-muted-foreground">
          {categories.length} categories found
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {categories.map((category) => (
          <Link key={category.id} href={category.href}>
            <Card className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
              <CardContent className="p-0">
                <div className="relative">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={category.image || "/placeholder.svg"}
                      alt={category.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  {category.featured && (
                    <Badge className="absolute top-3 left-3 bg-primary text-primary-foreground">
                      Featured
                    </Badge>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-lg mb-2">
                    {category.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    {category.description}
                  </p>
                  <p className="text-sm font-medium text-primary">
                    {category.productCount} products
                  </p>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
