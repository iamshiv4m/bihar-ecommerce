import type { Metadata } from "next";
import { BlogGrid } from "@/components/blog/blog-grid";
import { BlogSidebar } from "@/components/blog/blog-sidebar";

export const metadata: Metadata = {
  title: "Blog - Bihar Crafts",
  description:
    "Read stories about our artisans, traditional crafts, and the cultural heritage of Bihar.",
};

export default function BlogPage() {
  return (
    <div className="page-transition min-h-screen bg-background">
      <div className="bg-muted/30 py-12">
        <div className="container">
          <div className="text-center space-y-4">
            <h1 className="text-3xl lg:text-4xl font-bold">
              Artisan Stories & Craft Heritage
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Discover the rich traditions, inspiring stories, and cultural
              heritage behind every handcrafted piece from Bihar.
            </p>
          </div>
        </div>
      </div>

      <div className="container py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <main className="lg:col-span-3">
            <BlogGrid />
          </main>
          <aside className="lg:col-span-1">
            <BlogSidebar />
          </aside>
        </div>
      </div>
    </div>
  );
}
