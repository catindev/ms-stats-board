var express = require('express')
var router = express.Router()

// GET /foo
router.get('/', function (req, res, next) {
    (request, response) => response.sendFile(__dirname + '/static/callcenter/index.html')
})

module.exports = router