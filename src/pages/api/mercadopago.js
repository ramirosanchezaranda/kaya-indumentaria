import { MercadoPagoConfig, Preference } from 'mercadopago';

export async function POST({ request }) {
  console.log('===== INICIO LLAMADA API =====');
  
  try {
    // 1. Obtener Access Token (Seguro con import.meta.env)
    const accessToken = import.meta.env.MERCADOPAGO_ACCESS_TOKEN;
    if (!accessToken) throw new Error("❌ Faltan credenciales de Mercado Pago");

    // 2. Configurar cliente MP
    const client = new MercadoPagoConfig({
      accessToken: accessToken,
      options: { timeout: 10000 }
    });

    // 3. Parsear y validar datos
    const data = await request.json();
    if (!data.title || typeof data.price !== 'number') {
      throw new Error("⚠️ Datos inválidos: título y precio requeridos");
    }

    // 4. Crear preferencia de pago
    const preference = new Preference(client);
    const result = await preference.create({
      body: {
        items: [{
          title: data.title.substring(0, 255),
          unit_price: Number(data.price),
          quantity: Number(data.quantity) || 1,
          currency_id: 'ARS',
        }],
        back_urls: {
          success: `${import.meta.env.VITE_PUBLIC_URL}/success`,
          failure: `${import.meta.env.VITE_PUBLIC_URL}/failure`,
          pending: `${import.meta.env.VITE_PUBLIC_URL}/pending`
        },
        auto_return: "approved",
        binary_mode: true
      }
    });

    console.log('✅ Pago creado:', result.id);
    return new Response(JSON.stringify({ 
      init_point: result.init_point 
    }), { 
      status: 200,
      headers: { "Content-Type": "application/json" }
    });

  } catch (error) {
    console.error('🔥 Error crítico:', error.message);
    return new Response(JSON.stringify({ 
      error: error.message,
      ayuda: "Verifica tu archivo .env y los datos enviados"
    }), { 
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  } finally {
    console.log('===== FIN LLAMADA API =====\n');
  }
}