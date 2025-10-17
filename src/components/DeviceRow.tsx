import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import DeviceDetails from "./DeviceDetails";
import type { Device } from "../types/Device";

interface DeviceRowProps {
  device: Device;
  onRemove?: () => void;
}

export default function DeviceRow({ device }: DeviceRowProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className={`transition-all duration-300 relative ${
        expanded ? "bg-blue-50" : "bg-white hover:bg-gray-50"
      }`}
    >

      <div
        className="grid grid-cols-7 gap-4 px-6 py-3 cursor-pointer"
        onClick={() => setExpanded(!expanded)}
      >
        <div>{device.name}</div>
        <div>{device.model}</div>
        <div>{device.code}</div>
        <div>{device.date}</div>
        <div>{device.status}</div>
        <div>{device.location}</div>
        <div className="flex items-center justify-between">
          <span>{device.person}</span>
          {expanded ? (
            <ChevronUp className="text-gray-500" />
          ) : (
            <ChevronDown className="text-gray-500" />
          )}
        </div>
      </div>

      {expanded && <DeviceDetails comments={device.comments} />}
    </div>
  );
}
