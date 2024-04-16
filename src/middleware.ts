import { withAuth } from "@kinde-oss/kinde-auth-nextjs/middleware";

export default withAuth(async function middleware(req: { kindeAuth: any }) {});

export const config = {
  matcher: ["/dashboard/:path*", "/auth-callback"],
};
