import type { Metadata } from "next";
import { CategoriesGrid } from "@/components/categories/categories-grid";
import { CategoriesFilters } from "@/components/categories/categories-filters";

export const metadata: Metadata = {
  title: "Categories - Bihar Crafts",
  description:
    "Browse our collection of authentic Bihar crafts organized by categories. Find traditional art, textiles, pottery, jewelry and more.",
};

export default function CategoriesPage() {
  return (
    <div className="page-transition">
      <div className="bg-muted/30 py-12">
        <div className="container">
          <div className="text-center space-y-4">
            <h1 className="text-3xl lg:text-4xl font-bold">Categories</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore our diverse collection of authentic Bihar crafts, each
              category showcasing the rich cultural heritage of our artisans.
            </p>
          </div>
        </div>
      </div>

      <div className="container py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <aside className="lg:col-span-1">
            <CategoriesFilters />
          </aside>
          <main className="lg:col-span-3">
            <CategoriesGrid />
          </main>
        </div>
      </div>
    </div>
  );
}
