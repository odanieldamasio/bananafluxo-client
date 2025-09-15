"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

export default function CreateTransactionForm() {
  const API_URL = `${process.env.NEXT_PUBLIC_API_URL}/transactions`;
  const router = useRouter();
  const { data: session } = useSession();

  // Estados do formulário
  const [type, setType] = useState("INCOME");
  const [description, setDescription] = useState("");
  const [totalAmount, setTotalAmount] = useState("");
  const [installments, setInstallments] = useState(1);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!session?.accessToken) {
      alert("Você precisa estar logado");
      return;
    }

    setLoading(true);

    const data = {
      type,
      description,
      totalAmount: parseFloat(totalAmount),
      installments,
    };

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${session.accessToken}`,
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error("Erro ao criar movimentação");

      // Resetar formulário
      setType("INCOME");
      setDescription("");
      setTotalAmount("");
      setInstallments(1);

      // Redirecionar
      router.push("/transactions");
    } catch (error) {
      console.error(error);
      alert("Erro ao enviar os dados");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full p-6 border-[#EBEEEC] border bg-white rounded gap-4 flex flex-col"
    >
      <div className="w-full rounded gap-4 grid">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">Tipo</label>
            <select
              value={type}
              onChange={(e) => setType(e.target.value)}
              className="w-full border border-[#EBEEEC] rounded px-3 py-2 focus:outline-none"
            >
              <option value="INCOME">Receita</option>
              <option value="EXPENSE">Despesa</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Descrição</label>
            <input
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Descrição da movimentação"
              className="w-full border border-[#EBEEEC] rounded px-3 py-2 focus:outline-none"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">
              Valor Total (R$)
            </label>
            <input
              type="number"
              value={totalAmount}
              onChange={(e) => setTotalAmount(e.target.value)}
              placeholder="0.00"
              className="w-full border border-[#EBEEEC] rounded px-3 py-2 focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Parcelas</label>
            <input
              type="number"
              value={installments}
              onChange={(e) => setInstallments(parseInt(e.target.value))}
              min={1}
              className="w-full border border-[#EBEEEC] rounded px-3 py-2 focus:outline-none"
            />
          </div>
        </div>
      </div>

      <button
        type="submit"
        disabled={loading}
        className={`max-w-max ${
          loading
            ? "bg-gray-400 hover:bg-gray-400 cursor-not-allowed"
            : "bg-blue-600 hover:bg-blue-700"
        } text-white text-sm font-medium px-4 py-3 rounded transition-colors ml-auto`}
      >
        {loading ? "Enviando..." : "Salvar Movimentação"}
      </button>
    </form>
  );
}
