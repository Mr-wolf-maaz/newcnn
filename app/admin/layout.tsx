import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Admin Dashboard | Chitral Natural Nuts",
  robots: { index: false, follow: false },
};
export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return <div className="bg-gray-100 min-h-screen">{children}</div>;
}
