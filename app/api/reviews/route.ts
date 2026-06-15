import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const productId = searchParams.get("productId");
  if (!productId) return NextResponse.json({ error: "productId required" }, { status: 400 });
  // In production: fetch from DB with Prisma
  const reviews = [
    { id: "1", productId, userId: "u1", name: "Ayesha R.", city: "Karachi", rating: 5, title: "Absolutely amazing quality!", comment: "The freshness is unmatched. Will definitely reorder!", verified: true, helpful: 12, createdAt: "2024-12-10" },
    { id: "2", productId, userId: "u2", name: "Hassan M.", city: "Lahore", rating: 5, title: "Best nuts I've ever had", comment: "Premium packaging, super fast delivery. My whole family loves these.", verified: true, helpful: 8, createdAt: "2024-12-05" },
    { id: "3", productId, userId: "u3", name: "Sara K.", city: "Islamabad", rating: 4, title: "Very good quality", comment: "Slightly expensive but absolutely worth it for the quality.", verified: true, helpful: 5, createdAt: "2024-11-28" },
  ];
  return NextResponse.json({ reviews, total: reviews.length });
}

export async function POST(request: Request) {
  const { productId, rating, title, comment, name } = await request.json();
  if (!productId || !rating || !comment) return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  if (rating < 1 || rating > 5) return NextResponse.json({ error: "Rating must be between 1 and 5" }, { status: 400 });
  // In production: save to DB
  return NextResponse.json({ success: true, message: "Review submitted! It will appear after approval." });
}
