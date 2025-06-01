import type { Metadata } from "next";
import { ProductGrid } from "@/components/products/product-grid";
import { ProductFilters } from "@/components/products/product-filters";
import { BreadcrumbNav } from "@/components/ui/breadcrumb";

export const metadata: Metadata = {
  title: "All Products - Bihar Crafts",
  description:
    "Browse our complete collection of authentic handmade crafts from Bihar.",
};

export default function ProductsPage() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Products", href: "/products" },
  ];

  return (
    <div className="page-transition min-h-screen bg-background">
      <div className="bg-muted/30 py-12">
        <div className="container">
          <BreadcrumbNav items={breadcrumbs} />
          <div className="text-center space-y-4 mt-6">
            <h1 className="text-3xl lg:text-4xl font-bold">All Products</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Discover our complete collection of authentic handmade crafts from
              Bihar, each piece crafted with love and tradition.
            </p>
          </div>
        </div>
      </div>

      <div className="container py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <aside className="lg:col-span-1">
            <ProductFilters />
          </aside>
          <main className="lg:col-span-3">
            <ProductGrid />
          </main>
        </div>
      </div>
    </div>
  );
}
