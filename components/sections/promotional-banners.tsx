import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export function PromotionalBanners() {
  return (
    <section className="py-16 lg:py-24">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Main Banner */}
          <Card className="overflow-hidden bg-gradient-to-r from-primary-500 to-primary-600 text-white">
            <CardContent className="p-8 lg:p-12">
              <div className="space-y-4">
                <h3 className="text-2xl lg:text-3xl font-bold">
                  Festival Special
                </h3>
                <p className="text-primary-100">
                  Celebrate Chhath Puja with authentic Bihar crafts. Get up to
                  40% off on traditional items.
                </p>
                <Button variant="secondary" asChild>
                  <Link href="/categories?sale=festival">
                    Shop Festival Collection
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Secondary Banners */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Card className="overflow-hidden">
              <CardContent className="p-6">
                <div className="space-y-3">
                  <h4 className="text-lg font-semibold">Free Shipping</h4>
                  <p className="text-sm text-muted-foreground">
                    On orders above ₹999
                  </p>
                  <Button variant="outline" size="sm" asChild>
                    <Link href="/categories">Shop Now</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <CardContent className="p-6">
                <div className="space-y-3">
                  <h4 className="text-lg font-semibold">Artisan Stories</h4>
                  <p className="text-sm text-muted-foreground">
                    Meet the makers behind each craft
                  </p>
                  <Button variant="outline" size="sm" asChild>
                    <Link href="/blog">Read Stories</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
