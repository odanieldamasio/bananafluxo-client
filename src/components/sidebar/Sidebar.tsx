"use client";
import Image from "next/image";


import { HiOutlineHome } from "react-icons/hi2";
import { SidebarButtonLogout } from "./SidebarButtonLogout";
import SidebarItem from "./SidebarItem";
import { HiOutlineArchive, HiOutlineLogin } from "react-icons/hi";

export default function Sidebar() {
  return (
    <aside className="h-screen w-80 bg-[#0B1437] flex flex-col">
      <div className="block relative h-10 mb-4 px-4 py-3">
        <Image
          src="/imgs/logo-white.svg"
          alt="Logo BananaFluxo"
          width={166}
          height={40}
          className="object-contain block max-w-[166px]"
        />
      </div>
      <SidebarItem href="/dashboard" icon={HiOutlineHome} label="Visão geral" />
      <SidebarButtonLogout />
    </aside>
  );
}
