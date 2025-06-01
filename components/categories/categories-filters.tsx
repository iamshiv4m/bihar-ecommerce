import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";

export function CategoriesFilters() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Filters</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Art Form */}
        <div className="space-y-3">
          <h4 className="font-medium">Art Form</h4>
          <div className="space-y-2">
            {["Painting", "Textile", "Pottery", "Jewelry", "Sculpture"].map(
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

        {/* Region */}
        <div className="space-y-3">
          <h4 className="font-medium">Region</h4>
          <div className="space-y-2">
            {["Mithila", "Patna", "Gaya", "Bhagalpur", "Muzaffarpur"].map(
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

        {/* Material */}
        <div className="space-y-3">
          <h4 className="font-medium">Material</h4>
          <div className="space-y-2">
            {["Silk", "Cotton", "Clay", "Silver", "Wood"].map((item) => (
              <div key={item} className="flex items-center space-x-2">
                <Checkbox id={item} />
                <Label htmlFor={item} className="text-sm">
                  {item}
                </Label>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
