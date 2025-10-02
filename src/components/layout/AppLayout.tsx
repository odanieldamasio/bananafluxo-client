"use client";

import React, { useState } from "react";
import Sidebar from "@/components/sidebar/Sidebar";
import Header from "@/components/layout/Header";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

interface AppLayoutProps {
  children: React.ReactNode;
}

export default function AppLayout({ children }: AppLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div className="flex min-h-screen overflow-hidden bg-gray-50">
      {/* Sidebar */}
      <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />

      {/* Conteúdo principal */}
      <div className="flex-1 flex flex-col md:ml-72 mt-16">
        {/* Header fixo */}
        <Header
          title="Minhas Transações"
          onMenuClick={() => setSidebarOpen(true)}
        />

        {/* Área de conteúdo */}
        <main className=" flex-1 overflow-y-auto">
          <div className="max-w-[1530px] mx-auto grid p-6">{children}</div>
        </main>
      </div>
    </div>
  );
}
