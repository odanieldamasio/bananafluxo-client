"use client";

import { useState } from "react";

export default function CardToggle() {
  const [active, setActive] = useState<"receita" | "despesa">("receita");
  return (
    <div className="p-6 border-[#EBEEEC] border bg-white rounded min-h-[152px]">
      {/* Botões do toggle */}
      <div className="flex gap-2 mb-4 bg-gray-100 w-max border rounded  border-[#EBEEEC]">
        <button
          onClick={() => setActive("receita")}
          className={`text-[#2E2E2E] px-4 py-2 rounded-md transition-colors cursor-pointer ${
            active === "receita"
              ? ""
              : "text-gray-500 bg-white"
          }`}
        >
          Receita do Mês
        </button>
        <button
          onClick={() => setActive("despesa")}
          className={`text-[#2E2E2E] px-4 py-2 rounded-md transition-colors cursor-pointer ${
            active === "despesa"
              ? ""
              : "text-gray-500 bg-white"
          }`}
        >
          Despesa do Mês
        </button>
      </div>

      {/* Conteúdo */}
      <div className="text-[#2E2E2E] text-3xl font-semibold">
        {active === "receita" ? "R$ 900,93" : "R$ 400,50"}
      </div>
    </div>
  );
}
