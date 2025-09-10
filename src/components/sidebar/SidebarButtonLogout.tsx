import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { HiOutlineLogout } from "react-icons/hi";

export function SidebarButtonLogout() {
    const router = useRouter();

    async function logout() {
        await signOut({
            redirect: false
        })

        router.replace('/login')
    }


    return (
        <button
        onClick={() => logout()}
        className="flex cursor-pointer text-sm items-center gap-2 w-full p-4 transition-colors text-neutral-200 hover:text-yellow-400 font-medium hover:border-r-4"
      >
        <HiOutlineLogout className=" w-6 h-6" />
        Sair
      </button>
    )
} 