import React, { useState } from 'react';

// Menú de ejemplo (normalmente vendría de una base de datos)
const MENU = [
  { id: 1, nombre: "Hamburguesa Clásica", precio: 8.50 },
  { id: 2, nombre: "Pizza Margherita", precio: 12.00 },
  { id: 3, nombre: "Ensalada César", precio: 6.00 },
  { id: 4, nombre: "Pasta Carbonara", precio: 10.50 },
  { id: 5, nombre: "Limonada 1L", precio: 3.00 }
];

const MESAS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // Mesas disponibles
const MESEROS = ["Carlos", "Ana", "Pedro", "María"]; // Meseros disponibles

export default function PedidoMesero() {
  // Estados del formulario
  const [mesero, setMesero] = useState("");
  const [mesa, setMesa] = useState("");
  const [plato, setPlato] = useState("");
  const [notas, setNotas] = useState("");

  // Estado de la lista de pedidos
  const [pedidos, setPedidos] = useState([]);

  // Función para agregar un plato al pedido
  const agregarPlato = (e) => {
    e.preventDefault();
    
    // Validación básica
    if (!mesero || !mesa || !plato) {
      alert("Por favor completa el mesero, la mesa y selecciona un plato.");
      return;
    }

    // Buscar el plato seleccionado para obtener su precio
    const platoSeleccionado = MENU.find(item => item.id === parseInt(plato));

    // Crear el nuevo objeto del pedido
    const nuevoPedido = {
      id: Date.now(), // ID único temporal
      mesero,
      mesa: parseInt(mesa),
      plato: platoSeleccionado.nombre,
      precio: platoSeleccionado.precio,
      notas
    };

    // Agregar a la lista de pedidos
    setPedidos([...pedidos, nuevoPedido]);
    
    // Limpiar notas y selección de plato para el siguiente item
    setNotas("");
    setPlato("");
  };

  // Función para enviar la orden a cocina (simulado)
  const enviarACocina = () => {
    if (pedidos.length === 0) {
      alert("No hay platos en el pedido actual.");
      return;
    }
    alert(`✅ Orden enviada a Cocina!\nMesa: ${pedidos[0].mesa}\nMesero: ${pedidos[0].mesero}\nTotal de platos: ${pedidos.length}`);
    // Aquí iría una petición a un backend (fetch/axios)
    setPedidos([]); // Limpiar la vista
  };

  // Calcular total
  const calcularTotal = () => {
    return pedidos.reduce((total, pedido) => total + pedido.precio, 0).toFixed(2);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-50 min-h-screen font-sans">
      <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">🍽️ Tomar Pedido</h1>

      {/* FORMULARIO */}
      <form onSubmit={agregarPlato} className="bg-white p-6 rounded-lg shadow-md mb-8 grid grid-cols-1 md:grid-cols-2 gap-4">
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Mesero</label>
          <select 
            value={mesero} 
            onChange={(e) => setMesero(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="">Seleccionar mesero...</option>
            {MESEROS.map(m => <option key={m} value={m}>{m}</option>)}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Mesa</label>
          <select 
            value={mesa} 
            onChange={(e) => setMesa(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="">Seleccionar mesa...</option>
            {MESAS.map(m => <option key={m} value={m}>Mesa {m}</option>)}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Plato</label>
          <select 
            value={plato} 
            onChange={(e) => setPlato(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="">Seleccionar plato...</option>
            {MENU.map(item => <option key={item.id} value={item.id}>{item.nombre} - ${item.precio}</option>)}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Notas (Ej: Sin cebolla)</label>
          <input 
            type="text" 
            value={notas}
            onChange={(e) => setNotas(e.target.value)}
            placeholder="Especificaciones del cliente..."
            className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div className="md:col-span-2 flex justify-end">
          <button 
            type="submit" 
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded transition duration-200"
          >
            + Agregar al Pedido
          </button>
        </div>
      </form>

      {/* RESUMEN DEL PEDIDO */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex justify-between items-center mb-4 border-b pb-2">
          <h2 className="text-xl font-bold text-gray-800">
            Pedido Actual: {mesa ? `Mesa ${mesa}` : "Sin mesa"}
          </h2>
          {pedidos.length > 0 && (
            <button 
              onClick={enviarACocina}
              className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-6 rounded transition duration-200"
            >
              🚀 Enviar a Cocina
            </button>
          )}
        </div>

        {pedidos.length === 0 ? (
          <p className="text-gray-500 italic text-center py-4">No hay platos agregados aún.</p>
        ) : (
          <ul className="divide-y divide-gray-200">
            {pedidos.map((pedido) => (
              <li key={pedido.id} className="py-3 flex justify-between items-start">
                <div>
                  <p className="font-semibold text-gray-800">{pedido.plato}</p>
                  {pedido.notas && (
                    <p className="text-sm text-red-500 italic">📝 {pedido.notas}</p>
                  )}
                  <p className="text-xs text-gray-400 mt-1">Mesero: {pedido.mesero}</p>
                </div>
                <p className="font-bold text-gray-700">${pedido.precio.toFixed(2)}</p>
              </li>
            ))}
          </ul>
        )}

        {pedidos.length > 0 && (
          <div className="mt-4 pt-4 border-t-2 border-gray-800 flex justify-between items-center">
            <span className="text-lg font-bold">TOTAL:</span>
            <span className="text-2xl font-bold text-green-600">${calcularTotal()}</span>
          </div>
        )}
      </div>
    </div>
  );
}