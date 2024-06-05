import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname === "/")
    return NextResponse.next();

  if (pathname.startsWith('/_next/static/') || pathname.includes('.')) {
    return NextResponse.next();
  }

  const token = request.cookies.get('auth_token');
  const publicPaths = ['/login', "/dashboard", '/dashboard/cat-facts'];

  if (!(publicPaths.includes(pathname) || token)) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  return NextResponse.next();
}