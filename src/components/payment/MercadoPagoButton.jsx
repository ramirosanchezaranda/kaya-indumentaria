import React, { useState } from 'react';

const MercadoPagoButton = ({ title, price, quantity = 1 }) => {
  const [loading, setLoading] = useState(false);

  const handlePayment = async () => {
    try {
      setLoading(true);
      
      // Validación de precio
      if (isNaN(price) || price <= 0) {
        throw new Error("El precio debe ser un número válido");
      }

      // Llamada a la API
      const response = await fetch('/api/mercadopago', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title: title.substring(0, 255),
          price: Number(price),
          quantity: Number(quantity)
        })
      });

      // Manejar errores HTTP
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Error en el servidor");
      }

      // Redirección
      const { init_point } = await response.json();
      console.log("Redirigiendo a:", init_point);
      window.location.href = init_point;

    } catch (error) {
      console.error("Error en pago:", error);
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <button 
      onClick={handlePayment}
      disabled={loading}
      className={`w-full brutalist-border p-4 flex items-center space-x-4 hover:text-kaya-accent
        ${loading ? 'opacity-50 cursor-wait' : ''}`}
    >
      <span className="text-2xl">📲</span>
      <span className='font-mono'>{loading ? 'Procesando...' : 'Pagar con Mercado Pago'}</span>
    </button>
  );
};

export default MercadoPagoButton;