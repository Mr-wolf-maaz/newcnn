import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with Chitral Natural Nuts — reach us via contact form, WhatsApp, phone or email. We're happy to help.",
};
export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
