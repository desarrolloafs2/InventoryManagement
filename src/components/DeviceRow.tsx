import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import DeviceDetails from "./DeviceDetails";
import type { Device } from "../types/Device";

interface DeviceRowProps {
    device: Device & { onRemove?: () => void };
    showPerson?: boolean;
}

export default function DeviceRow({ device, showPerson = true }: DeviceRowProps) {
    const [expanded, setExpanded] = useState(false);

    return (
        <>
            <div
                className={`grid ${showPerson ? "grid-cols-7" : "grid-cols-6"} gap-4 px-6 py-3 cursor-pointer border-t border-gray-100 hover:bg-gray-50`}
                onClick={() => setExpanded(!expanded)}
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
                        {expanded ? (
                            <ChevronUp className="text-gray-500" />
                        ) : (
                            <ChevronDown className="text-gray-500" />
                        )}
                    </div>
                )}
            </div>

            {expanded && <DeviceDetails comments={device.comments} />}
        </>
    );
}

