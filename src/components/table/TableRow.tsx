import { ReactNode } from "react";

export function TableRow({ children }: { children: ReactNode }) {
  return <tr className="hover:bg-slate-50">{children}</tr>;
}
