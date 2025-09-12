"use client";

import React, { useState } from "react";
import Sidebar from "@/components/sidebar/Sidebar";
import Header from "@/components/layout/Header";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />

      {/* Conteúdo principal */}
      <div className="flex-1 flex flex-col">
        {/* Header fixo */}
        <Header
          title="Minhas Transações"
          onMenuClick={() => setSidebarOpen(true)}
          
        />

        {/* Área de conteúdo */}
        <main className="bg-gray-50 flex-1 overflow-y-auto">
          <div className="max-w-[1530px] mx-auto grid p-6">{children}</div>
        </main>
      </div>
    </div>
  );
}
