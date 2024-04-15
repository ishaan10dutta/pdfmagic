import { handleAuth } from "@kinde-oss/kinde-auth-nextjs/server";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest, { params }: any) {
  const endpoint = params.kindeAuth;
  const handleAuthFn = handleAuth(request, endpoint);
  return await handleAuthFn(request, NextResponse) as Promise<void | Response>;
}
