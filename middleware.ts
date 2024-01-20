import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { siteConfig } from '@/config/site';
import { auth } from '@/app/auth';

export async function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();

  // if logged in, redirect to /vehicles
  if (request.nextUrl.pathname === '/') {
    const user = (await auth())?.user;
    url.pathname = '/vehicles';
    return user ? NextResponse.redirect(url) : NextResponse.next();
  }

  // if logged out, redirect to /
  if (siteConfig.protectedRoutes.includes(request.nextUrl.pathname)) {
    const user = (await auth())?.user;
    url.pathname = '/';
    return user ? NextResponse.next() : NextResponse.redirect(url);
  }

  // else continue
  return NextResponse.next();
}
