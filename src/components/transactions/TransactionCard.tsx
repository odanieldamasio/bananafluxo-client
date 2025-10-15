"use client";

import { HiArrowRight, HiEye } from "react-icons/hi";
import Button from "../ui/Button";

type Transaction = {
  id: string;
  type: "INCOME" | "EXPENSE";
  description?: string;
  totalAmount: number | string;
  installments: number;
  createdAt: string;
};

interface TransactionCardProps {
  transaction: Transaction;
}

export default function TransactionCard({
  transaction,
}: TransactionCardProps) {
  return (
    <div className="bg-relative flex flex-col w-full h-full overflow-auto p-6 border-[#EBEEEC] border bg-white rounded bg-clip-border">
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
        {/* Esquerda */}
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <h3 className="font-semibold text-gray-900 text-base">
              Product Catalog Sync
            </h3>
            <div className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold ${transaction.type == "INCOME" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800" }`}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-3 h-3 mr-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M22 11.08V12a10 10 0 1 1-5.93-9.14M9 11l3 3L22 4"
                />
              </svg>
              {transaction.type === "INCOME" ? "Entrada" : "Saída"}
            </div>
          </div>

          <p className="text-sm text-gray-600 mb-4">
           {transaction.description || 'Sem descrição'}
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm">
            <div>
              <span className="text-gray-500">Valor total</span>
              <div className="font-medium">{transaction.totalAmount}</div>
            </div>
            <div>
              <span className="text-gray-500">N. de Parcelas</span>
              <div className="font-medium">{transaction.installments}</div>
            </div>
            <div>
              <span className="text-gray-500">Status</span>
              <div className="font-medium">Em aberto</div>
            </div>
            <div>
              <span className="text-gray-500">Data de Criação</span>
              <div className="font-medium">{transaction.createdAt}</div>
            </div>
          </div>
        </div>

        {/* Direita */}
        <div className="flex items-center gap-2 self-start sm:self-auto">

          <Button
            icon={HiArrowRight}
            href={`/transactions/${transaction.id}`}
            label="Ver Detalhes"
            bgColor="border border-gray-300 hover:bg-gray-50"
            textColor="text-gray-700"
          />

          {/* <button className="inline-flex items-center justify-center rounded-md p-2 text-gray-600 hover:bg-gray-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <circle cx="12" cy="12" r="1"></circle>
              <circle cx="19" cy="12" r="1"></circle>
              <circle cx="5" cy="12" r="1"></circle>
            </svg>
          </button> */}
        </div>
      </div>
    </div>
  );
}
