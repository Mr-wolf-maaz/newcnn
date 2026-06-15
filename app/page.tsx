import type { Metadata } from "next";
import HeroSection from "@/components/home/HeroSection";
import CategoryBanner from "@/components/home/CategoryBanner";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import ChitralBanner from "@/components/home/ChitralBanner";
import HealthBenefits from "@/components/home/HealthBenefits";
import Testimonials from "@/components/home/Testimonials";
import BlogPreview from "@/components/home/BlogPreview";
import InstagramFeed from "@/components/home/InstagramFeed";
import NewsletterSection from "@/components/home/NewsletterSection";

export const metadata: Metadata = {
  title: "Chitral Natural Nuts | Premium Nuts & Dry Fruits from Pakistan",
  description: "Pakistan's finest premium nuts and dry fruits — almonds, walnuts, Chilgoza pine nuts, dried apricots, and organic mountain honey sourced directly from Chitral. Free delivery on orders above Rs. 2,000.",
  openGraph: {
    title: "Chitral Natural Nuts | Premium Nuts & Dry Fruits",
    description: "Premium quality nuts sourced directly from the mountains of Chitral, Pakistan. 100% natural, no preservatives.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <CategoryBanner />
      <FeaturedProducts />
      <WhyChooseUs />
      <ChitralBanner />
      <HealthBenefits />
      <Testimonials />
      <InstagramFeed />
      <BlogPreview />
      <NewsletterSection />
    </>
  );
}
