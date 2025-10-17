import { useState } from "react";
import PageHeader from "../components/PageHeader";
import HeaderActions from "../components/HeaderActions";
import SearchFilters from "../components/SearchFilters";
import DeviceTable from "../components/DeviceTable";
import Modal from "../components/Modal";
import ActionModalContent from "../components/ActionModalContent";

const mockDevices = [
    { id: 1, name: "Portátil", model: "Acer", code: "154236", date: "15/10/25", status: "Nuevo", location: "RRHH", person: "Laura Santana Suárez" },
    { id: 2, name: "Teclado", model: "Logitech", code: "856236", date: "10/10/25", status: "Usado", location: "Informática", person: "Laura Santana Suárez", comments: "A este portátil le faltan algunas teclas" },
    { id: 3, name: "Ratón", model: "Nilox", code: "434236", date: "20/10/25", status: "Nuevo", location: "Telemarketing", person: "Laura Santana Suárez" },
];

export default function DevicesInUse() {
    const [search, setSearch] = useState("");
    const [modalOpen, setModalOpen] = useState(false);
    const [action, setAction] = useState<"add" | "assign" | "remove" | null>(null);

    const handleOpenModal = (type: "add" | "assign" | "remove") => {
        setAction(type);
        setModalOpen(true);
    };

    const handleCloseModal = () => {
        setModalOpen(false);
        setAction(null);
    };

    const handleConfirm = () => {
        console.log(`Acción confirmada: ${action}`);
        handleCloseModal();
    };

    return (
        <div>
            <PageHeader title="ARTÍCULOS EN USO" subtitle="Últimos movimientos registrados" />

            <div className="flex justify-end mb-6">
                <HeaderActions
                    onNewItem={() => handleOpenModal("add")}
                    onAssignItem={() => handleOpenModal("assign")}
                />
            </div>

            <SearchFilters search={search} setSearch={setSearch} />

            <DeviceTable devices={mockDevices.map(d => ({
                ...d,
                onRemove: () => handleOpenModal("remove")
            }))} />

            {/* Modal Reutilizable */}
            <Modal
                isOpen={modalOpen}
                onClose={handleCloseModal}
                title=""
            >
                {action && (
                    <ActionModalContent
                        action={action}
                        onConfirm={handleConfirm}
                        onCancel={handleCloseModal}
                    />
                )}
            </Modal>
        </div>
    );
}
