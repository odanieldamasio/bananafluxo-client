"use client";

import AppLayout from "@/components/layout/AppLayout";
import { useTransactions } from "@/hooks/useTransactions";
import DashboardSkeleton from "../dashboard/DashboardSkeleton";
import PageHeader from "@/components/ui/PageHeader";
import TransactionList from "../../components/transactions/TransactionList";
import TransactionsSkeleton from "@/components/transactions/TransactionSkeleton";

export default function TransactionsPage() {
  const { transactions, loading, error } = useTransactions();

  return (
    <AppLayout>
      <PageHeader
        title="Movimentações"
        description="Histórico das suas movimentações financeiras"
        buttonLink="/transactions/create"
        buttonTitle="Nova Movimentação"
      />

      {loading ? (
        <TransactionsSkeleton />
      ) : (
        <TransactionList transactions={transactions} />
      )}
      
    </AppLayout>
  );
}
