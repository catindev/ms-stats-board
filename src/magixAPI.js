const request = require('request-promise') 

const sessionFindOne = account => request({
    uri: 'http://papi.mindsales-crm.com/sessions/find.one',
    qs: { account },
    headers: { 'User-Agent': 'Request-Promise' },
    json: true
})

const accounts = account => request({
    uri: 'http://papi.mindsales-crm.com/accounts',
    headers: { 'User-Agent': 'Request-Promise' },
    json: true
})

module.exports = { sessionFindOne, accounts }