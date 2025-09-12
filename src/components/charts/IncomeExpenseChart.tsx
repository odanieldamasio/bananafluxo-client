"use client";

import dynamic from "next/dynamic";
import { ApexOptions } from "apexcharts";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

type IncomeExpenseChartProps = {
  labels: string[];
  income: number[];
  expense: number[];
};

export default function IncomeExpenseChart({
  labels,
  income,
  expense,
}: IncomeExpenseChartProps) {
  const series = [
    {
      name: "Renda",
      data: income,
    },
    {
      name: "Despesa",
      data: expense,
    },
  ];

  const options: ApexOptions = {
    chart: {
      type: "area",
      height: 350,
      toolbar: { show: false },
      zoom: { enabled: false },
      fontFamily: "Poppins, sans-serif",
      background: "transparent",
      offsetX: 0,
      offsetY: 0,
    },
    title: {
      text: "Movimentações (6 meses)",
      align: "left",
      style: {
        fontSize: "16px",
        fontWeight: "00",
        color: "#374151",
        fontFamily: "Poppins",
      },
    },
    stroke: {
      curve: "smooth",
      width: 3,
    },
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.4,
        opacityTo: 0,
        stops: [0, 100],
      },
    },
    markers: {
      size: 0,
      hover: { size: 6 },
    },
    xaxis: {
      categories: labels,
      axisBorder: { show: false },
      axisTicks: { show: false },
      labels: {
        style: {
          fontFamily: "Poppins",
          fontSize: "12px",
          colors: "#2E2E2E",
        },
      },
    },
    yaxis: {
      labels: {
        style: {
          fontFamily: "Poppins",
          fontSize: "12px",
          colors: "#6b7280",
        },
      },
      min: 0,
    },
    grid: {
      show: true,
      borderColor: "#e5e7eb",
      strokeDashArray: 0,
      xaxis: { lines: { show: false } },
      yaxis: { lines: { show: true } },
      padding: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
      },
    },
    tooltip: {
      theme: "light",
      marker: { show: true },
      x: { show: true },
      y: {
        formatter: (val: number) => `R$ ${val.toLocaleString("pt-BR")}`,
      },
    },
    legend: {
      position: "bottom",
      horizontalAlign: "right",
      fontFamily: "Poppins",
      labels: { colors: "#374151" },
    },
    colors: ["#22c55e", "#ef4444"],
  };

  return (
    <div className="w-full min-h-80 bg-white rounded-lg">
      {/* Adicionei mt-2 ou mt-3 para descer o título */}
      <Chart options={options} series={series} type="area" height="100%" />
    </div>
  );
}
