import { Search } from "lucide-react";

interface FilterOption {
    label: string;
    options: string[];
}

interface SearchFiltersProps {
    search: string;
    setSearch: (value: string) => void;
    filters: FilterOption[]; // filtros dinámicos
}

export default function SearchFilters({ search, setSearch, filters }: SearchFiltersProps) {
    return (
        <div className="flex flex-col gap-3">
            <p className="text-left">Últimos movimientos registrados</p>

            {/* Buscador */}
            <div className="relative w-full">
                <Search size={18} className="absolute left-3 top-3 text-gray-400 pointer-events-none" />
                <input
                    type="text"
                    placeholder="Buscar..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-full pl-9 pr-3 py-2 border border-gray-300 rounded-full 
                               focus:outline-none focus:border-sky-200 focus:ring-2 focus:ring-sky-100 shadow-md mb-3"
                />
            </div>

            {/* Filtros */}
            <div className="flex flex-wrap gap-3 mb-12">
                {filters.map((filter, index) => (
                    <select
                        key={index}
                        className="border border-gray-300 rounded px-3 py-2 text-sm flex-1 md:flex-none 
                                   focus:outline-none focus:border-sky-200 focus:ring-2 focus:ring-sky-100"
                    >
                        <option>{filter.label}</option>
                        {filter.options.map((option, i) => (
                            <option key={i}>{option}</option>
                        ))}
                    </select>
                ))}
            </div>
        </div>
    );
}
