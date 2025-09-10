import ProtectedPage from "@/components/auth/ProtectedPage";
import AppLayout from "@/components/layout/AppLayout";
import PrimaryTitle from "@/components/title/PrimaryTitle";
import React from "react";
import { HiPlus } from "react-icons/hi";
import Button from "@/components/button/Button";
import Table from "@/components/table/Table";
import { TableHeader, ColumnHeader } from "@/components/table/TableHeader";
import { TableRow } from "@/components/table/TableRow";
import { TableCell } from "@/components/table/TableCell";
import Pagination from "@/components/table/Pagination";

// Tipagem baseada no model Prisma
type Transaction = {
  id: string;
  type: "INCOME" | "EXPENSE";
  description?: string;
  totalAmount: number;
  installments: number;
  createdAt: string;
};

const transactions: Transaction[] = [
  {
    id: "1",
    type: "INCOME",
    description: "Salário",
    totalAmount: 4500.0,
    installments: 1,
    createdAt: "2025-09-01",
  },
  {
    id: "2",
    type: "EXPENSE",
    description: "Aluguel",
    totalAmount: 1200.0,
    installments: 1,
    createdAt: "2025-09-05",
  },
  {
    id: "3",
    type: "EXPENSE",
    description: "Cartão de Crédito",
    totalAmount: 600.0,
    installments: 3,
    createdAt: "2025-09-07",
  },
];

export default function TransactionsPage() {
  return (
    <ProtectedPage>
      <AppLayout>
        <PrimaryTitle title="Movimentações" />
        <div className="flex mb-4">
          <Button
            icon={HiPlus}
            href="/transactions/new"
            label="Adicionar Nova Movimentação"
            bgColor="bg-green-500"
            textColor="text-white"
          />
        </div>

        <Table title="Histórico de movimentações">
          <TableHeader>
            <ColumnHeader label="ID" />
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
                <TableCell>{tx.id}</TableCell>
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
                  R$ {tx.totalAmount.toFixed(2).replace(".", ",")}
                </TableCell>
                <TableCell>{tx.installments}</TableCell>
                <TableCell>
                  {new Date(tx.createdAt).toLocaleDateString("pt-BR")}
                </TableCell>
                <TableCell className="flex gap-3 justify-end">
                  <a
                    href={`/transactions/${tx.id}/edit`}
                    className="text-sm font-semibold text-blue-600"
                  >
                    Editar
                  </a>
                  <a
                    href={`/transactions/${tx.id}`}
                    className="text-sm font-semibold text-slate-600"
                  >
                    Ver
                  </a>
                </TableCell>
              </TableRow>
            ))}
          </tbody>

          <tfoot>
            <tr>
              {/* <td colSpan={7}>
                <Pagination
                  currentPage={1}
                  totalPages={3}
                  onPageChange={() => {}}
                />
              </td> */}
            </tr>
          </tfoot>
        </Table>
      </AppLayout>
    </ProtectedPage>
  );
}
