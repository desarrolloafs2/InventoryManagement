import type { ReactNode } from "react";

interface DropdownAlertProps {
  icon: ReactNode;
  badge?: number;
  title: string;
  items: { device: string; qty: number }[];
  isOpen: boolean;
  onToggle: () => void;
  color: "yellow" | "red";
}

export default function DropdownAlert({
  icon,
  badge,
  title,
  items,
  isOpen,
  onToggle,
  color,
}: DropdownAlertProps) {
  // Colores personalizados
  const iconHex = color === "yellow" ? "#d88a02" : "#cf2121";
  const bgHex = color === "yellow" ? "#f7e3cd" : "#e1b1b1";
  const badgeHex = iconHex;

  return (
    <div className="relative">
      <button
        className="relative p-2 rounded hover:bg-gray-100"
        onClick={onToggle}
      >
        <span style={{ color: iconHex }}>{icon}</span>
        {badge && (
          <span
            style={{ backgroundColor: badgeHex }}
            className="absolute top-0 right-0 inline-flex items-center justify-center px-1.5 py-0.5 text-xs font-bold leading-none text-white rounded-full"
          >
            {badge}
          </span>
        )}
      </button>

      {isOpen && (
        <div
          style={{ backgroundColor: bgHex }}
          className="absolute right-0 mt-2 w-48 border border-gray-200 rounded shadow-lg z-50 p-3"
        >
          <p className="font-semibold mb-2" style={{ color: iconHex }}>
            {title}
          </p>
          <ul className="text-sm">
            {items.map((item, index) => (
              <li
                key={index}
                className="flex justify-between"
                style={{ color: iconHex }}
              >
                <span>{item.device}</span>
                <span>({item.qty})</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
