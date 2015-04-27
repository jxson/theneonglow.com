var http = require('http')
var rpc = require('../rpc')
var listener = require('./on-request')

var server = http.createServer(listener)

rpc(server, '/rpc')

module.exports = server
