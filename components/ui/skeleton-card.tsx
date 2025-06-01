import { Card, CardContent } from "@/components/ui/card";

export function SkeletonCard() {
  return (
    <Card className="overflow-hidden">
      <CardContent className="p-0">
        <div className="aspect-square bg-muted animate-pulse" />
        <div className="p-4 space-y-3">
          <div className="h-3 bg-muted rounded animate-pulse" />
          <div className="h-4 bg-muted rounded animate-pulse w-3/4" />
          <div className="h-3 bg-muted rounded animate-pulse w-1/2" />
          <div className="h-8 bg-muted rounded animate-pulse" />
        </div>
      </CardContent>
    </Card>
  );
}

export function SkeletonBlogCard() {
  return (
    <Card className="overflow-hidden">
      <CardContent className="p-0">
        <div className="aspect-[16/9] bg-muted animate-pulse" />
        <div className="p-6 space-y-3">
          <div className="h-3 bg-muted rounded animate-pulse w-1/4" />
          <div className="h-5 bg-muted rounded animate-pulse" />
          <div className="h-4 bg-muted rounded animate-pulse" />
          <div className="h-4 bg-muted rounded animate-pulse w-3/4" />
          <div className="h-3 bg-muted rounded animate-pulse w-1/3" />
        </div>
      </CardContent>
    </Card>
  );
}
