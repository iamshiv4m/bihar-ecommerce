import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";

export function Newsletter() {
  return (
    <section className="py-16 lg:py-24 bg-muted/30">
      <div className="container">
        <Card className="max-w-2xl mx-auto">
          <CardContent className="p-8 lg:p-12 text-center">
            <div className="space-y-6">
              <div className="space-y-2">
                <h3 className="text-2xl lg:text-3xl font-bold">
                  Stay Connected with Bihar Crafts
                </h3>
                <p className="text-muted-foreground">
                  Get the latest updates on new arrivals, artisan stories, and
                  exclusive offers delivered to your inbox.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1"
                />
                <Button>Subscribe</Button>
              </div>

              <p className="text-xs text-muted-foreground">
                By subscribing, you agree to our Privacy Policy and Terms of
                Service.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
