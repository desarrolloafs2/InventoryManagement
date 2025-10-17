import { useState } from "react";
import {
    Plus,
    UserCheck,
    Search,
    ChevronDown,
    ChevronUp,
    Edit3,
    Trash2,
} from "lucide-react";

interface Device {
    id: number;
    name: string;
    model: string;
    code: string;
    date: string;
    status: string;
    location: string;
    person: string;
    comments?: string;
}

const mockDevices: Device[] = [
    {
        id: 1,
        name: "Portátil",
        model: "Acer",
        code: "154236",
        date: "15/10/25",
        status: "Nuevo",
        location: "RRHH",
        person: "Laura Santana Suárez",
    },
    {
        id: 2,
        name: "Teclado",
        model: "Logitech",
        code: "856236",
        date: "10/10/25",
        status: "Usado",
        location: "Informática",
        person: "Laura Santana Suárez",
        comments: "A este portátil le faltan algunas teclas",
    },
    {
        id: 3,
        name: "Ratón",
        model: "Nilox",
        code: "434236",
        date: "20/10/25",
        status: "Nuevo",
        location: "Telemarketing",
        person: "Laura Santana Suárez",
    },
];

export default function DevicesInUse() {
    const [search, setSearch] = useState("");
    const [expanded, setExpanded] = useState<number | null>(null);

    const toggleExpand = (id: number) => {
        setExpanded(expanded === id ? null : id);
    };

    return (
        <div className="">
            {/* Header */}
            <h1 className="italic text-left text-4xl py-12 font-bold mb-6 text-gray-800">
                ARTÍCULOS EN USO
            </h1>

            {/* Header Buttons */}
            <div className="flex flex-wrap items-center justify-between mb-6">
                <p className="text-gray-600">Últimos movimientos registrados</p>

                <div className="flex gap-3">
                    <button
                        className="flex items-center gap-2 text-white px-4 py-2 rounded-lg text-sm font-medium transition"
                        style={{ backgroundColor: "#5FB7B1" }}
                        onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#4AA29D")}
                        onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#5FB7B1")}
                    >
                        <Plus size={16} />
                        Nuevo Artículo
                    </button>

                    <button
                        className="flex items-center gap-2 text-white px-4 py-2 rounded-lg text-sm font-medium transition"
                        style={{ backgroundColor: "#B1C171" }}
                        onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#9CAE5D")}
                        onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#B1C171")}
                    >
                        <UserCheck size={16} />
                        Asignar Artículo
                    </button>
                </div>
            </div>

            {/* Search + Filtros */}
            <div className="mb-6 flex flex-col gap-3">
                {/* Barra de búsqueda */}
                <div className="relative w-full">
                    <Search
                        size={18}
                        className="absolute left-3 top-3 text-gray-400 pointer-events-none"
                    />
                    <input
                        type="text"
                        placeholder="Buscar..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="w-full pl-9 pr-3 py-2 border border-gray-300 rounded-full 
                                   focus:outline-none focus:border-sky-200 focus:ring-2 focus:ring-sky-100 shadow-md mb-3"
                    />
                </div>

                {/* Filtros debajo */}
                <div className="flex flex-wrap gap-3 mb-12">
                    <select
                        className="border border-gray-300 rounded px-3 py-2 text-sm flex-1 md:flex-none 
                                   focus:outline-none focus:border-sky-200 focus:ring-2 focus:ring-sky-100"
                    >
                        <option>Aula</option>
                        <option>Aula 1</option>
                        <option>Aula 2</option>
                    </select>

                    <select
                        className="border border-gray-300 rounded px-3 py-2 text-sm flex-1 md:flex-none 
                                   focus:outline-none focus:border-sky-200 focus:ring-2 focus:ring-sky-100"
                    >
                        <option>Departamento</option>
                        <option>Informática</option>
                        <option>RRHH</option>
                    </select>

                    <select
                        className="border border-gray-300 rounded px-3 py-2 text-sm flex-1 md:flex-none 
                                   focus:outline-none focus:border-sky-200 focus:ring-2 focus:ring-sky-100"
                    >
                        <option>Dispositivo</option>
                        <option>Portátil</option>
                        <option>Ratón</option>
                    </select>
                </div>
            </div>

            {/* Tabla */}
            <div className="bg-white rounded-lg overflow-hidden border border-gray-200">
                {/* Encabezado */}
                <div className="grid grid-cols-7 gap-4 bg-sky-50 text-sm font-semibold text-gray-600 px-6 py-3">
                    <div>Artículo</div>
                    <div>Modelo</div>
                    <div>ID</div>
                    <div>Fecha</div>
                    <div>Estado</div>
                    <div>Ubicación</div>
                    <div>Persona</div>
                </div>

                {/* Lista */}
                <div className="divide-y divide-gray-200">
                    {mockDevices.map((device) => (
                        <div
                            key={device.id}
                            className={`transition-all duration-300 ${
                                expanded === device.id
                                    ? "bg-blue-50"
                                    : "bg-white hover:bg-gray-50"
                            }`}
                        >
                            {/* Fila principal */}
                            <div
                                className={`grid grid-cols-7 gap-4 px-6 py-3 cursor-pointer ${
                                    expanded === device.id ? "bg-blue-50" : ""
                                }`}
                                onClick={() => toggleExpand(device.id)}
                            >
                                <div>{device.name}</div>
                                <div>{device.model}</div>
                                <div>{device.code}</div>
                                <div>{device.date}</div>
                                <div>{device.status}</div>
                                <div>{device.location}</div>
                                <div className="flex items-center justify-between">
                                    <span>{device.person}</span>
                                    {expanded === device.id ? (
                                        <ChevronUp className="text-gray-500" />
                                    ) : (
                                        <ChevronDown className="text-gray-500" />
                                    )}
                                </div>
                            </div>

                            {/* Contenido expandido */}
                            {expanded === device.id && (
                                <div className="px-6 pb-4 bg-blue-50 ">
                                    <div className="flex justify-end gap-2 mb-2">
                                        <button className="text-red-600 hover:bg-red-100 p-1 rounded">
                                            <Trash2 size={16} />
                                        </button>
                                        <button className="text-teal-600 hover:bg-teal-100 p-1 rounded">
                                            <Edit3 size={16} />
                                        </button>
                                    </div>

                                    <div>
                                        <p className="text-left  mb-1 text-sm">Comentarios</p>
                                        <textarea
                                            readOnly
                                            value={device.comments || "Sin comentarios"}
                                            className="w-full border border-gray-400 rounded-md p-2 text-sm bg-white resize-none"
                                        />
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
