"use client";

import { a } from "framer-motion/client";
import { useEffect, useState } from "react";

type Transaction = {
  id: string;
  type: "INCOME" | "EXPENSE";
  description?: string;
  totalAmount: number | string;
  installments: number;
  createdAt: string;
}

export function useTransactions() {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function fetchTransactions() {
    setLoading(true);

    try {
      const response = await fetch("/api/transactions");
      const data = await response.json();
      setTransactions(data);
    } catch (err: any) {
      setError(err.message || "Erro ao carregar as transações");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchTransactions();
  }, []);

  return {
    transactions,
    loading,
    error,
    fetchTransactions,
  };
}
