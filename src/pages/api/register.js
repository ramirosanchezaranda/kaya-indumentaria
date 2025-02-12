import { supabase } from '../../lib/supabase';
import sgMail from '@sendgrid/mail';

//RESTA CONFIGURAR ESTE REGISTRO DE CLIENTES, PRIMO, VOS PODEEES DALE COPATE JAJAJAJAJ EL APRENDIZAJE DE HOY ES LA BIYUYA DE MAÑANA

// Configurar SendGrid
sgMail.setApiKey(import.meta.env.SENDGRID_API_KEY);

export async function post({ request }) {
  try {
    const { name, email, password } = await request.json();

    // Validar datos
    if (!name || !email || !password) {
      return new Response(JSON.stringify({
        message: 'Todos los campos son requeridos'
      }), { status: 400 });
    }

    // Registrar usuario en Supabase
    const { data: user, error: signUpError } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          name
        }
      }
    });

    if (signUpError) {
      throw new Error(signUpError.message);
    }

    // Insertar datos adicionales en la tabla de usuarios
    const { error: insertError } = await supabase
      .from('users')
      .insert([
        {
          id: user.id,
          name,
          email,
          created_at: new Date()
        }
      ]);

    if (insertError) {
      throw new Error(insertError.message);
    }

    // Enviar correo de confirmación
    const msg = {
      to: email,
      from: 'tu-email@kaya.com.ar', // Reemplazar con tu email verificado en SendGrid
      subject: '¡Bienvenido a Kaya Indumentaria!',
      text: `Hola ${name}, ¡gracias por registrarte en Kaya Indumentaria!`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #333;">¡Bienvenido a Kaya Indumentaria!</h1>
          <p>Hola ${name},</p>
          <p>¡Gracias por registrarte en nuestra tienda! Tu cuenta ha sido creada exitosamente.</p>
          <p>Ya puedes comenzar a explorar nuestra colección y realizar compras.</p>
          <div style="margin: 20px 0; padding: 20px; background-color: #f8f8f8; border-radius: 5px;">
            <p style="margin: 0;"><strong>Email:</strong> ${email}</p>
          </div>
          <p>Si tienes alguna pregunta, no dudes en contactarnos.</p>
          <p>¡Esperamos que disfrutes tu experiencia de compra!</p>
          <p>Saludos,<br>El equipo de Kaya Indumentaria</p>
        </div>
      `
    };

    await sgMail.send(msg);

    return new Response(JSON.stringify({
      message: 'Usuario registrado exitosamente'
    }), { status: 200 });

  } catch (error) {
    return new Response(JSON.stringify({
      message: error.message
    }), { status: 500 });
  }
}
