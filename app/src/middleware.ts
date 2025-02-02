/**
 * @see https://nextjs.org/docs/app/building-your-application/routing/middleware
 * Функции middleware запускаются перед обработкой определенных маршрутов и полезны, к примеру,
 * для аутентификации или ведения журнала
 */
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname === "/library-example") {
    return NextResponse.rewrite(new URL("/library-example/UI", request.url));
  }
}
