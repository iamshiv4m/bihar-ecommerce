import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

export function ArtistsFilters() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Filters</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Specialization */}
        <div className="space-y-3">
          <h4 className="font-medium">Specialization</h4>
          <div className="space-y-2">
            {[
              "Madhubani Painting",
              "Pottery & Ceramics",
              "Silver Filigree",
              "Handloom Weaving",
              "Wood Carving",
            ].map((item) => (
              <div key={item} className="flex items-center space-x-2">
                <Checkbox id={item} />
                <Label htmlFor={item} className="text-sm">
                  {item}
                </Label>
              </div>
            ))}
          </div>
        </div>

        <Separator />

        {/* Location */}
        <div className="space-y-3">
          <h4 className="font-medium">Location</h4>
          <div className="space-y-2">
            {["Madhubani", "Bhagalpur", "Muzaffarpur", "Patna", "Gaya"].map(
              (item) => (
                <div key={item} className="flex items-center space-x-2">
                  <Checkbox id={item} />
                  <Label htmlFor={item} className="text-sm">
                    {item}
                  </Label>
                </div>
              )
            )}
          </div>
        </div>

        <Separator />

        {/* Experience */}
        <div className="space-y-3">
          <h4 className="font-medium">Experience</h4>
          <div className="space-y-2">
            {["0-5 years", "5-10 years", "10-20 years", "20+ years"].map(
              (item) => (
                <div key={item} className="flex items-center space-x-2">
                  <Checkbox id={item} />
                  <Label htmlFor={item} className="text-sm">
                    {item}
                  </Label>
                </div>
              )
            )}
          </div>
        </div>

        <Separator />

        {/* Awards */}
        <div className="space-y-3">
          <h4 className="font-medium">Awards</h4>
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <Checkbox id="award-winners" />
              <Label htmlFor="award-winners" className="text-sm">
                Award Winners Only
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="featured" />
              <Label htmlFor="featured" className="text-sm">
                Featured Artists
              </Label>
            </div>
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
