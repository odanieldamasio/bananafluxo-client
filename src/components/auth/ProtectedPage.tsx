"use client";

import { useSession } from "next-auth/react";
import { ReactNode, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function ProtectedRoute({ children }: { children: ReactNode }) {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
    }
  }, [status, router]);

  if (status === "loading" || !session ) {
    return (
     <div className="h-screen w-screen flex items-center justify-center bg-gray-50">
       <div className="w-10 h-10 border-4 border-gray-300 border-t-[#0a1033] rounded-full animate-spin" />
     </div>
   );
  }

  return <>{children}</>;
}
