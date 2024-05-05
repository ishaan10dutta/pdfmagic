import React from "react";

export default function Footer() {
  return (
    <footer className="mb-10 px-4 text-center text-black">
      <small className="mb-2 block text-xs">
        &copy; 2024 Ishaan Dutta. All rights reserved.
      </small>
      <p className="text-xs">
        <span className="font-semibold">About this website:</span> Built with
        TypeScript, React & Next.js, Kinde-Auth, tRPC, Tailwind CSS & Shadcn-ui,
        Stripe and OpenAI APIs, and hosted on Vercel.
      </p>
    </footer>
  );
}
