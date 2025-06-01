"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Info } from "lucide-react";

const artRegions = [
  {
    id: 1,
    name: "Madhubani",
    artForm: "Madhubani Painting",
    description:
      "Traditional folk art featuring geometric patterns and mythological themes",
    position: { x: 65, y: 25 },
    color: "bg-red-500",
    products: 45,
    artists: 12,
  },
  {
    id: 2,
    name: "Bhagalpur",
    artForm: "Silk Weaving & Pottery",
    description: "Famous for Tussar silk and beautiful terracotta pottery",
    position: { x: 80, y: 60 },
    color: "bg-blue-500",
    products: 32,
    artists: 8,
  },
  {
    id: 3,
    name: "Muzaffarpur",
    artForm: "Silver Filigree",
    description: "Intricate silver jewelry and decorative items",
    position: { x: 45, y: 35 },
    color: "bg-yellow-500",
    products: 28,
    artists: 6,
  },
  {
    id: 4,
    name: "Patna",
    artForm: "Stone Carving",
    description: "Traditional stone sculptures and architectural elements",
    position: { x: 55, y: 50 },
    color: "bg-green-500",
    products: 18,
    artists: 4,
  },
  {
    id: 5,
    name: "Gaya",
    artForm: "Wood Carving",
    description: "Religious sculptures and decorative wooden items",
    position: { x: 70, y: 75 },
    color: "bg-purple-500",
    products: 22,
    artists: 5,
  },
];

export function BiharMap() {
  const [selectedRegion, setSelectedRegion] = useState<number | null>(null);
  const [hoveredRegion, setHoveredRegion] = useState<number | null>(null);

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-primary-50 to-orange-50 dark:from-primary-900/20 dark:to-orange-900/20">
      <div className="container">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold">
            Crafts Across Bihar
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover the rich artistic heritage of Bihar through our interactive
            map. Each region specializes in unique traditional crafts passed
            down through generations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* Map */}
          <div className="lg:col-span-2">
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <div className="relative aspect-[4/3] bg-gradient-to-br from-green-100 to-green-200 dark:from-green-900/30 dark:to-green-800/30">
                  {/* Bihar Map Outline */}
                  <svg
                    viewBox="0 0 400 300"
                    className="absolute inset-0 w-full h-full"
                    style={{
                      filter: "drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1))",
                    }}
                  >
                    <path
                      d="M50 80 L350 80 L350 220 L50 220 Z M80 50 L320 50 L320 80 L80 80 Z M50 220 L50 250 L350 250 L350 220"
                      fill="rgba(34, 197, 94, 0.3)"
                      stroke="rgba(34, 197, 94, 0.6)"
                      strokeWidth="2"
                      className="animate-pulse"
                    />
                  </svg>

                  {/* Region Markers */}
                  {artRegions.map((region) => (
                    <div
                      key={region.id}
                      className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
                      style={{
                        left: `${region.position.x}%`,
                        top: `${region.position.y}%`,
                      }}
                      onMouseEnter={() => setHoveredRegion(region.id)}
                      onMouseLeave={() => setHoveredRegion(null)}
                      onClick={() => setSelectedRegion(region.id)}
                    >
                      {/* Animated Pulse Ring */}
                      <div
                        className={`absolute inset-0 rounded-full ${region.color} opacity-30 animate-ping`}
                        style={{
                          width: "24px",
                          height: "24px",
                          transform: "translate(-50%, -50%)",
                        }}
                      />

                      {/* Main Marker */}
                      <div
                        className={`relative w-6 h-6 rounded-full ${
                          region.color
                        } border-2 border-white shadow-lg transition-all duration-300 ${
                          hoveredRegion === region.id ||
                          selectedRegion === region.id
                            ? "scale-125 shadow-xl"
                            : "scale-100"
                        }`}
                      >
                        <MapPin className="absolute inset-0 w-4 h-4 text-white m-auto" />
                      </div>

                      {/* Hover Tooltip */}
                      {hoveredRegion === region.id && (
                        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded whitespace-nowrap z-10 animate-in fade-in-0 zoom-in-95 duration-200">
                          {region.name}
                          <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-black" />
                        </div>
                      )}
                    </div>
                  ))}

                  {/* Map Title */}
                  <div className="absolute top-4 left-4 bg-white/90 dark:bg-black/90 px-3 py-2 rounded-lg backdrop-blur-sm">
                    <h3 className="font-semibold text-sm">
                      Bihar Craft Regions
                    </h3>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Region Information */}
          <div className="space-y-4">
            {selectedRegion ? (
              <Card className="animate-in slide-in-from-right-5 duration-300">
                <CardContent className="p-6">
                  {(() => {
                    const region = artRegions.find(
                      (r) => r.id === selectedRegion
                    )!;
                    return (
                      <div className="space-y-4">
                        <div className="flex items-center gap-3">
                          <div
                            className={`w-4 h-4 rounded-full ${region.color}`}
                          />
                          <h3 className="text-xl font-semibold">
                            {region.name}
                          </h3>
                        </div>

                        <Badge variant="secondary" className="text-sm">
                          {region.artForm}
                        </Badge>

                        <p className="text-muted-foreground">
                          {region.description}
                        </p>

                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <span className="text-muted-foreground">
                              Products:
                            </span>
                            <span className="ml-2 font-medium">
                              {region.products}
                            </span>
                          </div>
                          <div>
                            <span className="text-muted-foreground">
                              Artists:
                            </span>
                            <span className="ml-2 font-medium">
                              {region.artists}
                            </span>
                          </div>
                        </div>

                        <Button className="w-full" size="sm">
                          Explore {region.name} Crafts
                        </Button>
                      </div>
                    );
                  })()}
                </CardContent>
              </Card>
            ) : (
              <Card>
                <CardContent className="p-6 text-center space-y-4">
                  <Info className="h-12 w-12 text-muted-foreground mx-auto" />
                  <div>
                    <h3 className="font-semibold mb-2">
                      Explore Bihar's Art Regions
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Click on any region marker to learn about the traditional
                      crafts and artisans from that area.
                    </p>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Legend */}
            <Card>
              <CardContent className="p-4">
                <h4 className="font-medium mb-3">Art Forms</h4>
                <div className="space-y-2">
                  {artRegions.map((region) => (
                    <div
                      key={region.id}
                      className="flex items-center gap-2 text-sm"
                    >
                      <div className={`w-3 h-3 rounded-full ${region.color}`} />
                      <span>{region.artForm}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
