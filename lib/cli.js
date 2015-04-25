var cli = require('command-router')
var extend = require('xtend')
var routes = {
      server: server
    }

module.exports = {
  run: run
}

function run(argv) {
  cli(routes, argv)
}

function server(params, options) {
  options = extend({
    host: '127.0.0.1'
  }, options)

  require('../lib/server').listen(options)
}
