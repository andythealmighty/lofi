import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"
import { getToken } from "next-auth/jwt"

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Protected routes that require authentication
  const protectedRoutes = ['/dashboard', '/profile', '/settings', '/booking']
  
  // Check if the current path is protected
  const isProtectedRoute = protectedRoutes.some(route => pathname.startsWith(route))
  
  if (isProtectedRoute) {
    // Check for NextAuth session token
    const token = await getToken({ 
      req: request, 
      secret: process.env.NEXTAUTH_SECRET 
    })
    
    // If no NextAuth token, let the client-side handle localStorage token checks
    // The client-side components will redirect if needed
    if (!token) {
      // Only redirect to signin if this is an initial page load (not a client-side navigation)
      const referer = request.headers.get('referer')
      const isClientSideNavigation = referer && new URL(referer).origin === request.nextUrl.origin
      
      if (!isClientSideNavigation) {
        const signInUrl = new URL('/auth/signin', request.url)
        signInUrl.searchParams.set('callbackUrl', pathname)
        return NextResponse.redirect(signInUrl)
      }
    }
  }

  // Allow the request to continue
  return NextResponse.next()
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder
     */
    '/((?!api|_next/static|_next/image|favicon.ico|public).*)',
  ],
} 