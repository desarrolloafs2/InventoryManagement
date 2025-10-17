interface ActionModalContentProps {
  action: "add" | "assign" | "remove";
  onConfirm: () => void;
  onCancel: () => void;
}

export default function ActionModalContent({
  action,
  onConfirm,
  onCancel,
}: ActionModalContentProps) {
  const inputClass =
    "border border-gray-300 rounded-md p-2 w-40 text-sm text-gray-700 " +
    "focus:outline-none focus:ring-2 focus:ring-sky-200";

  const getContent = () => {
    switch (action) {
      case "add":
        return {
          title: "Agregar Artículo",
          body: (
            <form className="flex flex-col items-center gap-6">
              <div className="flex flex-wrap justify-center gap-4 w-full">
                <input type="text" placeholder="Etiqueta" className={inputClass} />
                <input type="text" placeholder="Dispositivo" className={inputClass} />
                <input type="text" placeholder="Modelo" className={inputClass} />
                <input type="text" placeholder="N° Serie" className={inputClass} />
              </div>
              <div className="flex justify-center gap-4 pt-12 pb-4">
                <button
                    onClick={onCancel}
                    className="px-5 py-2 rounded-lg border border-gray-300 hover:bg-gray-100 transition"
                    >
                    Cancelar
                </button>
                <button
                    type="button"
                    onClick={onConfirm}
                    className="text-white px-6 py-2 rounded-lg transition"
                    style={{ backgroundColor: "#5FB7B1" }}
                    onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#4AA29D")}
                    onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#5FB7B1")}
                >
                    Guardar
                </button>
              </div>
            </form>
          ),
        };

      case "assign":
        return {
          title: "Asignar Artículo",
          body: (
            <form className="flex flex-col items-center gap-6">
              <div className="flex flex-wrap justify-center gap-4 w-full">
                <input type="text" placeholder="Tipo" className={inputClass} />
                <input type="text" placeholder="Dispositivo" className={inputClass} />
                <input type="text" placeholder="Ubicación" className={inputClass} />
                <input type="text" placeholder="Fecha" className={inputClass} />
                <input type="text" placeholder="Persona" className={inputClass} />
              </div>
              <div className="flex justify-center gap-4 pt-12 pb-4">
                <button
                    onClick={onCancel}
                    className="px-5 py-2 rounded-lg border border-gray-300 hover:bg-gray-100 transition"
                    >
                    Cancelar
                </button>
                <button
                    type="button"
                    onClick={onConfirm}
                    className="text-white px-6 py-2 rounded-lg transition"
                    style={{ backgroundColor: "#B1C171" }}
                    onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#9CAE5D")}
                    onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#B1C171")}
                >
                    Asignar
                </button>
              </div>
            </form>
          ),
        };

      case "remove":
        return {
          title: "Desasignar Artículo",
          body: (
            <div className="flex flex-col gap-6 text-center">
              <p className="text-gray-700 text-sm">
                ¿Seguro que quieres desasignar este artículo?
              </p>
              <div className="flex justify-center gap-4">
                <button
                  onClick={onCancel}
                  className="px-5 py-2 rounded-lg border border-gray-300 hover:bg-gray-100 transition"
                >
                  Cancelar
                </button>
                <button
                  onClick={onConfirm}
                  className="bg-red-600 text-white px-5 py-2 rounded-lg hover:bg-red-700 transition"
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#9CAE5D")}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#B1C171")}
                >
                  Confirmar
                </button>
              </div>
            </div>
          ),
        };

      default:
        return { title: "", body: null };
    }
  };

  const { title, body } = getContent();

  return (
    <div className="text-left">
      <h3 className="text-lg font-semibold mb-5 text-gray-800">{title}</h3>
      {body}
    </div>
  );
}

