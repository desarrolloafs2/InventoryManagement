import { useState } from "react";
import PageHeader from "../components/PageHeader";
import HeaderActions from "../components/HeaderActions";
import SearchFilters from "../components/SearchFilters";
import DeviceTable from "../components/DeviceTable";
import Modal from "../components/Modal";
import ActionModalContent from "../components/ActionModalContent";

const mockDevices = [
    { id: 1, device: "Portátil", model: "Acer", code: "POR-001", date: "15/10/25", status: "En uso", location: "RRHH", person: "Laura Santana Suárez" },
    { id: 2, device: "Teclado", model: "Logitech", code: "TEC-002", date: "10/10/25", status: "En uso", location: "Informática", person: "Laura Santana Suárez", comments: "A este portátil le faltan algunas teclas" },
    { id: 3, device: "Ratón", model: "Nilox", code: "RAT-003", date: "20/10/25", status: "En uso", location: "Telemarketing", person: "Laura Santana Suárez" },
    { id: 4, device: "Portátil", model: "Acer", code: "POR-001", date: "15/10/25", status: "En uso", location: "RRHH", person: "Laura Santana Suárez" },
    { id: 5, device: "Teclado", model: "Logitech", code: "TEC-002", date: "10/10/25", status: "En uso", location: "Informática", person: "Laura Santana Suárez", comments: "A este portátil le faltan algunas teclas" },
    { id: 6, device: "Ratón", model: "Nilox", code: "RAT-003", date: "20/10/25", status: "En uso", location: "Telemarketing", person: "Laura Santana Suárez" },
    { id: 7, device: "Portátil", model: "Acer", code: "POR-001", date: "15/10/25", status: "En uso", location: "RRHH", person: "Laura Santana Suárez" },
    { id: 8, device: "Teclado", model: "Logitech", code: "TEC-002", date: "10/10/25", status: "En uso", location: "Informática", person: "Laura Santana Suárez", comments: "A este portátil le faltan algunas teclas" },
    { id: 9, device: "Ratón", model: "Nilox", code: "RAT-003", date: "20/10/25", status: "En uso", location: "Telemarketing", person: "Laura Santana Suárez" },
    { id: 10, device: "Portátil", model: "Acer", code: "POR-001", date: "15/10/25", status: "En uso", location: "RRHH", person: "Laura Santana Suárez" },
    { id: 11, device: "Teclado", model: "Logitech", code: "TEC-002", date: "10/10/25", status: "En uso", location: "Informática", person: "Laura Santana Suárez", comments: "A este portátil le faltan algunas teclas" },
    { id: 12, device: "Ratón", model: "Nilox", code: "RAT-003", date: "20/10/25", status: "En uso", location: "Telemarketing", person: "Laura Santana Suárez" },
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
                    { label: "Aula", options: ["Aula 1", "Aula 2"] },
                    { label: "Departamento", options: ["Informática", "RRHH"] },
                    { label: "Dispositivo", options: ["Portátil", "Ratón"] },
                ]}
            />


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
