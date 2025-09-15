import { ReactNode } from "react";

type TableProps = {
  title?: string;
  children: ReactNode;
};

export default function Table({ title, children }: TableProps) {
  return (
    <div className="relative flex flex-col w-full h-full overflow-auto p-6 border-[#EBEEEC] border bg-white rounded bg-clip-border">
      <div className="w-full flex justify-between items-center mb-3 mt-1 flex-wrap gap-4">
        {/* Título e subtítulo */}
        <div className="mb-4">
          <h3 className="text-lg font-semibold text-slate-800">{title}</h3>
          <p className="text-slate-500">Visão geral das faturas.</p>
        </div>

        {/* Campo de busca */}
        <div className="flex justify-end w-full md:w-auto">
          <div className="w-full max-w-sm min-w-[200px] relative">
            <div className="relative hidden">
              <input
                className="bg-white w-full pr-11 h-10 pl-3 py-2 bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-400 shadow-sm focus:shadow-md"
                placeholder="Search for invoice..."
              />
              <button
                className="absolute h-8 w-8 right-1 top-1 my-auto px-2 flex items-center bg-white rounded"
                type="button"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={3}
                  stroke="currentColor"
                  className="w-8 h-8 text-slate-600"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="overflow-x-auto mb-4">
        <table className="w-full text-left table-auto min-w-max">
          {children}
        </table>
      </div>
    </div>
  );
}
