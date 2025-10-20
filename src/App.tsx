import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import DevicesInUse from "./pages/DevicesInUse";
import DevicesAvailable from "./pages/DevicesAvailable";
import DevicesRepair from "./pages/DevicesRepair";
import DevicesDiscarded from "./pages/DevicesDiscarded";
import "./App.css";
import "./index.css";

function App() {
  return (
    <Router>
      <nav className="flex w-full bg-white fixed top-0 left-0 z-50 border-b border-sky-100">
        <NavLink to="/" end className={({ isActive }) =>
          `px-6 py-3 text-sm font-medium transition-colors ${isActive ? "bg-sky-100 text-gray-800" : "text-gray-600 hover:bg-sky-50"}`
        }>
          En Uso
        </NavLink>

        <NavLink to="/disponibles" className={({ isActive }) =>
          `px-6 py-3 text-sm font-medium transition-colors ${isActive ? "bg-sky-100 text-gray-800" : "text-gray-600 hover:bg-sky-50"}`
        }>
          Disponibles
        </NavLink>

        <NavLink to="/reparacion" className={({ isActive }) =>
          `px-6 py-3 text-sm font-medium transition-colors ${isActive ? "bg-sky-100 text-gray-800" : "text-gray-600 hover:bg-sky-50"}`
        }>
          Reparación
        </NavLink>

        <NavLink to="/bajas" className={({ isActive }) =>
          `px-6 py-3 text-sm font-medium transition-colors ${isActive ? "bg-sky-100 text-gray-800" : "text-gray-600 hover:bg-sky-50"}`
        }>
          Bajas
        </NavLink>
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
