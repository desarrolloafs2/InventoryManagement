import { Search } from "lucide-react";

interface SearchFiltersProps {
    search: string;
    setSearch: (value: string) => void;
}

export default function SearchFilters({ search, setSearch }: SearchFiltersProps) {
    return (
        <div className="mb-6 flex flex-col gap-3">
            <p className="text-left">Últimos movimientos registrados</p>
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

            <div className="flex flex-wrap gap-3 mb-12">
                <select className="border border-gray-300 rounded px-3 py-2 text-sm flex-1 md:flex-none 
                                   focus:outline-none focus:border-sky-200 focus:ring-2 focus:ring-sky-100">
                    <option>Aula</option>
                    <option>Aula 1</option>
                    <option>Aula 2</option>
                </select>

                <select className="border border-gray-300 rounded px-3 py-2 text-sm flex-1 md:flex-none 
                                   focus:outline-none focus:border-sky-200 focus:ring-2 focus:ring-sky-100">
                    <option>Departamento</option>
                    <option>Informática</option>
                    <option>RRHH</option>
                </select>

                <select className="border border-gray-300 rounded px-3 py-2 text-sm flex-1 md:flex-none 
                                   focus:outline-none focus:border-sky-200 focus:ring-2 focus:ring-sky-100">
                    <option>Dispositivo</option>
                    <option>Portátil</option>
                    <option>Ratón</option>
                </select>
            </div>
        </div>
    );
}
