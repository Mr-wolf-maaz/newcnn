import type { Metadata } from "next";
import Link from "next/link";
export const metadata: Metadata = { title: "Refund & Return Policy" };

export default function RefundPage() {
  return (
    <div className="min-h-screen bg-[#FAF9F6]">
      <div className="bg-[#1B4332] text-white py-12">
        <div className="container-custom">
          <h1 className="font-display text-4xl font-bold">Refund & Return Policy</h1>
          <p className="text-white/60 mt-1 text-sm">We want you to be 100% satisfied</p>
        </div>
      </div>
      <div className="container-custom py-12 max-w-3xl">
        <div className="bg-white rounded-sm border border-gray-100 p-8">
          <div className="bg-[#1B4332]/5 border border-[#1B4332]/10 rounded-sm p-5 mb-8 text-center">
            <p className="text-3xl mb-2">💯</p>
            <h2 className="font-display text-2xl font-bold text-[#1B4332]">100% Satisfaction Guarantee</h2>
            <p className="text-gray-500 text-sm mt-1">If you're not happy, we'll make it right — no questions asked.</p>
          </div>
          <div className="space-y-6 text-sm text-gray-600 leading-relaxed">
            {[
              { icon: "📦", title: "Eligible for Return", body: "Products may be returned within 7 days of delivery if: they are unopened and in original packaging, you received the wrong item, or the product was damaged during transit." },
              { icon: "❌", title: "Non-Returnable Items", body: "For hygiene and food safety reasons, we cannot accept returns on opened food products, items damaged by improper storage, and products beyond the 7-day window." },
              { icon: "🔄", title: "How to Initiate a Return", body: "Contact us via WhatsApp (+92-xxx-xxxxxxx) or email (support@chitralnuts.pk) within 7 days. Provide your order number and photos of the product. We'll arrange a pickup or provide return shipping instructions." },
              { icon: "💰", title: "Refund Process", body: "Once we receive and inspect the returned item, refunds are processed within 5-7 business days to your original payment method. For COD orders, we transfer the refund via Easypaisa, JazzCash, or bank transfer." },
              { icon: "🚚", title: "Damaged in Transit", body: "If your order arrives damaged, photograph the packaging and product immediately. Contact us within 24 hours of delivery and we will arrange a replacement or full refund at no cost to you." },
            ].map((s) => (
              <div key={s.title} className="flex gap-4">
                <span className="text-2xl mt-0.5">{s.icon}</span>
                <div>
                  <h3 className="font-serif font-bold text-[#1B4332] mb-1">{s.title}</h3>
                  <p>{s.body}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 p-5 bg-[#D4AF37]/10 rounded-sm border border-[#D4AF37]/20 text-center">
            <p className="font-semibold text-[#1B4332] mb-1">Need help with a return?</p>
            <a href="https://wa.me/92xxxxxxxxxx" className="inline-flex items-center gap-2 bg-[#25D366] text-white px-5 py-2.5 rounded-sm font-semibold text-sm mt-2 hover:bg-[#1da851] transition-colors">
              💬 WhatsApp Us Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
