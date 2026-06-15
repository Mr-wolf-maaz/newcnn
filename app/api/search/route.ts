import { NextResponse } from "next/server";
import { PRODUCTS, BLOG_POSTS } from "@/lib/data";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get("q")?.toLowerCase() || "";
  if (query.length < 2) return NextResponse.json({ products: [], blogs: [], total: 0 });

  const products = PRODUCTS.filter((p) =>
    p.name.toLowerCase().includes(query) ||
    p.category.toLowerCase().includes(query) ||
    p.tags.some((t) => t.includes(query)) ||
    p.description.toLowerCase().includes(query)
  ).slice(0, 8).map((p) => ({ id: p.id, name: p.name, slug: p.slug, price: p.price, category: p.category, rating: p.rating }));

  const blogs = BLOG_POSTS.filter((b) =>
    b.title.toLowerCase().includes(query) ||
    b.excerpt?.toLowerCase().includes(query) ||
    b.tags.some((t) => t.includes(query))
  ).slice(0, 3).map((b) => ({ id: b.id, title: b.title, slug: b.slug, category: b.category }));

  return NextResponse.json({ products, blogs, total: products.length + blogs.length });
}
