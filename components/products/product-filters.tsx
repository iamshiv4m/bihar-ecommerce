import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

export function ProductFilters() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Filters</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Price Range */}
        <div className="space-y-3">
          <h4 className="font-medium">Price Range</h4>
          <div className="space-y-3">
            <Slider
              defaultValue={[1000, 5000]}
              max={10000}
              min={0}
              step={100}
            />
            <div className="flex items-center justify-between text-sm text-muted-foreground">
              <span>₹1,000</span>
              <span>₹5,000</span>
            </div>
          </div>
        </div>

        <Separator />

        {/* Size */}
        <div className="space-y-3">
          <h4 className="font-medium">Size</h4>
          <div className="space-y-2">
            {[
              "Small (8x10)",
              "Medium (12x16)",
              "Large (16x20)",
              "Extra Large (20x24)",
            ].map((size) => (
              <div key={size} className="flex items-center space-x-2">
                <Checkbox id={size} />
                <Label htmlFor={size} className="text-sm">
                  {size}
                </Label>
              </div>
            ))}
          </div>
        </div>

        <Separator />

        {/* Style */}
        <div className="space-y-3">
          <h4 className="font-medium">Style</h4>
          <div className="space-y-2">
            {[
              "Traditional",
              "Contemporary",
              "Geometric",
              "Floral",
              "Animal Motifs",
            ].map((style) => (
              <div key={style} className="flex items-center space-x-2">
                <Checkbox id={style} />
                <Label htmlFor={style} className="text-sm">
                  {style}
                </Label>
              </div>
            ))}
          </div>
        </div>

        <Separator />

        {/* Artist */}
        <div className="space-y-3">
          <h4 className="font-medium">Artist</h4>
          <div className="space-y-2">
            {[
              "Sita Devi",
              "Ganga Devi",
              "Mahasundari Devi",
              "Bharti Dayal",
              "Santosh Kumar Das",
            ].map((artist) => (
              <div key={artist} className="flex items-center space-x-2">
                <Checkbox id={artist} />
                <Label htmlFor={artist} className="text-sm">
                  {artist}
                </Label>
              </div>
            ))}
          </div>
        </div>

        <Separator />

        <Button variant="outline" className="w-full">
          Clear All Filters
        </Button>
      </CardContent>
    </Card>
  );
}
