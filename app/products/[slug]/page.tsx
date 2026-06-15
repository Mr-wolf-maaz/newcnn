"use client";
import React, { useState } from "react";
import Link from "next/link";
import { ShoppingCart, Heart, Star, Shield, Truck, RefreshCw, Minus, Plus, CheckCircle } from "lucide-react";
import { PRODUCTS } from "@/lib/data";
import { useCartStore, useWishlistStore } from "@/lib/store";
import { formatPrice, calculateDiscount } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import toast from "react-hot-toast";

const EMOJI_MAP: Record<string, string> = {
  Almonds: "🥜", Walnuts: "🌰", Pistachios: "🫘",
  "Pine Nuts": "🌲", Honey: "🍯", "Dried Fruits": "🍑",
  Cashews: "🥜", "Mixed Nuts": "🎁",
};

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = PRODUCTS.find((p) => p.slug === params.slug) || PRODUCTS[0];
  const [qty, setQty] = useState(1);
  const [activeTab, setActiveTab] = useState<"description" | "nutrition" | "reviews">("description");
  const [activeImg, setActiveImg] = useState(0);
  const { addItem, openCart } = useCartStore();
  const { toggle, has } = useWishlistStore();
  const discount = calculateDiscount(product.price, product.comparePrice);
  const related = PRODUCTS.filter((p) => p.id !== product.id && p.category === product.category).slice(0, 4);
  const emoji = EMOJI_MAP[product.category] || "🥜";
  const wished = has(product.id);

  const handleAdd = () => {
    for (let i = 0; i < qty; i++) {
      addItem({ id: product.id, name: product.name, price: product.price, image: product.image, slug: product.slug });
    }
    toast.success(`${qty}× ${product.name} added to cart!`, {
      style: { background: "#1B4332", color: "#fff", borderRadius: "4px" },
      iconTheme: { primary: "#D4AF37", secondary: "#1B4332" },
    });
    openCart();
  };

  return (
    <div className="min-h-screen bg-[#FAF9F6]">
      {/* Product Schema */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Product",
        "name": product.name,
        "description": product.description,
        "image": `https://chitralnuts.pk/images/${product.slug}.jpg`,
        "brand": { "@type": "Brand", "name": "Chitral Natural Nuts" },
        "offers": {
          "@type": "Offer",
          "url": `https://chitralnuts.pk/products/${product.slug}`,
          "priceCurrency": "PKR",
          "price": product.price,
          "availability": product.stock > 0 ? "https://schema.org/InStock" : "https://schema.org/OutOfStock",
          "seller": { "@type": "Organization", "name": "Chitral Natural Nuts" },
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": product.rating,
          "reviewCount": product.reviewCount,
        },
      })}} />

      <div className="container-custom py-6">
        {/* Breadcrumb */}
        <nav className="text-xs text-gray-400 mb-6 flex items-center gap-2 flex-wrap">
          <Link href="/" className="hover:text-[#1B4332]">Home</Link>
          <span>/</span>
          <Link href="/shop" className="hover:text-[#1B4332]">Shop</Link>
          <span>/</span>
          <Link href={`/shop?category=${product.category.toLowerCase().replace(/\s+/g,"-")}`} className="hover:text-[#1B4332]">{product.category}</Link>
          <span>/</span>
          <span className="text-gray-700">{product.name}</span>
        </nav>

        {/* Main product block */}
        <div className="bg-white rounded-sm border border-gray-100 p-6 md:p-8 mb-8 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Images */}
            <div className="space-y-3">
              <div className="aspect-square bg-gradient-to-br from-[#FAF9F6] to-[#F0EDE6] rounded-sm flex items-center justify-center relative overflow-hidden border border-gray-100">
                <span className="text-8xl">{emoji}</span>
                {discount > 0 && (
                  <span className="absolute top-4 left-4 bg-red-500 text-white text-sm font-bold px-3 py-1 rounded-sm">
                    -{discount}% OFF
                  </span>
                )}
                {product.isOrganic && (
                  <span className="absolute top-4 right-4 bg-[#D4AF37] text-[#0D2818] text-xs font-bold px-2.5 py-1 rounded-sm">
                    ✓ ORGANIC
                  </span>
                )}
                {product.isNew && !discount && (
                  <span className="absolute top-4 left-4 bg-[#1B4332] text-white text-xs font-bold px-2.5 py-1 rounded-sm">NEW</span>
                )}
              </div>
              {/* Thumbnails */}
              <div className="grid grid-cols-4 gap-2">
                {[emoji, "🏔️", "🌿", "📦"].map((e, i) => (
                  <button key={i} onClick={() => setActiveImg(i)}
                    className={`aspect-square bg-gradient-to-br from-[#FAF9F6] to-[#F0EDE6] rounded-sm flex items-center justify-center text-2xl transition-all border-2 ${activeImg === i ? "border-[#D4AF37]" : "border-transparent hover:border-gray-200"}`}>
                    {e}
                  </button>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div>
              <div className="flex items-start justify-between gap-3 mb-2">
                <div>
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-wider">{product.category}</span>
                    {product.isOrganic && <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-sm font-medium">🌿 Organic</span>}
                  </div>
                  <h1 className="font-display text-3xl md:text-4xl font-bold text-[#1B4332] leading-tight">{product.name}</h1>
                </div>
                <button onClick={() => toggle(product.id)}
                  className={`flex-shrink-0 p-2.5 rounded-sm border-2 transition-all ${wished ? "border-red-200 bg-red-50 text-red-500" : "border-gray-200 text-gray-400 hover:border-red-200 hover:text-red-400"}`}>
                  <Heart className={`w-5 h-5 ${wished ? "fill-current" : ""}`} />
                </button>
              </div>

              {/* Rating */}
              <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`w-4 h-4 ${i < Math.floor(product.rating) ? "fill-[#D4AF37] text-[#D4AF37]" : "text-gray-200"}`} />
                  ))}
                </div>
                <span className="font-bold text-[#1B4332] text-sm">{product.rating}/5</span>
                <span className="text-gray-400 text-sm">({product.reviewCount} reviews)</span>
                <span className="text-gray-300">·</span>
                <span className="text-xs text-green-600 font-semibold">✓ 500+ sold</span>
              </div>

              {/* Price */}
              <div className="flex items-baseline gap-3 mb-1">
                <span className="font-display text-4xl font-bold text-[#1B4332]">{formatPrice(product.price)}</span>
                {product.comparePrice && (
                  <>
                    <span className="text-xl text-gray-400 line-through">{formatPrice(product.comparePrice)}</span>
                    <span className="bg-red-100 text-red-600 text-sm font-bold px-2 py-0.5 rounded-sm">{discount}% OFF</span>
                  </>
                )}
              </div>
              <p className="text-xs text-gray-400 mb-5">
                Per {product.weight}{product.unit} · Sourced from: {product.origin}
              </p>

              {/* Short desc */}
              <p className="text-gray-600 text-sm leading-relaxed mb-5 border-l-2 border-[#D4AF37] pl-4 italic">
                {product.shortDesc}
              </p>

              {/* Benefits */}
              <div className="flex flex-wrap gap-2 mb-6">
                {product.benefits.map((b) => (
                  <span key={b} className="flex items-center gap-1 text-xs bg-[#1B4332]/10 text-[#1B4332] px-2.5 py-1 rounded-sm font-medium">
                    <CheckCircle className="w-3 h-3" /> {b}
                  </span>
                ))}
              </div>

              {/* Stock warning */}
              {product.stock < 10 && product.stock > 0 && (
                <div className="mb-4 flex items-center gap-2 text-sm text-orange-600 bg-orange-50 border border-orange-200 px-3 py-2 rounded-sm">
                  ⚡ Only <strong>{product.stock} units</strong> left in stock — order soon!
                </div>
              )}

              {/* Qty + Add to cart */}
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center border-2 border-gray-200 rounded-sm overflow-hidden">
                  <button onClick={() => setQty((q) => Math.max(1, q - 1))}
                    className="w-11 h-11 flex items-center justify-center hover:bg-gray-50 text-gray-600 transition-colors font-bold text-lg">
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="w-12 text-center font-bold text-gray-800 text-base">{qty}</span>
                  <button onClick={() => setQty((q) => q + 1)}
                    className="w-11 h-11 flex items-center justify-center hover:bg-gray-50 text-gray-600 transition-colors">
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
                <Button variant="gold" size="lg" className="flex-1 text-base" onClick={handleAdd}>
                  <ShoppingCart className="w-4 h-4" />
                  Add to Cart · {formatPrice(product.price * qty)}
                </Button>
              </div>

              <Link href="/checkout" onClick={handleAdd}>
                <Button variant="primary" size="lg" className="w-full mb-5">
                  ⚡ Buy Now — Instant Checkout
                </Button>
              </Link>

              {/* Trust strip */}
              <div className="grid grid-cols-3 gap-3 pt-5 border-t border-gray-100">
                {[
                  { icon: <Shield className="w-4 h-4" />, text: "Quality Guaranteed" },
                  { icon: <Truck className="w-4 h-4" />, text: "Free Ship >Rs.2K" },
                  { icon: <RefreshCw className="w-4 h-4" />, text: "7-Day Returns" },
                ].map((t) => (
                  <div key={t.text} className="flex items-center gap-1.5 text-[#1B4332]">
                    <div className="flex-shrink-0">{t.icon}</div>
                    <span className="text-xs font-medium text-gray-600">{t.text}</span>
                  </div>
                ))}
              </div>

              {/* Payment methods */}
              <div className="mt-4 pt-4 border-t border-gray-100">
                <p className="text-xs text-gray-400 mb-2">We Accept:</p>
                <div className="flex flex-wrap gap-1.5">
                  {["COD", "Easypaisa", "JazzCash", "Stripe", "Bank Transfer"].map((pm) => (
                    <span key={pm} className="text-[10px] px-2.5 py-1 bg-gray-100 text-gray-500 rounded-sm font-medium">{pm}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-sm border border-gray-100 mb-8 shadow-sm">
          <div className="flex border-b border-gray-100 overflow-x-auto">
            {(["description", "nutrition", "reviews"] as const).map((tab) => (
              <button key={tab} onClick={() => setActiveTab(tab)}
                className={`px-6 py-4 text-sm font-medium capitalize border-b-2 whitespace-nowrap transition-colors ${activeTab === tab ? "border-[#1B4332] text-[#1B4332]" : "border-transparent text-gray-400 hover:text-gray-700"}`}>
                {tab} {tab === "reviews" && `(${product.reviewCount})`}
              </button>
            ))}
          </div>

          <div className="p-6 md:p-8">
            {activeTab === "description" && (
              <div className="space-y-4 text-gray-600 text-sm leading-relaxed max-w-3xl">
                <p className="text-base leading-relaxed">{product.description}</p>
                <div className="mt-6">
                  <h4 className="font-serif font-bold text-[#1B4332] text-base mb-3">Key Benefits:</h4>
                  <ul className="space-y-2">
                    {product.benefits.map((b) => (
                      <li key={b} className="flex items-center gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-[#D4AF37] flex-shrink-0" />{b}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-6 p-4 bg-[#FAF9F6] rounded-sm border border-gray-100">
                  <p className="text-xs font-bold text-[#1B4332] mb-2 uppercase tracking-wider">Storage & Sourcing</p>
                  <div className="grid grid-cols-2 gap-2 text-xs text-gray-500">
                    <span>📍 Origin: {product.origin}</span>
                    <span>⚖️ Weight: {product.weight}{product.unit}</span>
                    <span>🏷️ SKU: {product.sku}</span>
                    <span>🌿 {product.isOrganic ? "100% Organic" : "Naturally Grown"}</span>
                  </div>
                  <p className="text-xs text-gray-400 mt-2">Store in a cool, dry place away from sunlight. Refrigerate after opening for maximum freshness (up to 6 months).</p>
                </div>
              </div>
            )}

            {activeTab === "nutrition" && (
              <div className="max-w-2xl">
                <h4 className="font-serif font-bold text-[#1B4332] text-base mb-2">Nutritional Information</h4>
                <p className="text-xs text-gray-400 mb-5">Per 100g serving · Values are approximate</p>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
                  {[
                    { label: "Calories", value: "579 kcal", icon: "🔥" },
                    { label: "Protein", value: "21g", icon: "💪" },
                    { label: "Total Fat", value: "50g", icon: "🥑" },
                    { label: "Carbs", value: "22g", icon: "🌾" },
                    { label: "Fiber", value: "12g", icon: "🌿" },
                    { label: "Vitamin E", value: "26mg", icon: "✨" },
                    { label: "Calcium", value: "264mg", icon: "🦴" },
                    { label: "Iron", value: "3.7mg", icon: "⚡" },
                  ].map((n) => (
                    <div key={n.label} className="bg-[#FAF9F6] p-3 rounded-sm text-center border border-gray-100">
                      <div className="text-xl mb-1">{n.icon}</div>
                      <p className="font-bold text-[#1B4332] text-sm">{n.value}</p>
                      <p className="text-xs text-gray-500">{n.label}</p>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-gray-400">* Nutritional values are approximate. Consult a healthcare professional for specific dietary guidance.</p>
              </div>
            )}

            {activeTab === "reviews" && (
              <div className="max-w-3xl">
                {/* Rating summary */}
                <div className="flex items-center gap-8 mb-8 p-5 bg-[#FAF9F6] rounded-sm border border-gray-100">
                  <div className="text-center">
                    <div className="font-display text-6xl font-bold text-[#1B4332]">{product.rating}</div>
                    <div className="flex justify-center gap-0.5 my-2">
                      {[...Array(5)].map((_, i) => <Star key={i} className={`w-5 h-5 ${i < Math.floor(product.rating) ? "fill-[#D4AF37] text-[#D4AF37]" : "text-gray-200"}`} />)}
                    </div>
                    <p className="text-xs text-gray-400">{product.reviewCount} verified reviews</p>
                  </div>
                  <div className="flex-1 space-y-2">
                    {[5, 4, 3, 2, 1].map((s) => (
                      <div key={s} className="flex items-center gap-3">
                        <span className="text-xs text-gray-500 w-3">{s}</span>
                        <Star className="w-3 h-3 fill-[#D4AF37] text-[#D4AF37]" />
                        <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                          <div className="h-full bg-[#D4AF37] rounded-full transition-all"
                            style={{ width: s === 5 ? "72%" : s === 4 ? "18%" : s === 3 ? "6%" : s === 2 ? "3%" : "1%" }} />
                        </div>
                        <span className="text-xs text-gray-400 w-8">
                          {s === 5 ? "72%" : s === 4 ? "18%" : s === 3 ? "6%" : s === 2 ? "3%" : "1%"}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Individual reviews */}
                <div className="space-y-5">
                  {[
                    { name: "Ayesha R.", city: "Karachi", date: "Dec 10, 2024", rating: 5, verified: true, comment: "Absolutely amazing quality! The freshness is unmatched. I've tried many brands but this is genuinely on another level. You can taste the mountain freshness in every bite. Will definitely reorder!" },
                    { name: "Hassan M.", city: "Lahore", date: "Dec 5, 2024", rating: 5, verified: true, comment: "Best nuts I've ever had. The packaging is premium and delivery was super fast — arrived in 2 days. My whole family loves these. Highly recommend to anyone who cares about quality." },
                    { name: "Sara K.", city: "Islamabad", date: "Nov 28, 2024", rating: 4, verified: true, comment: "Very good quality, slightly expensive but absolutely worth it for the quality. The difference from supermarket nuts is night and day. Will keep ordering regularly." },
                    { name: "Dr. Imran A.", city: "Peshawar", date: "Nov 20, 2024", rating: 5, verified: true, comment: "As a nutritionist I always recommend my patients to eat natural nuts. Chitral Natural Nuts delivers exactly what they promise — pure, natural, and incredibly nutritious." },
                  ].map((r, i) => (
                    <div key={i} className="border-b border-gray-100 pb-5 last:border-0">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-[#1B4332] text-[#D4AF37] rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                            {r.name[0]}
                          </div>
                          <div>
                            <p className="font-semibold text-gray-800 text-sm">{r.name}</p>
                            <p className="text-xs text-gray-400">{r.city} · {r.date}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-1">
                          <div className="flex gap-0.5">
                            {[...Array(r.rating)].map((_, j) => <Star key={j} className="w-3.5 h-3.5 fill-[#D4AF37] text-[#D4AF37]" />)}
                          </div>
                        </div>
                      </div>
                      <p className="text-sm text-gray-600 leading-relaxed">{r.comment}</p>
                      {r.verified && (
                        <p className="text-xs text-green-600 font-medium mt-2 flex items-center gap-1">
                          <CheckCircle className="w-3 h-3" /> Verified Purchase
                        </p>
                      )}
                    </div>
                  ))}
                </div>

                {/* Write review CTA */}
                <div className="mt-6 p-5 bg-[#1B4332] text-white rounded-sm text-center">
                  <p className="font-serif font-semibold mb-1">Have you tried this product?</p>
                  <p className="text-white/70 text-xs mb-3">Share your experience and help other customers.</p>
                  <button className="bg-[#D4AF37] text-[#0D2818] font-semibold px-5 py-2 rounded-sm text-sm hover:bg-[#E8CC6A] transition-colors">
                    Write a Review
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Related Products */}
        {related.length > 0 && (
          <div>
            <div className="flex items-center justify-between mb-5">
              <h2 className="font-display text-2xl font-bold text-[#1B4332]">You May Also Like</h2>
              <Link href="/shop" className="text-sm text-[#1B4332] hover:text-[#D4AF37] font-medium transition-colors">View All →</Link>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {related.map((p) => (
                <Link key={p.id} href={`/products/${p.slug}`}
                  className="group bg-white rounded-sm border border-gray-100 hover:border-[#D4AF37]/40 hover:shadow-md transition-all overflow-hidden">
                  <div className="aspect-square bg-gradient-to-br from-[#FAF9F6] to-[#F0EDE6] flex items-center justify-center text-5xl">
                    {EMOJI_MAP[p.category] || "🥜"}
                  </div>
                  <div className="p-3">
                    <p className="text-sm font-serif font-semibold text-gray-800 group-hover:text-[#1B4332] transition-colors line-clamp-1">{p.name}</p>
                    <div className="flex items-center justify-between mt-1.5">
                      <p className="font-bold text-[#1B4332] text-sm">{formatPrice(p.price)}</p>
                      <div className="flex items-center gap-0.5">
                        <Star className="w-3 h-3 fill-[#D4AF37] text-[#D4AF37]" />
                        <span className="text-xs text-gray-400">{p.rating}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
