"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { trpc } from "../_trpc/client";
import { Loader2 } from "lucide-react";
import { Suspense, useEffect } from "react";

const PageLoader = () => {
  return <Loader2 className="h-8 w-8 animate-spin text-zinc-800" />;
};

const Page = () => {
  const router = useRouter();

  const searchParams = useSearchParams();
  const origin = searchParams.get("origin");

  // Store the query result in a variable
  const { data, error, isSuccess, isError } = trpc.authCallback.useQuery(
    undefined,
    {
      retry: true,
      retryDelay: 500,
    }
  );

  // Handle success in useEffect
  useEffect(() => {
    if (isSuccess && data?.success) {
      router.push(origin ? `/${origin}` : "/dashboard");
    }
  }, [isSuccess, data, router, origin]);

  // Handle error in useEffect
  useEffect(() => {
    if (isError && error.data?.code === "UNAUTHORIZED") {
      router.push("/sign-in");
    }
  }, [isError, error, router]);

  return (
    <Suspense>
      <div className="w-full mt-24 flex justify-center">
        <div className="flex flex-col items-center gap-2">
          <PageLoader />
          <h3 className="font-semibold text-xl">Setting up your account...</h3>
          <p>You will be redirected automatically.</p>
        </div>
      </div>
    </Suspense>
  );
};

export default Page;
