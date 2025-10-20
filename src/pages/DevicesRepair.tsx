import { useState } from "react";
import PageHeader from "../components/PageHeader";
import HeaderActions from "../components/HeaderActions";
import SearchFilters from "../components/SearchFilters";
import DeviceTable from "../components/DeviceTable";
import Modal from "../components/Modal";
import ActionModalContent from "../components/ActionModalContent";

const mockDevices = [
    { id: 1, device: "Ratón", model: "Nilox", code: "REP-001", date: "15/10/25", status: "Reparación", location: "Taller" },
    { id: 2, device: "Monitor", model: "LG", code: "REP-002", date: "19/10/25", status: "Reparación", location: "Taller" },
];

export default function DevicesRepair() {
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
            <PageHeader title="ARTÍCULOS EN REPARACIÓN" subtitle="Equipos actualmente en servicio técnico" />

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
