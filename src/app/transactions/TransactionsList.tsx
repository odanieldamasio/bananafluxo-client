"use client";

import Button from "@/components/button/Button";
import Table from "@/components/table/Table";
import { TableCell } from "@/components/table/TableCell";
import { ColumnHeader, TableHeader } from "@/components/table/TableHeader";
import { TableRow } from "@/components/table/TableRow";
import { HiEye, HiPencil } from "react-icons/hi";

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

export default function TransactionsList({
  transactions,
}: TransactionsListProps) {
  return (
    <Table title="Histórico de movimentações">
      <TableHeader>
        <ColumnHeader label="Tipo" />
        <ColumnHeader label="Descrição" />
        <ColumnHeader label="Valor" />
        <ColumnHeader label="Parcelas" />
        <ColumnHeader label="Data" />
        <ColumnHeader label="Ações" className="text-center" />
      </TableHeader>

      <tbody>
        {transactions.map((tx) => (
          <TableRow key={tx.id}>
            <TableCell>
              <span
                className={`px-2 py-1 text-xs font-semibold rounded ${
                  tx.type === "INCOME"
                    ? "bg-green-100 text-green-700"
                    : "bg-red-100 text-red-700"
                }`}
              >
                {tx.type === "INCOME" ? "Renda" : "Despesa"}
              </span>
            </TableCell>
            <TableCell>{tx.description ?? "-"}</TableCell>
            <TableCell>
              R$ {(Number(tx.totalAmount) || 0).toFixed(2).replace(".", ",")}
            </TableCell>
            <TableCell>{tx.installments}</TableCell>
            <TableCell>
              {new Date(tx.createdAt).toLocaleDateString("pt-BR")}
            </TableCell>
            <TableCell className="flex flex-row gap-2 justify-end">
              <Button
                icon={HiPencil}
                href={`/transactions/${tx.id}/edit`}
                label="Editar"
                bgColor="bg-blue-800"
                textColor="text-white"
              />
              <Button
                icon={HiEye}
                href={`/transactions/${tx.id}`}
                label="Ver Detalhes"
                bgColor="bg-gray-500"
                textColor="text-white"
              />
            </TableCell>
          </TableRow>
        ))}
      </tbody>
    </Table>
  );
}
