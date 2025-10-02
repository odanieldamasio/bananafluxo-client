"use client";

import { useSession } from "next-auth/react";
import { ReactNode, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function ProtectedRoute({ children }: { children: ReactNode }) {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "loading") return;
    if (!session) router.push("/login");
  }, [session, status, router]);

  if (status === "loading" || !session ) return <div>Carregando...</div>;

  return <>{children}</>;
}
