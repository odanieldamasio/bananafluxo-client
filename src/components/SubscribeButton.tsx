"use client";

import { useSession } from "next-auth/react";
import { startSubscription } from "@/utils/stripe";

export default function SubscribeButton({ priceId }: { priceId: string }) {
  const { data: session } = useSession();

  const handleClick = async () => {
    if (!session?.accessToken) return alert("Faça login primeiro");
    try {
      await startSubscription(priceId, session.accessToken);
    } catch (err) {
      console.error(err);
      alert("Erro ao iniciar assinatura");
    }
  };

  return (
    <button
      onClick={handleClick}
      className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
    >
      Assinar 💳
    </button>
  );
}
