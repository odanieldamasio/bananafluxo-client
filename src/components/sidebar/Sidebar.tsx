"use client";
import { signOut } from "next-auth/react";
import Image from "next/image";

import Link from "next/link";
import { HiOutlineLogout } from "react-icons/hi";

import { HiOutlineHome } from "react-icons/hi2";

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
      <Link
        href="/dashboard"
        className="flex text-sm items-center gap-2 w-full p-4 transition-colors text-neutral-200 hover:text-yellow-400 font-medium hover:border-r-4"
      >
        <HiOutlineHome className=" w-6 h-6" />
        Visão geral
      </Link>
      <button
        onClick={() => signOut({ redirect: true, callbackUrl: `/login` })}
        className="flex text-sm items-center gap-2 w-full p-4 transition-colors text-neutral-200 hover:text-yellow-400 font-medium hover:border-r-4"
      >
        <HiOutlineLogout className=" w-6 h-6" />
        Sair
      </button>
    </aside>
  );
}
