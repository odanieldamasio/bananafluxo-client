import React from "react";
import Sidebar from "@/components/sidebar/Sidebar";
export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 bg-gray-50 min-h-screen">{children}</main>
    </div>
  );
}
