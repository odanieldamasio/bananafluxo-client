// src/hooks/useAuthGuard.ts
"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export function useAuthGuard() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log("Status:", status, "Session:", session);

    if (status === "loading") return;

    if (!session?.accessToken) {
      router.push("/login");
    } else {
      // aqui você força o skeleton aparecer por 2s antes de carregar a tela
      // setTimeout(() => setLoading(false), 2000);
      setLoading(false);
    }
  }, [status, session, router]);

  return { session, loading };
}
