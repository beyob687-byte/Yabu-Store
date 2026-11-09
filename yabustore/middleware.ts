import { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export function middleware(request:NextRequest){
 console.log("Middleware running for:", request.nextUrl.pathname)
  return NextResponse.redirect(new URL("/about",request.url))
} 

export const config = {
  matcher: ["/products"],
};