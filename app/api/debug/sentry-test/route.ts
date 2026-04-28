import { NextResponse } from "next/server";

export function GET() {
  if (process.env.NODE_ENV === "production") {
    return NextResponse.json({ ok: false }, { status: 404 });
  }

  throw new Error("Sentry test route triggered from Gateway /api/debug/sentry-test");
}
