import type { Metadata } from "next";
import { ProductGallery } from "@/components/product/product-gallery";
import { ProductInfo } from "@/components/product/product-info";
import { ProductTabs } from "@/components/product/product-tabs";
import { RelatedProducts } from "@/components/product/related-products";
import { BreadcrumbNav } from "@/components/ui/breadcrumb";

export const metadata: Metadata = {
  title: "Traditional Madhubani Canvas - Bihar Crafts",
  description:
    "Authentic Madhubani painting on canvas, handcrafted by skilled artisans from Mithila region of Bihar.",
};

export default function ProductDetailPage() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Products", href: "/products" },
    { label: "Madhubani Paintings", href: "/categories/madhubani-paintings" },
    { label: "Traditional Madhubani Canvas", href: "/products/1" },
  ];

  return (
    <div className="page-transition min-h-screen bg-background">
      <div className="container py-8">
        <BreadcrumbNav items={breadcrumbs} />

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <ProductGallery />
          <ProductInfo />
        </div>

        <ProductTabs />
        <RelatedProducts />
      </div>
    </div>
  );
}
