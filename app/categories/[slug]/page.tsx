import type { Metadata } from "next";
import { ProductGrid } from "@/components/products/product-grid";
import { ProductFilters } from "@/components/products/product-filters";
import { BreadcrumbNav } from "@/components/ui/breadcrumb";

export const metadata: Metadata = {
  title: "Madhubani Paintings - Bihar Crafts",
  description:
    "Discover authentic Madhubani paintings handcrafted by skilled artisans from Mithila region of Bihar.",
};

export default function CategoryPage() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Categories", href: "/categories" },
    { label: "Madhubani Paintings", href: "/categories/madhubani-paintings" },
  ];

  return (
    <div className="page-transition min-h-screen bg-background">
      <div className="bg-muted/30 py-12">
        <div className="container">
          <BreadcrumbNav items={breadcrumbs} />
          <div className="text-center space-y-4 mt-6">
            <h1 className="text-3xl lg:text-4xl font-bold">
              Madhubani Paintings
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Discover authentic Madhubani paintings handcrafted by skilled
              artisans from the Mithila region of Bihar. Each piece tells a
              story rooted in ancient traditions.
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
