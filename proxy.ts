import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export default function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname.startsWith("/admin") && process.env.NODE_ENV === "production") {
    const adminSession = request.cookies.get("admin-session");
    if (!adminSession) {
      return NextResponse.redirect(new URL("/login?redirect=/admin", request.url));
    }
  }

  const response = NextResponse.next();
  response.headers.set("X-Content-Type-Options", "nosniff");
  return response;
}

export const config = {
  matcher: ["/admin/:path*"],
};
