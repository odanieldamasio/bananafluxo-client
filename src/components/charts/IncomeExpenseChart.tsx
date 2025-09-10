"use client";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

// Registrar módulos necessários
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

type IncomeExpenseChartProps = {
  income: number[];
  expense: number[];
  labels: string[];
};

export default function IncomeExpenseChart({ income, expense, labels }: IncomeExpenseChartProps) {
  const data = {
    labels,
    datasets: [
      {
        label: "Renda",
        data: income,
        backgroundColor: "rgba(34,197,94,0.8)", // verde forte
        borderRadius: 8,
        barThickness: 40,
      },
      {
        label: "Despesa",
        data: expense,
        backgroundColor: "rgba(239,68,68,0.8)", // vermelho forte
        borderRadius: 8,
        barThickness: 40,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top" as const,
        labels: {
          font: {
            family: "Poppins",
            size: 14,
          },
          color: "#374151",
        },
      },
      title: {
        display: true,
        text: "Renda vs Despesa (Mensal)",
        font: {
          family: "Poppins",
          size: 18,
          weight: "bold" as const,
        },
        color: "#111827",
      },
      tooltip: {
        backgroundColor: "#111827",
        titleFont: { family: "Poppins" },
        bodyFont: { family: "Poppins" },
      },
    },
    scales: {
      x: {
        grid: {
          drawOnChartArea: false,
        },
        ticks: {
          font: { family: "Poppins" },
          color: "#374151",
        },
      },
      y: {
        grid: {
          color: "rgba(0,0,0,0.05)",
        },
        ticks: {
          font: { family: "Poppins" },
          color: "#374151",
        },
      },
    },
  };

  return (
    <div className="w-full h-[400px]">
      <Bar data={data} options={options} />
    </div>
  );
}
