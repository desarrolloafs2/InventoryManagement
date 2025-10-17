import { Edit3, Trash2 } from "lucide-react";

interface DeviceDetailsProps {
    comments?: string;
}

export default function DeviceDetails({ comments }: DeviceDetailsProps) {
    return (
        <div className="px-6 pb-4 bg-blue-50">
            
            <div>
                <p className="text-left mb-1 text-sm">Comentarios</p>
                <textarea
                    readOnly
                    value={comments || "Sin comentarios"}
                    className="w-full border border-gray-400 rounded-md p-2 text-sm bg-white resize-none"
                />
            </div>
            <div className="flex justify-end gap-2 mt-12">
                <button className="text-red-600 hover:bg-red-100 p-1 rounded">
                    <Trash2 size={16} />
                </button>
                <button className="text-teal-600 hover:bg-teal-100 p-1 rounded">
                    <Edit3 size={16} />
                </button>
            </div>
        </div>
    );
}
