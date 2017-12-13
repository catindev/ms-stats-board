const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const checkIn = require('./checkin')

app.use(express.static(__dirname))
app.use(bodyParser.json())
app.use(cookieParser())
app.use(checkIn)

app.get('/', (request, response) => response.redirect('/leads'))
app.get('/AYBAB2U', (request, response) => {
    const { query: { msid } } = request
    response.cookie('msid', msid, { maxAge: 3600000, path: '/' });
    response.redirect('/leads')
})
app.get('/exit', (request, response) => {
    const { query: { msid } } = request
    response.clearCookie('msid')
    response.redirect('/') 
})
app.get('*', (request, response) => response.sendFile(__dirname + '/static/app/template.html'))

const listener = app.listen(5010, () => console.log('Started at', listener.address().port))
