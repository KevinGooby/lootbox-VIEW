import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server';
import { authRoutes } from './constants/routing';

export function middleware(req: NextRequest) {
  //TODO: need to check for user info
  const authCookie = req.cookies.get('retailer_user_access_token');

  const url = req.nextUrl.pathname;

  if (!authCookie && authRoutes.includes(url)) {
    const dashboardUrl = new URL('/login', req.url);
    return NextResponse.redirect(dashboardUrl);
  }

  if (authCookie && (url === '/login' || url === '/signup')) {
    const dashboardUrl = new URL('/dashboard', req.url);
    return NextResponse.redirect(dashboardUrl);
  }
}

export const config = {
  // matcher solution for public, api, assets and _next exclusion
  matcher: '/((?!api|static|.*\\..*|_next).*)',
};
