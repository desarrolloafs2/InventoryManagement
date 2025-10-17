import { Plus, UserCheck } from "lucide-react";

interface HeaderActionsProps {
    onNewItem?: () => void;
    onAssignItem?: () => void;
}

export default function HeaderActions({ onNewItem, onAssignItem }: HeaderActionsProps) {
    return (
        <div className="flex gap-3">
            <button
                className="flex items-center gap-2 text-white px-4 py-2 rounded-lg text-sm font-medium transition"
                style={{ backgroundColor: "#5FB7B1" }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#4AA29D")}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#5FB7B1")}
                onClick={onNewItem}
            >
                <Plus size={16} />
                Nuevo Artículo
            </button>

            <button
                className="flex items-center gap-2 text-white px-4 py-2 rounded-lg text-sm font-medium transition"
                style={{ backgroundColor: "#B1C171" }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#9CAE5D")}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#B1C171")}
                onClick={onAssignItem}
            >
                <UserCheck size={16} />
                Asignar Artículo
            </button>
        </div>
    );
}
