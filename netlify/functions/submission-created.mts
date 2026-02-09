
import type { Handler } from "@netlify/functions";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const handler: Handler = async (event) => {
    // Only allow POST requests (Netlify triggers are POST)
    if (event.httpMethod !== "POST") {
        return { statusCode: 405, body: "Method Not Allowed" };
    }

    try {
        // Netlify sends the form payload in the body
        const body = JSON.parse(event.body || "{}");
        const { payload } = body;

        // Extract form data
        const { name, email, service, message } = payload.data;

        // Send the "pretty" email
        const { data, error } = await resend.emails.send({
            from: "Portfolio Contact <onboarding@resend.dev>", // Use verified domain if available
            to: ["lcanedo12@gmail.com"],
            replyTo: email,
            subject: `Nuevo Lead: ${name} - Interés en ${service}`,
            html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; line-height: 1.6; color: #334155; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e2e8f0; border-radius: 12px; background-color: #ffffff; }
            .header { background-color: #00b4d9; padding: 20px; text-align: center; border-radius: 12px 12px 0 0; }
            .header h1 { color: white; margin: 0; font-size: 24px; }
            .content { padding: 30px 20px; }
            .field { margin-bottom: 20px; }
            .label { font-size: 12px; color: #64748b; text-transform: uppercase; letter-spacing: 0.05em; font-weight: bold; margin-bottom: 4px; display: block; }
            .value { font-size: 16px; color: #0f172a; font-weight: 500; }
            .message-box { background-color: #f8fafc; padding: 15px; border-left: 4px solid #00b4d9; border-radius: 4px; }
            .footer { text-align: center; padding-top: 20px; border-top: 1px solid #e2e8f0; font-size: 12px; color: #94a3b8; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>Nuevo Mensaje de Contacto</h1>
            </div>
            <div class="content">
              <div class="field">
                <span class="label">Cliente</span>
                <div class="value">${name}</div>
              </div>
              
              <div class="field">
                <span class="label">Correo Electrónico</span>
                <div class="value"><a href="mailto:${email}" style="color: #00b4d9; text-decoration: none;">${email}</a></div>
              </div>

              <div class="field">
                <span class="label">Servicio de Interés</span>
                <div class="value" style="color: #00b4d9;">${service}</div>
              </div>

              <div class="field">
                <span class="label">Mensaje</span>
                <div class="message-box">
                  ${message.replace(/\n/g, '<br>')}
                </div>
              </div>
            </div>
            <div class="footer">
              <p>Enviado desde tu Portafolio Profesional • Powered by Netlify & Resend</p>
            </div>
          </div>
        </body>
        </html>
      `,
        });

        if (error) {
            console.error("Resend Error:", error);
            return { statusCode: 500, body: JSON.stringify(error) };
        }

        return { statusCode: 200, body: JSON.stringify(data) };

    } catch (error) {
        console.error("Function Error:", error);
        return { statusCode: 500, body: "Internal Server Error" };
    }
};

export { handler };
