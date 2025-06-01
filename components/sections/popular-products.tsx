import { ProductCard } from "@/components/ui/product-card";

const products = [
  {
    id: 1,
    name: "Traditional Madhubani Canvas",
    price: 2499,
    originalPrice: 3499,
    image: "/placeholder.svg?height=400&width=400",
    rating: 4.8,
    reviews: 24,
    isNew: true,
    category: "Paintings",
  },
  {
    id: 2,
    name: "Handwoven Silk Saree",
    price: 4999,
    originalPrice: 6999,
    image: "/placeholder.svg?height=400&width=400",
    rating: 4.9,
    reviews: 18,
    isNew: false,
    category: "Textiles",
  },
  {
    id: 3,
    name: "Terracotta Decorative Pot",
    price: 899,
    originalPrice: 1299,
    image: "/placeholder.svg?height=400&width=400",
    rating: 4.6,
    reviews: 32,
    isNew: false,
    category: "Pottery",
  },
  {
    id: 4,
    name: "Silver Filigree Earrings",
    price: 1899,
    originalPrice: 2499,
    image: "/placeholder.svg?height=400&width=400",
    rating: 4.7,
    reviews: 15,
    isNew: true,
    category: "Jewelry",
  },
];

export function PopularProducts() {
  return (
    <section className="py-16 lg:py-24 bg-muted/30">
      <div className="container">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold">Popular Products</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover our most loved pieces, handpicked by customers and crafted
            by skilled artisans from across Bihar.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
