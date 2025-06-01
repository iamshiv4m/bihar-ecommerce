import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { MapPin, Calendar, Award, Users, Star, Heart } from "lucide-react";

export function ArtistProfile() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* Artist Image */}
      <div className="lg:col-span-1">
        <Card className="overflow-hidden">
          <CardContent className="p-0">
            <div className="aspect-square">
              <img
                src="/placeholder.svg?height=400&width=400"
                alt="Sita Devi"
                className="w-full h-full object-cover"
              />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Artist Information */}
      <div className="lg:col-span-2 space-y-6">
        <div className="space-y-4">
          <div className="flex items-start justify-between">
            <div className="space-y-2">
              <h1 className="text-3xl lg:text-4xl font-bold">Sita Devi</h1>
              <p className="text-xl text-primary font-medium">
                Master Madhubani Artist
              </p>
              <div className="flex items-center gap-2">
                <Badge variant="secondary">Featured Artist</Badge>
                <Badge className="bg-yellow-100 text-yellow-800">
                  <Award className="h-3 w-3 mr-1" />
                  Padma Shri
                </Badge>
              </div>
            </div>
            <Button variant="outline" size="icon">
              <Heart className="h-4 w-4" />
            </Button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-muted-foreground" />
              <span>Jitwarpur, Madhubani</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4 text-muted-foreground" />
              <span>25+ years experience</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4 text-muted-foreground" />
              <span>45 products</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="h-4 w-4 text-yellow-500" />
              <span>4.9 rating</span>
            </div>
          </div>
        </div>

        <Separator />

        {/* Biography */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">About the Artist</h2>
          <div className="prose prose-gray max-w-none">
            <p>
              Sita Devi is a renowned Madhubani artist from Jitwarpur village in
              the Madhubani district of Bihar. Born into a family of traditional
              painters, she learned the art form from her mother and
              grandmother, carrying forward a legacy that spans generations.
            </p>
            <p>
              Her work is characterized by intricate geometric patterns, vibrant
              natural colors, and traditional motifs that tell stories from
              Hindu mythology and daily village life. Sita Devi has been
              instrumental in preserving and promoting the Madhubani art form,
              training numerous young artists in her village.
            </p>
            <p>
              In recognition of her exceptional contribution to Indian art and
              culture, she was awarded the prestigious Padma Shri in 2020. Her
              paintings have been exhibited in galleries across India and
              internationally, bringing global recognition to the traditional
              art of Madhubani.
            </p>
          </div>
        </div>

        <Separator />

        {/* Awards & Recognition */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Awards & Recognition</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <Award className="h-8 w-8 text-yellow-500" />
                  <div>
                    <h3 className="font-semibold">Padma Shri</h3>
                    <p className="text-sm text-muted-foreground">
                      Government of India, 2020
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <Award className="h-8 w-8 text-orange-500" />
                  <div>
                    <h3 className="font-semibold">National Award</h3>
                    <p className="text-sm text-muted-foreground">
                      Ministry of Textiles, 2018
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <Separator />

        {/* Specializations */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Specializations</h2>
          <div className="flex flex-wrap gap-2">
            {[
              "Traditional Madhubani",
              "Geometric Patterns",
              "Mythological Themes",
              "Natural Pigments",
              "Canvas Paintings",
              "Wall Art",
            ].map((skill) => (
              <Badge key={skill} variant="outline">
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
