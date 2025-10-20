import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import { Bell, AlertCircle } from "lucide-react";
import DevicesInUse from "./pages/DevicesInUse";
import DevicesAvailable from "./pages/DevicesAvailable";
import DevicesRepair from "./pages/DevicesRepair";
import DevicesDiscarded from "./pages/DevicesDiscarded";
import DropdownAlert from "./components/DropdownAlert";
import "./App.css";
import "./index.css";

function App() {
  // Estado global de desplegables
  const [openDropdown, setOpenDropdown] = useState<"bell" | "alert" | null>(null);

  // Datos de ejemplo para los desplegables
  const lowStockAlerts = [
    { device: "Ratones", qty: 4 },
    { device: "Teclados", qty: 4 },
  ];

  const criticalStockAlerts = [
    { device: "Portátiles", qty: 2 },
    { device: "Monitores", qty: 1 },
    { device: "Teléfonos", qty: 1 },
  ];

  return (
    <Router>
      <nav className="flex w-full bg-white fixed top-0 left-0 z-50 border-b border-sky-100 justify-between px-4">
        {/* Menú principal */}
        <div className="flex">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `px-6 py-3 text-sm font-medium transition-colors ${
                isActive ? "bg-sky-100 text-gray-800" : "text-gray-600 hover:bg-sky-50"
              }`
            }
          >
            En Uso
          </NavLink>

          <NavLink
            to="/disponibles"
            className={({ isActive }) =>
              `px-6 py-3 text-sm font-medium transition-colors ${
                isActive ? "bg-sky-100 text-gray-800" : "text-gray-600 hover:bg-sky-50"
              }`
            }
          >
            Disponibles
          </NavLink>

          <NavLink
            to="/reparacion"
            className={({ isActive }) =>
              `px-6 py-3 text-sm font-medium transition-colors ${
                isActive ? "bg-sky-100 text-gray-800" : "text-gray-600 hover:bg-sky-50"
              }`
            }
          >
            Reparación
          </NavLink>

          <NavLink
            to="/bajas"
            className={({ isActive }) =>
              `px-6 py-3 text-sm font-medium transition-colors ${
                isActive ? "bg-sky-100 text-gray-800" : "text-gray-600 hover:bg-sky-50"
              }`
            }
          >
            Bajas
          </NavLink>
        </div>

        {/* Botones de alertas */}
        <div className="flex items-center gap-4">
          <DropdownAlert
            icon={<Bell size={20} />}
            badge={3}
            title="Últimas Unidades"
            items={lowStockAlerts}
            isOpen={openDropdown === "bell"}
            onToggle={() => setOpenDropdown(openDropdown === "bell" ? null : "bell")}
            color="yellow"
          />

          <DropdownAlert
            icon={<AlertCircle size={20} />}
            badge={1}
            title="Últimas Unidades"
            items={criticalStockAlerts}
            isOpen={openDropdown === "alert"}
            onToggle={() => setOpenDropdown(openDropdown === "alert" ? null : "alert")}
            color="red"
          />

        </div>
      </nav>

      <main className="p-8 mt-12">
        <Routes>
          <Route path="/" element={<DevicesInUse />} />
          <Route path="/disponibles" element={<DevicesAvailable />} />
          <Route path="/reparacion" element={<DevicesRepair />} />
          <Route path="/bajas" element={<DevicesDiscarded />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
