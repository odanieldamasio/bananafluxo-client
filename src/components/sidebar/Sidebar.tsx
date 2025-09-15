"use client";
import Image from "next/image";
import { HiOutlineCurrencyDollar, HiOutlineHome, HiOutlineX } from "react-icons/hi";
import { SidebarButtonLogout } from "./SidebarButtonLogout";
import SidebarItem from "./SidebarItem";

type SidebarProps = {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
};

export default function Sidebar({ isOpen, setIsOpen }: SidebarProps) {
  return (
    <>
      {/* Sidebar */}
      <aside
        className={`
          fixed top-0 z-40 left-0 h-screen w-72 bg-[#0B1437] flex flex-col z-50
          transform transition-transform duration-300
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0 md:fixed
        `}
      >
        {/* Logo + botão fechar (mobile) */}
        <div className="flex justify-between items-center px-4 py-3 border-b border-[#1E274E]">
          <Image
            src="/imgs/logo-white.svg"
            alt="Logo BananaFluxo"
            width={166}
            height={40}
            className="object-contain block max-w-[166px]"
          />
          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(false)}
          >
            <HiOutlineX size={24} />
          </button>
        </div>

        {/* Links */}
        <SidebarItem href="/dashboard" icon={HiOutlineHome} label="Visão geral" />
        <SidebarItem
          href="/transactions"
          icon={HiOutlineCurrencyDollar}
          label="Movimentações"
        />

        {/* Botão logout */}
        <div className="mt-auto">
          <SidebarButtonLogout />
        </div>
      </aside>

      {/* Overlay (mobile) */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/60 z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}
