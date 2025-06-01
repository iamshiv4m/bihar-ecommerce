import type { Metadata } from "next";
import { ArtistProfile } from "@/components/artists/artist-profile";
import { ArtistProducts } from "@/components/artists/artist-products";
import { BreadcrumbNav } from "@/components/ui/breadcrumb";

export const metadata: Metadata = {
  title: "Sita Devi - Master Madhubani Artist - Bihar Crafts",
  description:
    "Learn about Sita Devi, a renowned Madhubani artist from Jitwarpur village, and explore her beautiful paintings.",
};

export default function ArtistDetailPage() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Artists", href: "/artists" },
    { label: "Sita Devi", href: "/artists/sita-devi" },
  ];

  return (
    <div className="page-transition min-h-screen bg-background">
      <div className="container py-8">
        <BreadcrumbNav items={breadcrumbs} />

        <div className="mt-8 space-y-12">
          <ArtistProfile />
          <ArtistProducts />
        </div>
      </div>
    </div>
  );
}
