import { useState } from "react";
import { ChevronDown, ChevronUp, Edit3, Trash2 } from "lucide-react";
import type { Device } from "../types/Device";

interface DeviceTableProps {
  devices: (Device & { onRemove?: () => void })[];
  showPerson?: boolean;
}

export default function DeviceTable({ devices, showPerson = true }: DeviceTableProps) {
  const [expanded, setExpanded] = useState<number | null>(null);

  const toggleExpand = (id: number) => {
    setExpanded(expanded === id ? null : id);
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
      {/* Encabezado */}
      <div
        className={`grid ${showPerson ? "grid-cols-7" : "grid-cols-6"} gap-4 bg-sky-50 text-sm font-semibold text-gray-600 px-6 py-3 sticky top-0 z-10`}
      >
        <div>Artículo</div>
        <div>Modelo</div>
        <div>ID</div>
        <div>Fecha</div>
        <div>Estado</div>
        <div>Ubicación</div>
        {showPerson && <div>Persona</div>}
      </div>

      {/* Filas con scroll */}
      <div className="divide-y divide-gray-200 max-h-96 overflow-y-auto">
        {devices.map((device) => {
          const isExpanded = expanded === device.id;
          return (
            <div
              key={device.id}
              className={`transition-all duration-300 ${isExpanded ? "bg-sky-100" : "bg-white hover:bg-gray-50"}`}
            >
              {/* Fila principal */}
              <div
                className={`grid ${showPerson ? "grid-cols-7" : "grid-cols-6"} gap-4 px-6 py-3 cursor-pointer`}
                onClick={() => toggleExpand(device.id)}
              >
                <div>{device.device}</div>
                <div>{device.model}</div>
                <div>{device.code}</div>
                <div>{device.date}</div>
                <div>{device.status}</div>
                <div>{device.location}</div>

                {showPerson && (
                  <div className="flex items-center justify-between">
                    <span>{device.person}</span>
                    {isExpanded ? <ChevronUp className="text-gray-500" /> : <ChevronDown className="text-gray-500" />}
                  </div>
                )}
              </div>

              {/* Contenido expandido */}
              {isExpanded && (
                <div className="px-6 pb-4 bg-sky-100">
                  <div className="flex justify-end gap-2 mb-2">
                    <button className="text-red-600 hover:bg-red-100 p-1 rounded">
                      <Trash2 size={16} />
                    </button>
                    <button className="text-teal-600 hover:bg-teal-100 p-1 rounded">
                      <Edit3 size={16} />
                    </button>
                  </div>
                  <div>
                    <p className="text-left mb-1 text-sm">Comentarios</p>
                    <textarea
                      readOnly
                      value={device.comments || " "}
                      className="w-full border border-gray-400 rounded-md p-2 text-sm bg-white resize-none"
                    />
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
