import { useState, useEffect } from 'react';

export default function ProductList() {
  const [productos, setProductos] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProductos = async () => {
      try {
        const response = await fetch('/api/productos');
        const data = await response.json();
        
        if (!response.ok) {
          throw new Error(data.details || 'Error al cargar productos');
        }
        
        setProductos(data);
      } catch (err) {
        console.error('Error al cargar productos:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProductos();
  }, []);

  if (loading) {
    return (
      <div className="text-center p-8">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900 mx-auto"></div>
        <p className="mt-4 text-lg">Cargando productos...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center p-8">
        <div className="bg-red-100 border border-red-400 text-red-700 px-6 py-4 rounded-lg">
          <p className="font-bold text-lg mb-2">Error al cargar productos</p>
          <p>{error}</p>
        </div>
      </div>
    );
  }

  if (productos.length === 0) {
    return (
      <div className="text-center p-8">
        <p>No hay productos disponibles</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-6">
      {productos.map((producto) => (
        <div 
          key={producto.id} 
          className="group relative overflow-hidden rounded-xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
        >
          <div className="aspect-w-3 aspect-h-4 overflow-hidden">
            <img
              src={producto.imagen}
              alt={producto.nombre}
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
              onError={(e) => {
                e.target.src = '/placeholder-image.jpg';
                e.target.alt = 'Imagen no disponible';
              }}
            />
          </div>
          <div className="p-6 bg-white">
            <h3 className="text-xl font-semibold text-gray-900 text-center mb-2">
              {producto.nombre}
            </h3>
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-opacity duration-300" />
          </div>
        </div>
      ))}
    </div>
  );
}
