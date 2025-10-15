import { HiPlus } from "react-icons/hi";
import Button from "./Button";
type PageHeaderProps = {
  title: string;
  description?: string;
  buttonTitle?: string;
  buttonLink?: string;
};
export default function PageHeader({ title, description, buttonTitle, buttonLink }: PageHeaderProps) {
  return (
    <header className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
      <div>
        <h1 className="text-2xl font-medium text-[#2E2E2E] mb-2">{title}</h1>
        {description && <p className="text-[#2E2E2E] mb-4">{description}</p>}
      </div>
      <div className="flex mb-4 justify-end">
        <Button
          icon={HiPlus}
          href={buttonLink}
          label={buttonTitle}
          bgColor="bg-[#0B1437] hover:bg-[#131f5a]"
          textColor="text-white"
        />
      </div>
    </header>
  );
}
