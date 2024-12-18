export const onRequest = async ({ request, next }) => {
    // Obtener la respuesta original
    const response = await next();
  
    // Clonar y agregar el encabezado "Accept-Ranges"
    const newHeaders = new Headers(response.headers);
    newHeaders.set("Accept-Ranges", "bytes");
  
    return new Response(response.body, {
      status: response.status,
      headers: newHeaders,
    });
  };
  