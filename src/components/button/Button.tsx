import Link from "next/link";
import { IconType } from "react-icons";

type buttonProps = {
  href: string;
  icon: IconType;
  label: string;
  textColor?: string;
  bgColor?: string;
};

export default function Button({
  href,
  icon: Icon,
  label,
  textColor,
  bgColor,
}: buttonProps) {
  return (
    <Link
      href={href}
      className={`flex gap-2 ${textColor} ${bgColor} text-sm font-medium px-2 py-2 rounded transition-colors cursor-pointer`}
    >
      <Icon className="w-5 h-5" />
      {label}
    </Link>
  );
}
