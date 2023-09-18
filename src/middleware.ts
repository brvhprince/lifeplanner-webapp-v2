/**
 * Project: lifeplanner-webapp
 * File: middleware.ts
 * Created by pennycodes on 10/08/2023.
 * Copyright lifeplanner-webapp
 */
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import {ConfigValue} from "@/config";
import routes from "@/config/routes";

export function middleware(req: NextRequest) {
    // get auth cookie
    const authCookie = req.cookies.get(ConfigValue.AUTH_TOKEN_KEY);
    // log the cookie
    console.log('authCookie', authCookie);
    // if the cookie is not set, redirect to log in
    if (!authCookie) {
       return NextResponse.redirect(new URL(routes.signIn, req.url));
    }
}

export const config = {

    matcher: [
        /*
      * Match all request paths except for the ones starting with:
      * - auth (Auth routes)
      * - _next/static (static files)
      * - _next/image (image optimization files)
      * - favicon.ico (favicon file)
      */
        "/((?!auth|_next/static|_next/image|images|emojis|favicon.ico).*)",
    ]

}
