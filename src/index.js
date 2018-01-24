const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const checkIn = require('./checkin')
const { sessionFindOne, accounts } = require('./magixAPI')

app.use(express.static(__dirname))
app.use(bodyParser.json())
app.use(cookieParser())
app.use(checkIn)

app.get('/', (request, response) => response.redirect('/leads'))

app.get('/IDDQD', (request, response) => {
    accounts().then(({ items }) => {
        const html = (items.map(({ _id, name }) => `
          <a href="/AYBAB2U?account=${_id}" 
             style="display:block;padding:1rem 3rem;">
            ${name}
          </a>
        `)).join('')
        response.send(html)
    })
        .catch(({ message }) => response.status(500).json({ message }))
})

app.get('/partner_1515409671435', (request, response) => {
    const items = [
        { _id: '59f840fc94d14316e76321b4', name: 'Samruk-towers.kz' },
        { _id: '59fc38ce9e174f5a4b37f61e', name: 'GrandPrix' },
    ];
    const html = (items.map(({ _id, name }) => `
    <a href="/AYBAB2U?account=${_id}" 
       style="display:block;padding:1rem 3rem;">
      ${name}
    </a>
  `)).join('')
    response.send(html)
})

app.get('/fitness_1516777015374', (request, response) => {
    const items = [
        { _id: '5a617141f45a3f2913db2cdf', name: 'Aerofit Vostok' },
        { _id: '5a6195c2f45a3f2913db2ce9', name: 'Aerofit Гульдер' },
        { _id: '5a619e95f45a3f2913db2cf4', name: 'Aerofit Lady\'s' },
    ];
    const html = (items.map(({ _id, name }) => `
    <a href="/AYBAB2U?account=${_id}" 
       style="display:block;padding:1rem 3rem;">
      ${name}
    </a>
  `)).join('')
    response.send(html)
})

app.get('/AYBAB2U', (request, response) => {
    const { query: { account } } = request
    sessionFindOne(account).then(({ token }) => {
        if (!token) return response.redirect('/fuckoff')
        response.cookie('msid', token, { maxAge: 3600000, path: '/' })
        response.redirect('/leads')
    })
        .catch(({ message }) => response.status(500).json({ message }))
})

app.get('/fuckoff', (request, response) => response.send('<h1>Никто из пользователей аккаунта не залогинился 🖕</h1>'))

app.get('/exit', (request, response) => {
    const { query: { msid } } = request
    response.clearCookie('msid')
    response.redirect('/')
})

app.get('*', (request, response) => response.sendFile(__dirname + '/static/app/template.html'))

const listener = app.listen(5010, () => console.log('Started at', listener.address().port))
