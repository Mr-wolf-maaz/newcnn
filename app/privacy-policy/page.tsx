import type { Metadata } from "next";
import Link from "next/link";
export const metadata: Metadata = { title: "Privacy Policy", description: "How Chitral Natural Nuts collects, uses, and protects your personal information." };

const sections = [
  { title: "Information We Collect", content: "We collect information you provide directly to us, such as your name, email address, phone number, shipping address, and payment information when you place an order or create an account. We also collect usage data including pages visited, products viewed, and search queries to improve your experience." },
  { title: "How We Use Your Information", content: "We use your information to process and fulfill your orders, send order confirmations and shipping updates via SMS/email/WhatsApp, respond to your questions and support requests, send promotional communications (only with your consent), and improve our website and product offerings." },
  { title: "Information Sharing", content: "We do not sell, trade, or rent your personal information to third parties. We may share your information with shipping partners (TCS, Leopard Courier, etc.) to deliver your orders, payment processors (Stripe, Easypaisa, JazzCash) to process transactions, and email/SMS service providers to send you communications." },
  { title: "Data Security", content: "We implement industry-standard security measures including SSL encryption, secure payment processing through PCI-compliant gateways, and regular security audits. However, no method of transmission over the internet is 100% secure." },
  { title: "Your Rights", content: "You have the right to access, update, or delete your personal information at any time through your account settings or by contacting us. You can unsubscribe from marketing emails at any time using the unsubscribe link in our emails." },
  { title: "Cookies", content: "We use cookies to maintain your session, remember your cart items, and analyze website traffic. You can disable cookies in your browser settings, but this may affect some website functionality." },
  { title: "Contact Us", content: "If you have questions about this Privacy Policy, please contact us at privacy@chitralnuts.pk or via WhatsApp at +92-xxx-xxxxxxx." },
];

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#FAF9F6]">
      <div className="bg-[#1B4332] text-white py-12">
        <div className="container-custom">
          <nav className="text-xs text-white/50 mb-3">
            <Link href="/" className="hover:text-[#D4AF37]">Home</Link> / <span className="text-white/80">Privacy Policy</span>
          </nav>
          <h1 className="font-display text-4xl font-bold">Privacy Policy</h1>
          <p className="text-white/60 mt-1 text-sm">Last updated: December 2024</p>
        </div>
      </div>
      <div className="container-custom py-12 max-w-3xl">
        <div className="bg-white rounded-sm border border-gray-100 p-8 space-y-8">
          <p className="text-gray-600 text-sm leading-relaxed border-l-4 border-[#D4AF37] pl-4">
            At Chitral Natural Nuts, we are committed to protecting your privacy. This policy explains how we collect, use, and safeguard your personal information.
          </p>
          {sections.map((s, i) => (
            <div key={i}>
              <h2 className="font-serif font-bold text-[#1B4332] text-lg mb-3">{i + 1}. {s.title}</h2>
              <p className="text-gray-600 text-sm leading-relaxed">{s.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
