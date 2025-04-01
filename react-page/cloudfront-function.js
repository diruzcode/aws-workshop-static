function handler(event) {
    var request = event.request;
    var uri = request.uri;
    
    // Comprueba si la solicitud es para un archivo existente
    if (uri.endsWith('.html') || 
        uri.endsWith('.css') || 
        uri.endsWith('.js') || 
        uri.endsWith('.json') || 
        uri.endsWith('.png') || 
        uri.endsWith('.jpg') || 
        uri.endsWith('.jpeg') || 
        uri.endsWith('.gif') || 
        uri.endsWith('.svg') || 
        uri.endsWith('.ico')) {
        return request;
    }
    
    // Comprueba si la solicitud ya apunta a la raíz
    if (uri === '/') {
        return request;
    }
    
    // Comprueba si la solicitud apunta a una subcarpeta sin barra al final
    if (!uri.includes('.') && !uri.endsWith('/')) {
        request.uri = uri + '/';
        return request;
    }
    
    // Comprueba si la solicitud apunta a una subcarpeta con barra al final
    if (!uri.includes('.') && uri.endsWith('/')) {
        request.uri = '/index.html';
        return request;
    }
    
    // Redirige cualquier otra solicitud al index.html para manejar rutas SPA
    request.uri = '/index.html';
    
    return request;
}