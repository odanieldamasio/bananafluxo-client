"use client";

import { notFound, useParams, useRouter } from "next/navigation";
import { useTransaction } from "@/hooks/useTransaction";
import { HiArrowLeft, HiCheck, HiClock } from "react-icons/hi";
import AppLayout from "@/components/layout/AppLayout";
import PageHeader from "@/components/ui/PageHeader";

export default function TransactionDetailsPage() {
  const { id } = useParams();
  const router = useRouter();
  const { transaction, loading } = useTransaction(id as string);

  if (loading) {
    return (
      <AppLayout>
        <div className="flex flex-col gap-5 p-6 animate-pulse">
          <div className="h-10 w-52 bg-gray-300 rounded-lg" />
          <div className="h-28 w-full bg-gray-300 rounded-lg" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="h-20 bg-gray-300 rounded-lg" />
            <div className="h-20 bg-gray-300 rounded-lg" />
            <div className="h-20 bg-gray-300 rounded-lg" />
            <div className="h-20 bg-gray-300 rounded-lg" />
          </div>
        </div>
      </AppLayout>
    );
  }

  if (transaction.status === 404 || !transaction) {
    return notFound();
  }

  return (
    <AppLayout>
      <div className="p-6">
        <PageHeader
          title="Detalhes da Transação"
          buttonLink="/transactions"
          buttonTitle="Voltar"
        />

        {/* Card principal */}
        <div className="rounded border border-gray-200 bg-white p-6 mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <div className="mb-4 sm:mb-0">
              <h2 className="text-xl font-semibold text-gray-800 mb-1">
                {transaction.description || "Sem descrição"}
              </h2>
              <p className="text-gray-500 text-sm">
                {new Date(transaction.createdAt).toLocaleDateString("pt-BR")}
              </p>
            </div>
            <div
              className={`text-2xl font-bold ${
                transaction.type === "INCOME"
                  ? "text-green-600"
                  : "text-red-600"
              }`}
            >
              {transaction.type === "INCOME" ? "+" : "-"} R${" "}
              {Number(transaction.totalAmount).toFixed(2)}
            </div>
          </div>
        </div>

        {/* Detalhes adicionais */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          <div className="rounded border border-gray-200 bg-white p-5">
            <span className="text-sm text-gray-500">Tipo</span>
            <p className="font-medium mt-1">
              {transaction.type === "INCOME" ? "Receita" : "Despesa"}
            </p>
          </div>
          <div className="rounded border border-gray-200 bg-white p-5">
            <span className="text-sm text-gray-500">Parcelas</span>
            <p className="font-medium mt-1">{transaction.installments || 1}</p>
          </div>
          <div className="rounded border border-gray-200 bg-white p-5">
            <span className="text-sm text-gray-500">Criado em</span>
            <p className="font-medium mt-1">
              {new Date(transaction.createdAt).toLocaleString("pt-BR")}
            </p>
          </div>
          <div className="rounded border border-gray-200 bg-white p-5">
            <span className="text-sm text-gray-500">Categoria</span>
            <p className="font-medium mt-1">
              {transaction.category || "Não definida"}
            </p>
          </div>
        </div>

        {/* Parcelas */}
        {transaction.installmentsList &&
          transaction.installmentsList.length > 0 && (
            <div className="rounded border border-gray-200 bg-white overflow-hidden">
              <div className="p-6 border-b border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900">
                  Parcelas a Pagar
                </h3>
                <p className="text-sm text-gray-500 mt-1">
                  Acompanhe o status de cada parcela abaixo.
                </p>
              </div>

              <div className="overflow-x-auto">
                <table className="min-w-full text-sm text-gray-800">
                  <thead>
                    <tr className="bg-gray-50 border-b text-gray-600">
                      <th className="px-6 py-3 text-left font-medium">#</th>
                      <th className="px-6 py-3 text-left font-medium">
                        Status
                      </th>
                      <th className="px-6 py-3 text-left font-medium">Valor</th>
                      <th className="px-6 py-3 text-left font-medium">
                        Vencimento
                      </th>
                      <th className="px-6 py-3 text-right font-medium">Ação</th>
                    </tr>
                  </thead>
                  <tbody>
                    {transaction.installmentsList.map(
                      (parcel: any, i: number) => (
                        <tr
                          key={parcel.id}
                          className="border-b hover:bg-gray-50 transition-colors"
                        >
                          <td className="px-6 py-3">{i + 1}</td>
                          <td className="px-6 py-3 flex items-center gap-2">
                            {parcel.status === "Pago" ? (
                              <HiCheck className="w-4 h-4 text-green-500" />
                            ) : (
                              <HiClock className="w-4 h-4 text-yellow-500" />
                            )}
                            <span>{parcel.status}</span>
                          </td>
                          <td className="px-6 py-3 font-semibold">
                            R$ {Number(parcel.amount).toFixed(2)}
                          </td>
                          <td className="px-6 py-3">
                            {new Date(parcel.dueDate).toLocaleDateString(
                              "pt-BR"
                            )}
                          </td>
                          <td className="px-6 py-3 text-right">
                            {parcel.status !== "Pago" ? (
                              <button className="px-4 py-1.5 text-sm font-medium text-white bg-emerald-600 hover:bg-emerald-700 rounded-lg">
                                Pagar
                              </button>
                            ) : (
                              <span className="text-green-600 font-medium">
                                ✔
                              </span>
                            )}
                          </td>
                        </tr>
                      )
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          )}
      </div>
    </AppLayout>
  );
}
