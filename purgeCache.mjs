import dotenv from 'dotenv';
import fetch from 'node-fetch';

// Carga las variables de entorno
dotenv.config();

const validateEnv = () => {
  const requiredEnvVars = ['CLOUDFLARE_ZONE_ID', 'CLOUDFLARE_API_TOKEN'];
  const missingVars = requiredEnvVars.filter((varName) => !process.env[varName]);

  if (missingVars.length > 0) {
    throw new Error(`Faltan las siguientes variables de entorno: ${missingVars.join(', ')}`);
  }
};

const purgeCache = async () => {
  try {
    validateEnv();

    const API_URL = `https://api.cloudflare.com/client/v4/zones/${process.env.CLOUDFLARE_ZONE_ID}/purge_cache`;

    const bodyPayload = {
      purge_everything: true, // Limpia toda la caché, incluidos headers
    };

   

    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.CLOUDFLARE_API_TOKEN}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(bodyPayload),
    });

    const result = await response.json();

    if (response.ok && result.success) {
      console.log('✅ Caché y encabezados purgados exitosamente:', result);
    } else {
      console.error('❌ Error al purgar la caché o headers:', result.errors || result);
    }
  } catch (error) {
    console.error('⚠️ Error inesperado:', error.message || error);
  }
};

// Ejecuta la purga
purgeCache();
