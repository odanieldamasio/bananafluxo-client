import { useState, useEffect } from "react";

export function useTransaction(id?: string) {
  const [transaction, setTransaction] = useState<any | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;
    const fetchTransaction = async () => {
      try {
        const res = await fetch(`/api/transactions/${id}`);
        const json = await res.json();
        setTransaction(json);
      } catch (err) {
        console.error("Erro ao buscar transação:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchTransaction();
  }, [id]);

  return { transaction, loading };
}