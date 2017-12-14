module.exports = (request, response, next) => {
    const { path, method } = request
    if (path === '/fuckoff' && method === 'GET') return next()
    if (path === '/iddqd' && method === 'GET') return next()
    if (path === '/login' && method === 'GET') return next()
    if (path === '/AYBAB2U' && method === 'GET') return next()  
    
    const { msid } = request.cookies
    if (!msid) return response.sendFile(__dirname + '/static/login/template.html');
    
    next()
}