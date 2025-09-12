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
  const labels = ["Abr", "Mai", "Jun", "Jul", "Ago", "Set"];
  const income = [900, 1200, 1100, 1500, 1300, 1400];
  const expense = [400, 500, 600, 700, 550, 650];

  return (
    <ProtectedPage>
      <AppLayout>
        <PrimaryTitle title="Visão Geral" />
        <div className="grid gap-6 grid-cols-1 mb-6 md:grid-cols-2">
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
              labels={labels}
              income={income}
              expense={expense}
            />
          </CardContainer>
        </div>
      </AppLayout>
    </ProtectedPage>
  );
}
