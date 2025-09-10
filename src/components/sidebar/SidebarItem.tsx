import Link from "next/link";
import { IconType } from "react-icons";

type SidebarItemProps = {
  href: string;
  icon: IconType;   // o tipo correto dos ícones
  label: string;
};

export default function SidebarItem({ href, icon: Icon, label }: SidebarItemProps) {
  return (
    <Link
      href={href}
      className="flex text-sm items-center gap-2 w-full p-4 transition-colors text-neutral-200 hover:text-yellow-400 font-medium hover:border-r-4"
    >
      <Icon className="w-6 h-6" />
      {label}
    </Link>
  );
}
