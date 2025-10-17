import DeviceRow from "./DeviceRow";

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

interface DeviceTableProps {
    devices: Device[];
}

export default function DeviceTable({ devices }: DeviceTableProps) {
    return (
        <div className="bg-white rounded-lg overflow-hidden border border-gray-200">
            <div className="grid grid-cols-7 gap-4 bg-gray-50 text-sm font-semibold text-gray-600 px-6 py-3">
                <div>Artículo</div>
                <div>Modelo</div>
                <div>ID</div>
                <div>Fecha</div>
                <div>Estado</div>
                <div>Ubicación</div>
                <div>Persona</div>
            </div>
            <div className="divide-y divide-gray-200">
                {devices.map((device) => (
                    <DeviceRow key={device.id} device={device} />
                ))}
            </div>
        </div>
    );
}
