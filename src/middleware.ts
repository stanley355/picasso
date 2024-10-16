import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const token = request.cookies.get("token");

  if (!token?.value) {
    return NextResponse.redirect(new URL("/accounts/login", request.url));
  }
}

// only applies to the following paths
export const config = {
  matcher: ["/accounts", "/accounts/change-password", "/accounts/"],
};
