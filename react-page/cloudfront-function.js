function handler(event) {
    var request = event.request;
    var uri = request.uri;
    
    // Check if the request is for a static file
    if (uri.match(/\.[a-zA-Z0-9]{2,5}$/)) {
        // If it's a static file request (like .js, .css, .png, etc.), don't modify
        return request;
    }
    
    // For all other requests (including dynamic routes), serve index.html
    // but maintain the original request URI in the request object
    request.uri = '/index.html';
    
    // Add the original path to a custom header if needed for debugging
    request.headers['x-original-uri'] = {value: uri};
    
    return request;
}