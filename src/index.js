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
        const html = (items.map( ({ _id, name }) => `
          <a href="/AYBAB2U?account=${_id}" 
             style="display:block;padding:1rem 3rem;">
            ${name}
          </a>
        `)).join('')
        response.send(html)
      })    
      .catch(({ message }) => response.status(500).json({ message }))
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
