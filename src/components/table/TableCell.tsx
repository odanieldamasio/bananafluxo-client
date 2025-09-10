import { ReactNode } from "react";

export function TableCell({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <td className={`p-4 border-b border-slate-200 ${className}`}>
      <div className="block text-sm text-slate-800">{children}</div>
    </td>
  );
}
