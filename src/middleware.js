import { NextResponse } from "next/server";
import { jwtVerify } from "jose";

export async function middleware(request) {
  const token = request.cookies.get("accessToken423798")?.value;
  const { pathname } = request.nextUrl;

  if (pathname === "/login") {
    if (token) {
      try {
        await jwtVerify(
          token,
          new TextEncoder().encode(process.env.JWT_SECRET)
        );
        return NextResponse.redirect(new URL("/life-backend", request.url));
      } catch (error) {
        console.log(error);
        return NextResponse.next();
      }
    }
    return NextResponse.next();
  }

  if (pathname.startsWith("/life-backend")) {
    if (!token) {
      return NextResponse.redirect(new URL("/login", request.url));
    }

    try {
      await jwtVerify(token, new TextEncoder().encode(process.env.JWT_SECRET));
      return NextResponse.next();
    } catch (error) {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/life-backend/:path*", "/login"],
};
