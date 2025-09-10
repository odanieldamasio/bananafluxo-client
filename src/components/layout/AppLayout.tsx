import React from "react";
import Sidebar from "@/components/sidebar/Sidebar";
export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex ">
      <Sidebar />
      <main className="bg-gray-50 min-h-screen w-full">
        <div className="max-w-[1530px] mx-auto grid p-6">
          {children}
        </div>
      </main>
    </div>
  );
}
