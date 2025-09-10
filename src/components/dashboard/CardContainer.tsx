export default function CardContainer( { children }: { children: React.ReactNode }) {
    return (
        <div className="p-6 border-[#EBEEEC] border bg-white rounded min-h-[152px]">
            {children}
        </div>
    )
}