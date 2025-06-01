import type { Metadata } from "next";
import { ArtistsGrid } from "@/components/artists/artists-grid";
import { ArtistsFilters } from "@/components/artists/artists-filters";

export const metadata: Metadata = {
  title: "Our Artisans - Bihar Crafts",
  description:
    "Meet the talented artisans behind our beautiful handcrafted products from Bihar.",
};

export default function ArtistsPage() {
  return (
    <div className="page-transition min-h-screen bg-background">
      <div className="bg-muted/30 py-12">
        <div className="container">
          <div className="text-center space-y-4">
            <h1 className="text-3xl lg:text-4xl font-bold">
              Meet Our Artisans
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Discover the talented craftspeople who bring Bihar&apos;s rich
              cultural heritage to life through their exceptional skills and
              dedication to traditional arts.
            </p>
          </div>
        </div>
      </div>

      <div className="container py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <aside className="lg:col-span-1">
            <ArtistsFilters />
          </aside>
          <main className="lg:col-span-3">
            <ArtistsGrid />
          </main>
        </div>
      </div>
    </div>
  );
}
