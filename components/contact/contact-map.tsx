"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin } from "lucide-react";

export function ContactMap() {
  return (
    <section className="py-16 bg-gradient-to-br from-orange-50 to-orange-100">
      <div className="container">
        <div className="text-center space-y-4 mb-8">
          <h2 className="text-2xl lg:text-3xl font-bold text-orange-900">
            Find Us
          </h2>
          <p className="text-orange-700">
            Visit our office in the heart of Patna, Bihar
          </p>
        </div>

        <Card className="overflow-hidden card-gradient border-orange-200 glow-orange-lg">
          <CardContent className="p-0">
            <div className="relative aspect-[16/9] bg-gradient-to-br from-orange-200 to-orange-300">
              {/* Placeholder for map */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <MapPin className="h-16 w-16 text-orange-600 mx-auto" />
                  <div>
                    <h3 className="text-xl font-semibold text-orange-900">
                      Bihar Crafts Office
                    </h3>
                    <p className="text-orange-700">
                      123 Gandhi Maidan, Patna, Bihar 800001
                    </p>
                  </div>
                  <Badge className="bg-orange-600 text-white">Open Now</Badge>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
