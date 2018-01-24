module.exports = (request, response, next) => {
    const { path, method } = request
    if (path === '/fuckoff' && method === 'GET') return next()
    if (path === '/iddqd' && method === 'GET') return next()
    if (path === '/login' && method === 'GET') return next()
    if (path === '/AYBAB2U' && method === 'GET') return next()

    if (path === '/partner_1515409671435' && method === 'GET') return next()
    if (path === '/fitness_1516777015374' && method === 'GET') return next()

    const { msid } = request.cookies
    if (!msid) return response.sendFile(__dirname + '/static/login/template.html');

    next()
}