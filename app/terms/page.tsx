import type { Metadata } from "next";
import Link from "next/link";
export const metadata: Metadata = { title: "Terms of Service" };

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#FAF9F6]">
      <div className="bg-[#1B4332] text-white py-12">
        <div className="container-custom">
          <h1 className="font-display text-4xl font-bold">Terms of Service</h1>
          <p className="text-white/60 mt-1 text-sm">Last updated: December 2024</p>
        </div>
      </div>
      <div className="container-custom py-12 max-w-3xl">
        <div className="bg-white rounded-sm border border-gray-100 p-8 space-y-7 text-sm text-gray-600 leading-relaxed">
          {[
            { title: "Acceptance of Terms", body: "By accessing and using the Chitral Natural Nuts website (chitralnuts.pk), you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our website or services." },
            { title: "Products & Pricing", body: "All product prices are in Pakistani Rupees (PKR) and include applicable taxes. We reserve the right to modify prices at any time. Product availability is subject to stock levels. Images are for illustration purposes; actual products may vary slightly." },
            { title: "Orders & Payment", body: "By placing an order, you confirm that all information provided is accurate. We reserve the right to cancel or refuse any order. Payment must be completed before order processing begins (except for Cash on Delivery orders). COD orders require payment upon delivery." },
            { title: "Shipping & Delivery", body: "We ship across Pakistan. Delivery times are estimates and not guaranteed. We are not responsible for delays caused by courier companies, natural events, or circumstances beyond our control. Risk of loss passes to you upon delivery." },
            { title: "Returns & Refunds", body: "We offer a 7-day return policy for unopened, undamaged products. Perishable items (dried fruits, honey) cannot be returned once opened for hygiene reasons. Refunds are processed within 5-7 business days to the original payment method." },
            { title: "Intellectual Property", body: "All content on this website including text, images, logos, and design is owned by Chitral Natural Nuts and protected by Pakistani intellectual property laws. You may not reproduce, distribute, or use our content without written permission." },
            { title: "Contact", body: "For questions about these terms, contact us at legal@chitralnuts.pk." },
          ].map((s, i) => (
            <div key={i}>
              <h2 className="font-serif font-bold text-[#1B4332] text-base mb-2">{i + 1}. {s.title}</h2>
              <p>{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
