import { NextRequest, NextResponse } from "next/server";

export function middleware(res:NextRequest) {
    if(res.nextUrl.pathname==='/shot'){
        return NextResponse.redirect(new URL('/cart',res.url))
    }
    return NextResponse.redirect(new URL('/',res.url))
}

export const config = {
    matcher:['/back','/shot']
}