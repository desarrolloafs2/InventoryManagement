import { useState } from "react";
import PageHeader from "../components/PageHeader";
import HeaderActions from "../components/HeaderActions";
import SearchFilters from "../components/SearchFilters";
import DeviceTable from "../components/DeviceTable";
import Modal from "../components/Modal";
import ActionModalContent from "../components/ActionModalContent";

const mockDevices = [
    { id: 1, device: "Monitor", model: "Samsung", code: "MON-001", date: "25/10/25", status: "Disponible", location: "Almacén" },
    { id: 2, device: "Portátil", model: "HP", code: "POR-002", date: "14/10/25", status: "Disponible", location: "Almacén" },
    { id: 3, device: "Teclado", model: "Logitech", code: "TEC-003", date: "05/10/25", status: "Disponible", location: "Almacén" },
    { id: 4, device: "Monitor", model: "Samsung", code: "MON-001", date: "25/10/25", status: "Disponible", location: "Almacén" },
    { id: 5, device: "Portátil", model: "HP", code: "POR-002", date: "14/10/25", status: "Disponible", location: "Almacén" },
    { id: 6, device: "Teclado", model: "Logitech", code: "TEC-003", date: "05/10/25", status: "Disponible", location: "Almacén" },
    { id: 7, device: "Monitor", model: "Samsung", code: "MON-001", date: "25/10/25", status: "Disponible", location: "Almacén" },
    { id: 8, device: "Portátil", model: "HP", code: "POR-002", date: "14/10/25", status: "Disponible", location: "Almacén" },
    { id: 9, device: "Teclado", model: "Logitech", code: "TEC-003", date: "05/10/25", status: "Disponible", location: "Almacén" },
    { id: 10, device: "Monitor", model: "Samsung", code: "MON-001", date: "25/10/25", status: "Disponible", location: "Almacén" },
    { id: 11, device: "Portátil", model: "HP", code: "POR-002", date: "14/10/25", status: "Disponible", location: "Almacén" },
    { id: 12, device: "Teclado", model: "Logitech", code: "TEC-003", date: "05/10/25", status: "Disponible", location: "Almacén" },
    { id: 13, device: "Monitor", model: "Samsung", code: "MON-001", date: "25/10/25", status: "Disponible", location: "Almacén" },
    { id: 14, device: "Portátil", model: "HP", code: "POR-002", date: "14/10/25", status: "Disponible", location: "Almacén" },
    { id: 15, device: "Teclado", model: "Logitech", code: "TEC-003", date: "05/10/25", status: "Disponible", location: "Almacén" },
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

            <div className="flex justify-end">
                <HeaderActions
                    onNewItem={() => handleOpenModal("add")}
                    onAssignItem={() => handleOpenModal("assign")}
                />
            </div>

            <SearchFilters
                search={search}
                setSearch={setSearch}
                filters={[
                    { label: "Tipo", options: ["Portátil", "Ratón"] },
                    { label: "Marca", options: ["Dell", "HP", "Logitech"] },
                ]}
            />


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
