import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-r from-primary-50 to-primary-100 dark:from-primary-900/20 dark:to-primary-800/20">
      <div className="container py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold tracking-tight">
                Discover the
                <span className="text-primary block">Art of Bihar</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-lg">
                Authentic handmade crafts, traditional art, and cultural
                treasures directly from the artisans of Bihar. Every purchase
                supports local communities.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild>
                <Link href="/categories">
                  Shop Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/about">Learn Our Story</Link>
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground">Artisans</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">1000+</div>
                <div className="text-sm text-muted-foreground">Products</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">50+</div>
                <div className="text-sm text-muted-foreground">Villages</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-primary-200 to-primary-300">
              <img
                src="/placeholder.svg?height=600&width=600"
                alt="Bihar traditional crafts"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white dark:bg-card p-6 rounded-xl shadow-lg">
              <div className="text-sm text-muted-foreground">
                Featured Craft
              </div>
              <div className="font-semibold">Madhubani Painting</div>
              <div className="text-primary font-bold">₹2,499</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
