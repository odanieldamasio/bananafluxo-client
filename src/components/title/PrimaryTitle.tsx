type PrimaryTitleProps = {
  title: string;
};

export default function PrimaryTitle({ title }: PrimaryTitleProps) {
  return <h1 className="text-2xl font-medium text-[#2E2E2E] mb-4">{title}</h1>;
}
