import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'


export function middleware(request: NextRequest) {
    const path = request.nextUrl.pathname

    const isPublicPath = path === '/' || path === '/sign-up/company' || path === '/sign-up'

    const token = request.cookies.get('token')?.value || ''

    // if (isPublicPath && token) {
    //     return NextResponse.redirect(new URL('/', request.nextUrl))
    // }

    if (!isPublicPath && !token) {
        return NextResponse.redirect(new URL('/sign-up', request.nextUrl))
    }

}


// See "Matching Paths" below to learn more
export const config = {
    matcher: [
        '/',
        '/sign-up/:path*',
        '/mentors',
        '/jobs',
        '/compete',
        '/profile'
    ]
}
