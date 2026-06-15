import { NextResponse } from "next/server";

export async function GET() {
  // In production: fetch real stats from DB
  return NextResponse.json({
    revenue: { total: 2400000, thisMonth: 485000, lastMonth: 390000, growth: 24.4 },
    orders: { total: 847, thisMonth: 143, pending: 12, processing: 8, shipped: 23, delivered: 754 },
    customers: { total: 1234, new: 143, returning: 89 },
    products: { total: 24, lowStock: 3, outOfStock: 0 },
    topProducts: [
      { name: "Pine Nuts (Chilgoza)", revenue: 155200, units: 34 },
      { name: "Premium Almonds", revenue: 106700, units: 59 },
      { name: "Mountain Honey", revenue: 87300, units: 35 },
    ],
    recentActivity: [
      { type: "order", message: "New order #CNN-241215-0089 from Karachi", time: "2 minutes ago" },
      { type: "review", message: "5★ review on Premium Almonds", time: "15 minutes ago" },
      { type: "customer", message: "New customer registered: fatima@gmail.com", time: "1 hour ago" },
    ],
  });
}
