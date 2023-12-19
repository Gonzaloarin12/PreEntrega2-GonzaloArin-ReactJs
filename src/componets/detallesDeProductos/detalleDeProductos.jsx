import { useState } from "react";

const DetalleDeProducto = ({ producto, onAgregar, onClose }) => {
const [cantidad, setCantidad] = useState(1);

const handleAgregar = () => {
    onAgregar(cantidad);
};

return (
    <div>
        <h2 className="text-xl font-bold mb-2">{producto.nombre}</h2>
        <img className="w-full h-40 object-cover mb-2" src={producto.img} alt={producto.nombre} />
        <p className="text-gray-600 text-sm mb-2">{producto.descripcion}</p>
        <p className="text-lg font-bold mb-2">Precio: ${producto.precio}</p>

    <div className="flex items-center mb-4">
        <button
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 px-2 py-1 rounded-md mr-2"
            onClick={() => setCantidad(cantidad - 1)}
        >
        -
        </button>

        <span>{cantidad}</span>

        <button
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 px-2 py-1 rounded-md ml-2"
            onClick={() => setCantidad(cantidad + 1)}
        >
        +
        </button>

    </div>

        <button
        className="block bg-slate-700 hover:bg-slate-800 text-white px-4 py-2 mt-4 rounded-md mx-auto"
        onClick={handleAgregar}>
        Agregar al Carrito
        </button>

      {/* Botón para cerrar la ventana flotante */}
        <button
        className="block text-gray-500 hover:text-gray-700 text-lg font-bold mt-4"
        onClick={onClose}
    >
        Cerrar
        </button>
    </div>
);
};

export default DetalleDeProducto;