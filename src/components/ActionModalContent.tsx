interface ActionModalContentProps {
    action: "add" | "assign" | "remove";
    onConfirm: () => void;
    onCancel: () => void;
}

export default function ActionModalContent({ action, onConfirm, onCancel }: ActionModalContentProps) {
    const getContent = () => {
        switch (action) {
            case "add":
                return {
                    title: "Agregar Artículo",
                    body: (
                        <form className="flex flex-col gap-3">
                            <input type="text" placeholder="Etiqueta" className="border rounded p-2" />
                            <input type="text" placeholder="Dispositivo" className="border rounded p-2" />
                            <input type="text" placeholder="Modelo" className="border rounded p-2" />
                            <input type="text" placeholder="N Serie" className="border rounded p-2" />
                            <button
                                type="button"
                                onClick={onConfirm}
                                className="bg-teal-600 text-white px-4 py-2 rounded hover:bg-teal-700 mt-2"
                            >
                                Guardar
                            </button>
                        </form>
                    ),
                };

            case "assign":
                return {
                    title: "Asignar artículo",
                    body: (
                        <form className="flex flex-col gap-3">
                            <input type="text" placeholder="Tipo" className="border rounded p-2" />
                            <input type="text" placeholder="Dispositivo" className="border rounded p-2" />
                            <input type="text" placeholder="Ubicacion" className="border rounded p-2" />
                            <input type="text" placeholder="Fecha" className="border rounded p-2" />
                            <input type="text" placeholder="Persona" className="border rounded p-2" />
                            <button
                                type="button"
                                onClick={onConfirm}
                                className="bg-lime-600 text-white px-4 py-2 rounded hover:bg-lime-700 mt-2"
                            >
                                Asignar
                            </button>
                        </form>
                    ),
                };

            case "remove":
                return {
                    title: "Desasignar artículo",
                    body: (
                        <div className="flex flex-col gap-4">
                            <p>¿Seguro que quieres desasignar este artículo?</p>
                            <div className="flex justify-end gap-3">
                                <button
                                    onClick={onCancel}
                                    className="px-4 py-2 rounded border border-gray-300 hover:bg-gray-100"
                                >
                                    Cancelar
                                </button>
                                <button
                                    onClick={onConfirm}
                                    className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
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
        <div>
            <h3 className="text-lg font-semibold mb-3">{title}</h3>
            {body}
        </div>
    );
}
