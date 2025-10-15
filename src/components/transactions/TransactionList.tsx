"use client";

import TransactionCard from "./TransactionCard";

type Transaction = {
  id: string;
  type: "INCOME" | "EXPENSE";
  description?: string;
  totalAmount: number | string;
  installments: number;
  createdAt: string;
};

interface TransactionsListProps {
  transactions: Transaction[];
}

export default function TransactionList({
  transactions,
}: TransactionsListProps) {
  return (
    <div className="flex flex-col gap-4 w-full h-full">
      {transactions.length === 0 ? (
        <div className="flex flex-1 items-center justify-center p-6 border border-dashed border-gray-300 rounded">
          <p className="text-gray-500">Nenhuma movimentação encontrada.</p>
        </div>
      ) : (
        transactions.map((transaction) => (
          <TransactionCard key={transaction.id} transaction={transaction} />
        ))
      )}
    </div>
  );
}
