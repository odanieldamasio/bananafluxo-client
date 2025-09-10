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
      className={`flex gap-3 ${textColor} ${bgColor} text-sm font-medium px-4 py-3 rounded transition-colors cursor-pointer`}
    >
      <Icon className="w-5 h-5" />
      {label}
    </Link>
  );
}
