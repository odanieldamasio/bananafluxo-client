import ProtectedPage from "@/components/auth/ProtectedPage";
import AppLayout from "@/components/layout/AppLayout";
import PrimaryTitle from "@/components/title/PrimaryTitle";
import CardContainer from "@/components/dashboard/CardContainer";
import React from "react";
import CardToggle from "@/components/dashboard/CardToggle";
import IncomeExpenseChart from "@/components/charts/IncomeExpenseChart";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export default async function DashboardPage() {
  const labels = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun"];
  const renda = [1200, 1400, 1300, 1600, 1500, 1800];
  const despesa = [800, 900, 1100, 1000, 950, 1200];

  return (
    <ProtectedPage>
      <AppLayout>
        <PrimaryTitle title="Visão Geral" />
        <div className="grid gap-6 grid-cols-2 mb-6">
          <CardToggle />
          <CardContainer>
            <p className="text-[#2E2E2E] mb-4">Valores futuros a receber</p>
            <h2 className="text-[#2E2E2E] text-3xl font-semibold">R$ 900,00</h2>
          </CardContainer>
        </div>

        <div
          className={`${poppins.variable} antialiased grid gap-6 grid-cols-1`}
        >
          <CardContainer>
            <IncomeExpenseChart
              income={renda}
              expense={despesa}
              labels={labels}
            />
          </CardContainer>
        </div>
      </AppLayout>
    </ProtectedPage>
  );
}
