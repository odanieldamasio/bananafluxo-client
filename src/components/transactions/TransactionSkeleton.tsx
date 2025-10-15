"use client";

export default function TransactionSkeleton() {
  const skeletons = Array.from({ length: 3 });

  return (
    <div className="space-y-4">
      {skeletons.map((_, i) => (
        <div
          key={i}
          className="animate-pulse flex flex-col w-full overflow-auto p-6 border border-[#EBEEEC] bg-white rounded"
        >
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
            {/* Esquerda */}
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-4">
                <div className="h-4 w-48 bg-gray-200 rounded"></div>
                <div className="h-5 w-16 bg-gray-200 rounded-full"></div>
              </div>

              <div className="h-3 w-64 bg-gray-100 rounded mb-8"></div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm">
                {[1, 2, 3, 4].map((_, j) => (
                  <div key={j}>
                    <div className="h-3 w-20 bg-gray-200 rounded mb-1"></div>
                    <div className="h-4 w-28 bg-gray-300 rounded"></div>
                  </div>
                ))}
              </div>
            </div>

            {/* Direita */}
            <div className="flex items-center gap-2 self-start sm:self-auto">
              <div className="h-8 w-20 bg-gray-200 rounded-md"></div>
              <div className="h-8 w-8 bg-gray-100 rounded-md"></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
