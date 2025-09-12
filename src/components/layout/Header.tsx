"use client";
import { HiOutlineMenu, HiOutlineUser } from "react-icons/hi";
import Image from "next/image";

type HeaderProps = {
  title: string;
  onMenuClick?: () => void; // para abrir sidebar no mobile
  actions?: React.ReactNode; // botões extras (adicionar, filtros, etc)
};

export default function Header({ title, onMenuClick, actions }: HeaderProps) {
  return (
    <header className="w-full bg-white border-b border-slate-200 px-4 py-3 flex items-center justify-between shadow-sm">
      {/* Botão menu (mobile) + título */}
      <div className="flex items-center gap-3">
        <button
          onClick={onMenuClick}
          className="md:hidden text-slate-700 hover:text-slate-900 p-2 rounded-md hover:bg-slate-100"
        >
          <HiOutlineMenu size={24} />
        </button>
        <div className="md:hidden flex justify-between items-center">
          <Image
            src="/imgs/logo-black.svg"
            alt="Logo BananaFluxo"
            width={166}
            height={40}
            className="object-contain block max-w-[166px]"
          />
        </div>
        {/* <h1 className="text-lg md:text-xl font-semibold text-slate-800">
          {title}
        </h1> */}
      </div>

      {/* Ações extras */}
      <div className="flex items-center gap-4">
        {actions}

        {/* Avatar */}
        <div className="h-8 w-8 flex items-center justify-center rounded-full overflow-hidden border border-slate-300 shadow-sm">
          <HiOutlineUser size={24} />
        </div>
      </div>
    </header>
  );
}
