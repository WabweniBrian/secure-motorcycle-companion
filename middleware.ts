import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { verifyToken } from "./lib/auth";

export async function middleware(request: NextRequest) {
  const token = request.cookies.get("smc_session_token")?.value;
  const { pathname, searchParams } = request.nextUrl;

  // Define unprotected routes
  const unprotectedRoutes = ["/login", "/forgot-password", "/reset-password"];

  // Skip middleware for API routes
  if (pathname.startsWith("/api")) {
    return NextResponse.next();
  }

  // Check if the current path is an unprotected route
  const isUnprotectedRoute = unprotectedRoutes.some(
    (route) => pathname === route || pathname.startsWith(`${route}/`)
  );

  // Handle authenticated users
  if (token) {
    const payload = await verifyToken(token);

    if (payload) {
      // If the user is authenticated and trying to access an unprotected route,
      // redirect them to the home page
      if (isUnprotectedRoute) {
        return NextResponse.redirect(new URL("/", request.url));
      }

      // Otherwise, allow access to all protected routes
      return NextResponse.next();
    } else {
      // Invalid token - clear it and continue with unauthenticated flow
      const response = NextResponse.next();
      response.cookies.delete("smc_session_token");
      return response;
    }
  } else {
    // For unauthenticated users

    // Allow access to unprotected routes
    if (isUnprotectedRoute) {
      return NextResponse.next();
    }

    // Redirect to login for all other routes
    const url = new URL("/login", request.url);
    const callbackUrl = `${pathname}${searchParams.toString() ? `?${searchParams.toString()}` : ""}`;
    url.searchParams.set("callbackUrl", callbackUrl);
    return NextResponse.redirect(url);
  }
}

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
