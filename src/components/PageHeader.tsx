interface PageHeaderProps {
    title: string;
    subtitle?: string;
}

export default function PageHeader({ title }: PageHeaderProps) {
    return (
        <div className="mb-6">
            <h1 className="italic text-left text-4xl py-6 font-bold text-gray-800">{title}</h1>
        </div>
    );
}
