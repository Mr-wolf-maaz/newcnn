"use client";
import React, { useState } from "react";
import { Send, Gift, Bell, Tag } from "lucide-react";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (res.ok) { setStatus("success"); setEmail(""); }
      else setStatus("error");
    } catch { setStatus("error"); }
  };

  return (
    <section className="py-16 bg-[#FAF9F6] border-t border-gray-100">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto bg-[#1B4332] rounded-sm overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Left */}
            <div className="p-8 md:p-10">
              <p className="text-[#D4AF37] font-medium text-xs tracking-[0.2em] uppercase mb-3">Stay Connected</p>
              <h2 className="font-display text-3xl font-bold text-white mb-3">
                Get Exclusive Offers &<br />Health Tips
              </h2>
              <div className="h-0.5 w-10 bg-[#D4AF37] mb-5" />
              <p className="text-white/65 text-sm leading-relaxed mb-6">
                Join 5,000+ health-conscious Pakistanis who receive weekly nutrition tips, new product alerts, and exclusive subscriber-only discounts.
              </p>

              {status === "success" ? (
                <div className="flex items-center gap-3 bg-green-500/20 border border-green-400/30 rounded-sm px-4 py-3">
                  <span className="text-2xl">✅</span>
                  <div>
                    <p className="text-white font-semibold text-sm">You're subscribed!</p>
                    <p className="text-white/60 text-xs">Check your inbox for a welcome gift.</p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3">
                  <div className="flex gap-0 rounded-sm overflow-hidden border border-white/20 focus-within:border-[#D4AF37] transition-colors">
                    <input
                      type="email" required value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="your@email.com"
                      className="flex-1 bg-white/10 text-white placeholder:text-white/40 px-4 py-3 text-sm focus:outline-none"
                    />
                    <button type="submit" disabled={status === "loading"}
                      className="bg-[#D4AF37] text-[#0D2818] px-5 font-semibold text-sm hover:bg-[#E8CC6A] transition-colors disabled:opacity-70 flex items-center gap-1.5">
                      {status === "loading" ? (
                        <div className="w-4 h-4 border-2 border-[#1B4332] border-t-transparent rounded-full animate-spin" />
                      ) : (
                        <><Send className="w-3.5 h-3.5" /> Subscribe</>
                      )}
                    </button>
                  </div>
                  {status === "error" && <p className="text-red-400 text-xs">Something went wrong. Please try again.</p>}
                  <p className="text-white/40 text-xs">No spam ever. Unsubscribe anytime.</p>
                </form>
              )}
            </div>

            {/* Right - perks */}
            <div className="bg-white/5 p-8 md:p-10 flex flex-col justify-center space-y-5 border-t md:border-t-0 md:border-l border-white/10">
              {[
                { icon: <Gift className="w-5 h-5" />, title: "Welcome Discount", desc: "Get 10% off your first order instantly on signup" },
                { icon: <Bell className="w-5 h-5" />, title: "New Arrivals First", desc: "Be the first to know about new products and seasonal specials" },
                { icon: <Tag className="w-5 h-5" />, title: "Subscriber-Only Deals", desc: "Exclusive flash sales and bundle deals only for subscribers" },
              ].map((perk) => (
                <div key={perk.title} className="flex gap-4">
                  <div className="w-10 h-10 bg-[#D4AF37]/20 text-[#D4AF37] rounded-sm flex items-center justify-center flex-shrink-0">
                    {perk.icon}
                  </div>
                  <div>
                    <p className="font-semibold text-white text-sm">{perk.title}</p>
                    <p className="text-white/50 text-xs mt-0.5">{perk.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
