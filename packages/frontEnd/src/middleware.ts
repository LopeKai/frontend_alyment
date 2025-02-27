import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

type AccountType = 'user' | 'admin' | 'seller';

export function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;

    const accountType = request.cookies.get('accountType')?.value as AccountType | undefined; // valor estatico!!!! ate conseguir ter esse valor do back.

    const restrictedRoutes: Record<AccountType, RegExp[]> = {
        admin: [],
        seller: [],
        user: [/^\/home$/],
    };

    const isRestricted = accountType
    ? restrictedRoutes[accountType]?.some((pattern) => pattern.test(pathname))
    : true;

    if (isRestricted) {
        return NextResponse.redirect(new URL('/404', request.url));
    }
    
    return NextResponse.next();
}

export const config = {
    matcher: ['/((?!api|_next|static|favicon.ico).*)'], 
};
