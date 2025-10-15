import Link from "next/link";
import { IconType } from "react-icons";

type buttonProps = {
  href: string;
  icon: IconType;
  label: string;
  textColor?: string;
  bgColor?: string;
  bgColorHover?: string;
};

export default function Button({
  href,
  icon: Icon,
  label,
  textColor,
  bgColor,
}: buttonProps) {
  if (href && label) {
    return (
      <Link
        href={href}
        className={`inline-flex items-center justify-center gap-3 rounded-md text-sm font-medium transition-colors [&_svg]:size-4 [&_svg]:shrink-0  h-10 px-4 py-2 ${textColor} ${bgColor}`}
      >
        <Icon className="w-5 h-5" />
        {label}
      </Link>
    );
  }
}
