import pool from '../../config/db';

export async function GET() {
  console.log('API: Iniciando petición GET /api/productos');
  try {
    console.log('API: Intentando conectar a la base de datos...');
    const result = await pool.query('SELECT id, nombre, imagen FROM productos');
    console.log('API: Consulta exitosa, número de filas:', result.rows.length);
    
    return new Response(JSON.stringify(result.rows), {
      status: 200,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  } catch (error) {
    console.error('API Error detallado:', {
      message: error.message,
      stack: error.stack,
      code: error.code
    });
    
    return new Response(JSON.stringify({
      message: 'Error interno del servidor',
      details: error.message
    }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
}
