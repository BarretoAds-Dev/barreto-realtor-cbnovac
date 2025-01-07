import { defineAction, ActionError } from 'astro:actions';
import { z } from 'astro:schema';
import { Resend } from 'resend';

const resend = new Resend(import.meta.env.RESEND_API_KEY);
const rateLimit = new Map<string, number>();
const LIMIT_TIME = 60 * 1000;

const phoneLengths: Record<string, number> = {
  '+52': 10,
  '+1': 10,
  '+44': 10,
  '+33': 9,
  '+49': 10,
  '+34': 9,
  '+55': 11,
  '+81': 10,
  '+61': 9,
};

export const server = {
  contactForm: defineAction({
    accept: 'form',
    input: z.object({
      name: z.string()
        .regex(/^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ\s]+$/, { message: "El nombre solo puede contener letras y espacios." })
        .min(3, "El nombre es obligatorio."),
      email: z.string().email("El correo electrónico no es válido."),
      countryCode: z.string().nonempty("Debes seleccionar un país."),
      phone: z.string()
        .regex(/^[0-9]+$/, "El teléfono solo puede contener dígitos.")
        .min(8, "El número de teléfono es obligatorio."),
      interest: z.string().nonempty("Debes seleccionar una opción de interés."),
      propertyType: z.string().nonempty("Selecciona el tipo de propiedad."),
      budget: z.string().nonempty("Selecciona un presupuesto."),
      message: z.string().min(10, "El mensaje debe tener al menos 10 caracteres."),
    }).refine((data) => {
      const phoneDigits = data.phone.replace(/\D/g, '');
      return phoneLengths[data.countryCode] ? phoneDigits.length === phoneLengths[data.countryCode] : true;
    }, {
      message: "El número de teléfono no corresponde al país seleccionado.",
      path: ["phone"]
    }),

    handler: async (payload, ctx) => {
      const ip = ctx.request.headers.get('x-forwarded-for') || ctx.request.headers.get('remote-addr') || 'unknown';
      const now = Date.now();

      if (rateLimit.has(ip) && now - rateLimit.get(ip)! < LIMIT_TIME) {
        throw new ActionError({
          code: 'TOO_MANY_REQUESTS',
          message: 'Demasiadas solicitudes. Intenta de nuevo en un minuto.',
        });
      }
      rateLimit.set(ip, now);

      const { name, email, countryCode, phone, interest, propertyType, budget, message } = payload;

      try {
        const formatCurrency = (amount: number) =>
          new Intl.NumberFormat('es-MX', {
            style: 'currency',
            currency: 'MXN',
            minimumFractionDigits: 0
          }).format(amount);

        const formattedBudget = (() => {
          const [min, max] = budget.split('-').map(Number);
          if (isNaN(min)) {
            throw new ActionError({
              code: 'BAD_REQUEST',
              message: 'El presupuesto ingresado no es válido.',
            });
          }
          return max ? `${formatCurrency(min)} - ${formatCurrency(max)}` : formatCurrency(min);
        })();

        const emailData = {
          from: 'Barreto | Realtor <contacto@barretoads.dev>',
          to: ['Barretoj.ads@icloud.com'],
          subject: `Nuevo mensaje de contacto - ${name}`,
          html: `
            <h1>Nuevo mensaje de contacto de ${name}</h1>
            <p><strong>Correo:</strong> ${email}</p>
            <p><strong>Teléfono:</strong> ${countryCode} ${phone}</p>
            <p><strong>Interés:</strong> ${interest}</p>
            <p><strong>Tipo de Propiedad:</strong> ${propertyType}</p>
            <p><strong>Presupuesto:</strong> ${formattedBudget}</p>
            <p><strong>Mensaje:</strong></p>
            <p>${message}</p>
            <hr />
            <p style="color: gray; font-size: 12px;">
              ** Este es un correo automático. No responda a este mensaje. **
            </p>
          `,
        };

        await resend.emails.send(emailData);

        await resend.emails.send({
          ...emailData,
          to: email,
          subject: 'Confirmación: Hemos recibido tu consulta',
          html: `<p>Hola ${name},</p>
                 <p>Hemos recibido tu mensaje con respecto a <strong>${interest}</strong> una <strong>${propertyType}</strong>.</p>
                 <p>Presupuesto estimado: <strong>${formattedBudget}</strong></p>
                 <p>Un asesor se pondrá en contacto contigo pronto.</p>`
        });

        return { success: true };
      } catch (err) {
        console.error("Error al enviar el formulario: ", err);
        throw new Error('Hubo un problema al procesar el formulario.');
      }
    }
  })
};
