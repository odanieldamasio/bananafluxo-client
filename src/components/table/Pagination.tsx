type PaginationProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};

export default function Pagination({ currentPage, totalPages, onPageChange }: PaginationProps) {
  return (
    <div className="flex items-center justify-between px-4 py-2 border-t border-slate-200 bg-slate-50">
      <button
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
        className="px-3 py-1 text-sm text-slate-600 disabled:text-slate-400"
      >
        Anterior
      </button>
      <span className="text-sm text-slate-600">
        Página {currentPage} de {totalPages}
      </span>
      <button
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
        className="px-3 py-1 text-sm text-slate-600 disabled:text-slate-400"
      >
        Próxima
      </button>
    </div>
  );
}
