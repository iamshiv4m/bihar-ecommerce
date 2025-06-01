import type { Metadata } from "next";
import { HeroSection } from "@/components/sections/hero-section";
import { FeaturedCategories } from "@/components/sections/featured-categories";
import { PopularProducts } from "@/components/sections/popular-products";
import { ProductTabs } from "@/components/sections/product-tabs";
import { PromotionalBanners } from "@/components/sections/promotional-banners";
import { Newsletter } from "@/components/sections/newsletter";
import { BiharMap } from "@/components/sections/bihar-map";

export const metadata: Metadata = {
  title: "Bihar Crafts - Authentic Handmade Products from Bihar",
  description:
    "Discover authentic handmade crafts, art, and traditional products from Bihar. Support local artisans and experience the cultural richness of Bihar.",
};

export default function HomePage() {
  return (
    <div className="page-transition">
      <HeroSection />
      <FeaturedCategories />
      <PopularProducts />
      <ProductTabs />
      <BiharMap />
      <PromotionalBanners />
      <Newsletter />
    </div>
  );
}
