import React, { useState } from 'react';

const MENU = [
  { id: 1, nombre: "Hamburguesa Clásica", precio: 8.50, categoria: "Comida" },
  { id: 2, nombre: "Pizza Margherita", precio: 12.00, categoria: "Comida" },
  { id: 3, nombre: "Ensalada César", precio: 6.00, categoria: "Saludable" },
  { id: 4, nombre: "Pasta Carbonara", precio: 10.50, categoria: "Comida" },
  { id: 5, nombre: "Limonada 1L", precio: 3.00, categoria: "Bebida" }
];

const MESAS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const MESEROS = ["Carlos", "Ana", "Pedro", "María"];

export default function PedidoMesero() {
  const [mesero, setMesero] = useState("");
  const [mesa, setMesa] = useState("");
  const [plato, setPlato] = useState("");
  const [notas, setNotas] = useState("");
  const [pedidos, setPedidos] = useState([]);

  const agregarPlato = (e) => {
    e.preventDefault();
    if (!mesero || !mesa || !plato) {
      alert("⚠️ Falta información básica.");
      return;
    }

    const platoSeleccionado = MENU.find(item => item.id === parseInt(plato));
    const nuevoPedido = {
      id: Date.now(),
      mesero,
      mesa: parseInt(mesa),
      plato: platoSeleccionado.nombre,
      precio: platoSeleccionado.precio,
      notas
    };

    setPedidos([...pedidos, nuevoPedido]);
    setNotas("");
    setPlato("");
  };

  const eliminarPlato = (id) => {
    setPedidos(pedidos.filter(p => p.id !== id));
  };

  const enviarACocina = () => {
    if (pedidos.length === 0) return;
    alert(` ¡Orden enviada a cocina!`);
    setPedidos([]);
  };

  const total = pedidos.reduce((sum, p) => sum + p.precio, 0).toFixed(2);

  return (
    <div className="min-h-screen bg-slate-100 p-4 md:p-8 font-sans">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <header className="mb-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div>
            <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight">Restaurante <span className="text-orange-500">POS</span></h1>
            <p className="text-slate-500">Gestión de pedidos en tiempo real</p>
          </div>
          <div className="flex items-center gap-3 bg-white p-3 rounded-2xl shadow-sm border border-slate-200">
            <span className="flex h-3 w-3 rounded-full bg-green-500 animate-pulse"></span>
            <span className="text-sm font-medium text-slate-700">Sistema Activo</span>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Columna Izquierda: Formulario */}
          <section className="lg:col-span-1">
            <div className="bg-white rounded-3xl shadow-xl shadow-slate-200/50 p-6 border border-slate-100">
              <h2 className="text-lg font-bold text-slate-800 mb-5 flex items-center gap-2">
                 Nueva Entrada
              </h2>
              
              <form onSubmit={agregarPlato} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold uppercase text-slate-400 mb-1 block px-1">Mesero</label>
                    <select 
                      value={mesero} 
                      onChange={(e) => setMesero(e.target.value)}
                      className="w-full bg-slate-50 border-none rounded-xl p-3 text-slate-700 focus:ring-2 focus:ring-orange-500 transition-all"
                    >
                      <option value="">Quien...</option>
                      {MESEROS.map(m => <option key={m} value={m}>{m}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="text-xs font-bold uppercase text-slate-400 mb-1 block px-1">Mesa</label>
                    <select 
                      value={mesa} 
                      onChange={(e) => setMesa(e.target.value)}
                      className="w-full bg-slate-50 border-none rounded-xl p-3 text-slate-700 focus:ring-2 focus:ring-orange-500 transition-all"
                    >
                      <option value="">#</option>
                      {MESAS.map(m => <option key={m} value={m}>Mesa {m}</option>)}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-xs font-bold uppercase text-slate-400 mb-1 block px-1">Seleccionar Plato</label>
                  <select 
                    value={plato} 
                    onChange={(e) => setPlato(e.target.value)}
                    className="w-full bg-slate-50 border-none rounded-xl p-3 text-slate-700 focus:ring-2 focus:ring-orange-500 transition-all"
                  >
                    <option value="">¿Qué desea el cliente?</option>
                    {MENU.map(item => <option key={item.id} value={item.id}>{item.nombre} (${item.precio})</option>)}
                  </select>
                </div>

                <div>
                  <label className="text-xs font-bold uppercase text-slate-400 mb-1 block px-1">Notas Especiales</label>
                  <textarea 
                    rows="2"
                    value={notas}
                    onChange={(e) => setNotas(e.target.value)}
                    placeholder="Ej. Sin sal, término medio..."
                    className="w-full bg-slate-50 border-none rounded-xl p-3 text-slate-700 focus:ring-2 focus:ring-orange-500 transition-all resize-none"
                  />
                </div>

                <button 
                  type="submit" 
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 rounded-2xl shadow-lg shadow-orange-200 transition-all active:scale-95"
                >
                  Agregar a la Lista
                </button>
              </form>
            </div>
          </section>

          {/* Columna Derecha: Resumen */}
          <section className="lg:col-span-2">
            <div className="bg-white rounded-3xl shadow-xl shadow-slate-200/50 flex flex-col h-full border border-slate-100 overflow-hidden">
              <div className="p-6 border-b border-slate-50 flex justify-between items-center bg-slate-50/50">
                <div>
                  <h2 className="text-xl font-black text-slate-800">Detalle del Pedido</h2>
                  <p className="text-sm text-slate-500">{mesa ? `Sirviendo a Mesa ${mesa}` : "Seleccione una mesa"}</p>
                </div>
                {pedidos.length > 0 && (
                  <span className="bg-orange-100 text-orange-600 text-xs font-black px-3 py-1 rounded-full uppercase">
                    {pedidos.length} Items
                  </span>
                )}
              </div>

              <div className="grow p-6 overflow-y-auto max-h-100">
                {pedidos.length === 0 ? (
                  <div className="h-full flex flex-col items-center justify-center text-slate-300 py-12">
                    <span className="text-6xl mb-4">🛒</span>
                    <p className="font-medium">El carrito está vacío</p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {pedidos.map((p) => (
                      <div key={p.id} className="group flex items-center justify-between p-4 rounded-2xl bg-slate-50 border border-transparent hover:border-orange-200 hover:bg-white transition-all">
                        <div className="grow">
                          <div className="flex items-center gap-2">
                            <h3 className="font-bold text-slate-800">{p.plato}</h3>
                            <span className="text-xs bg-slate-200 text-slate-600 px-2 py-0.5 rounded">x1</span>
                          </div>
                          {p.notas && <p className="text-sm text-orange-600 mt-1 font-medium">✨ {p.notas}</p>}
                        </div>
                        <div className="flex items-center gap-4">
                          <span className="font-bold text-slate-900">${p.precio.toFixed(2)}</span>
                          <button 
                            onClick={() => eliminarPlato(p.id)}
                            className="p-2 text-slate-300 hover:text-red-500 transition-colors"
                            title="Quitar"
                          >
                            ✕
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {pedidos.length > 0 && (
                <div className="p-6 bg-slate-900 text-white">
                  <div className="flex justify-between items-end mb-6">
                    <div>
                      <p className="text-slate-400 text-sm font-bold uppercase tracking-wider">Total a cobrar</p>
                      <p className="text-4xl font-black text-white">${total}</p>
                    </div>
                    <button 
                      onClick={enviarACocina}
                      className="bg-green-500 hover:bg-green-400 text-white px-8 py-4 rounded-2xl font-bold flex items-center gap-2 transition-all shadow-lg shadow-green-900/20"
                    >
                       Enviar Orden
                    </button>
                  </div>
                </div>
              )}
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}