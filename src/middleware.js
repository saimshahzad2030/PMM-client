import { NextResponse } from 'next/server';
import { notFound } from 'next/navigation';
import { autoLogin } from '../services/user-login';
// import Cookies
export async function middleware(req) {
  // Get the pathname of the request
  const { pathname,searchParams } = req.nextUrl;
  const cookie = req.cookies.get("token");
  
  // // If there is a token, validate it
  if (cookie) {
    const login = await autoLogin(cookie.value);
    if (login?.user) {
      return NextResponse.next();
    }
  }
  const referrer = req.headers.get('referer') || '/';
  
  // You can append query parameters to the referrer URL
  const redirectTo = new URL(referrer, req.url);
  redirectTo.searchParams.set('error', 'unauthorized');
  redirectTo.searchParams.set('originalUrl', pathname + searchParams.toString());
  
  return NextResponse.redirect(redirectTo);
  // Redirect to 404 if the token is not valid or missing
  // return NextResponse.redirect(new URL('/404', req.url));
}

// Specify which routes the middleware applies to
export const config = {
  matcher: ['/my-account/:path*',
    '/market-place/:path*',
    '/cart/:path*',
    '/shipping/:path*',

  ], // or ['/your-route*'] for a pattern
};
