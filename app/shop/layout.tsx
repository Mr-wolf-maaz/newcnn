import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Shop All Products — Premium Nuts & Dry Fruits",
  description: "Browse our full collection of premium almonds, walnuts, pistachios, Chilgoza pine nuts, dried apricots, organic honey, and more. Direct from Chitral, Pakistan.",
  keywords: ["buy almonds Pakistan", "Chitral walnuts online", "Chilgoza pine nuts", "dry fruits Pakistan", "organic honey Pakistan"],
};
export default function ShopLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
