import { NextResponse } from "next/server";
// import { notFound } from "next/navigation";
import { authGuard } from "../services/user-login";
export async function middleware(req) {
  // const { pathname, searchParams } = req.nextUrl;
  const cookie = req.cookies.get("token");
  if (cookie) {
    const login = await authGuard(cookie.value);
    if (login?.message == "User Authorized") {
      return NextResponse.next();
    }
  }
  // const referrer = req.headers.get("referer") || "/";
  // const redirectTo = new URL(referrer, req.url);
  // redirectTo.searchParams.set("error", "unauthorized");
  // redirectTo.searchParams.set(
  //   "originalUrl",
  //   pathname + searchParams.toString()
  // );
  // return NextResponse.redirect(redirectTo);
  return NextResponse.rewrite(new URL("/404", req.url));
}

export const config = {
  matcher: [
    "/my-account/:path*",
    "/market-place/:path*",
    "/cart/:path*",
    "/shipping/:path*",
    "/contact-us",
  ],
};
