"use client";

import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-gray-50 text-gray-900">
      {/* Código visual similar aos cards e inputs da sua imagem */}
      <div className="max-w-md w-full text-center border border-gray-200 rounded-2xl p-8 bg-white">
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <p className="text-lg mb-6">Oops! A página que você está procurando não foi encontrada.</p>
        
        {/* Botões estilo Kokonut UI */}
        <div className="flex justify-center gap-4">
          <Link href="/dashboard" className="px-6 py-3 rounded-xl bg-black text-white font-medium hover:bg-gray-800 transition">
            Voltar para o Dashboard
          </Link>
        </div>
        
      </div>
    </div>
  );
}
