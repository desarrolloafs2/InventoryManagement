import { useState } from "react";
import PageHeader from "../components/PageHeader";
import HeaderActions from "../components/HeaderActions";
import SearchFilters from "../components/SearchFilters";
import DeviceTable from "../components/DeviceTable";
import Modal from "../components/Modal";
import ActionModalContent from "../components/ActionModalContent";

const mockDevices = [
    { id: 1, device: "Monitor", model: "Samsung", code: "DIS-001", date: "25/10/25", status: "Disponible", location: "Almacén" },
    { id: 2, device: "Portátil", model: "HP", code: "DIS-002", date: "14/10/25", status: "Disponible", location: "Almacén" },
    { id: 3, device: "Teclado", model: "Logitech", code: "DIS-003", date: "05/10/25", status: "Disponible", location: "Almacén" },
];

export default function DevicesAvailable() {
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
            <PageHeader title="ARTÍCULOS DISPONIBLES" subtitle="Elementos actualmente en almacén" />

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
            }))}
            showPerson={false}
             />

            <Modal isOpen={modalOpen} onClose={handleCloseModal} title="">
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
