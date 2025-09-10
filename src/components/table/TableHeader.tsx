import { ReactNode } from "react";

export function TableHeader({ children }: { children: ReactNode }) {
  return (
    <thead>
      <tr className="bg-slate-50">
        {children}
      </tr>
    </thead>
  );
}

export function ColumnHeader({ label, className = "" }: { label: string; className?: string }) {
  return (
    <th className={`p-4 border-b border-slate-300 ${className}`}>
      <p className="block text-sm font-medium text-slate-600">{label}</p>
    </th>
  );
}
