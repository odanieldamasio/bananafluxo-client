"use client";

import React, { useState } from "react";
import AppLayout from "@/components/layout/AppLayout";
import PrimaryTitle from "@/components/title/PrimaryTitle";

export default function SubscribePage() {
  const [loading, setLoading] = useState(false);

  const handleSubscribe = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/subscribe", { method: "POST" });

      if (!res.ok) {
        const text = await res.text();
        console.error("Erro detalhado:", text);
        throw new Error("Erro ao criar sessão de assinatura");
      }

      const data = await res.json();
      if (data.url) {
        window.location.href = data.url; // redireciona para Stripe Checkout
      }
    } catch (err) {
      console.error(err);
      alert("Erro ao iniciar assinatura.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <AppLayout>
      <div className="max-w-3xl mx-auto p-6 flex flex-col items-center justify-center">
        <PrimaryTitle title="Assine o Plano Premium" />

        <p className="text-gray-600 mt-4 text-center">
          Tenha acesso completo a todas as funcionalidades do sistema.
        </p>

        <div className="mt-8 w-full flex flex-col md:flex-row gap-4">
          <div className="flex-1 bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center">
            <h2 className="text-2xl font-bold mb-2">Premium</h2>
            <p className="text-gray-500 mb-4">Acesso completo a todas as funcionalidades</p>
            <p className="text-3xl font-extrabold mb-6">R$ 49,90 / mês</p>

            <button
              onClick={handleSubscribe}
              disabled={loading}
              className={`w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-xl transition-colors ${
                loading ? "opacity-70 cursor-not-allowed" : ""
              }`}
            >
              {loading ? "Redirecionando..." : "Assinar Agora"}
            </button>
          </div>
        </div>

        <p className="text-gray-500 mt-6 text-sm">
          Pagamento seguro via Stripe. Você pode cancelar a qualquer momento.
        </p>
      </div>
    </AppLayout>
  );
}
