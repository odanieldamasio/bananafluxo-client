"use client";

import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

import AppLayout from "@/components/layout/AppLayout";
import PrimaryTitle from "@/components/title/PrimaryTitle";
import { HiPlus } from "react-icons/hi";
import Button from "@/components/button/Button";
import TransactionsList from "./TransactionsList";

type Transaction = {
  id: string;
  type: "INCOME" | "EXPENSE";
  description?: string;
  totalAmount: number | string;
  installments: number;
  createdAt: string;
};

export default function TransactionsPage() {
  const API_URL = `${process.env.NEXT_PUBLIC_API_URL}/transactions`;
  const { data: session, status } = useSession();
  const router = useRouter();

  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [loading, setLoading] = useState(true);

  // Redireciona para login se não estiver logado
  useEffect(() => {
    if (status === "loading") return;
    if (!session?.accessToken) router.push("/login");
  }, [session, status, router]);

  // Fetch das transações
  useEffect(() => {
    if (status === "loading" || !session?.accessToken) return;

    const fetchTransactions = async () => {
      try {
        const res = await fetch(API_URL, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${session.accessToken}`,
          },
        });

        if (!res.ok) {
          const text = await res.text();
          console.error("Erro detalhado:", text);
          throw new Error(`Erro ao buscar transações: ${res.status}`);
        }

        const data: Transaction[] = (await res.json()).map((tx) => ({
          ...tx,
          totalAmount: Number(tx.totalAmount),
        }));

        setTransactions(data);
      } catch (err) {
        console.error(err);
        alert("Erro ao carregar as transações");
      } finally {
        setLoading(false);
      }
    };

    fetchTransactions();
  }, [session, status, API_URL]);

  if (status === "loading" || loading) return <p>Carregando...</p>;

  return (
    <AppLayout>
      <PrimaryTitle title="Movimentações" />
      <div className="flex mb-4 justify-end">
        <Button
          icon={HiPlus}
          href="/transactions/create"
          label="Adicionar Nova Movimentação"
          bgColor="bg-green-500"
          textColor="text-white"
        />
      </div>

      <TransactionsList transactions={transactions} />
    </AppLayout>
  );
}
