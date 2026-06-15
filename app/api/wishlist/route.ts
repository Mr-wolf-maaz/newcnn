import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const userId = searchParams.get("userId");
  if (!userId) return NextResponse.json({ error: "userId required" }, { status: 400 });
  // In production: fetch from DB
  return NextResponse.json({ wishlist: [], total: 0 });
}

export async function POST(request: Request) {
  const { userId, productId } = await request.json();
  if (!userId || !productId) return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  // In production: toggle in DB
  return NextResponse.json({ success: true, action: "added" });
}
