import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "FAQ — Shipping, Payment & Product Questions",
  description: "Answers to the most common questions about Chitral Natural Nuts — shipping, payment methods, product quality, returns, and more.",
};
export default function FAQLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
