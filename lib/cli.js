// var cli = require('command-router')
var extend = require('xtend')
var url = require('url')
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

  require('./http/server')
  .listen(options.port, options.host, function onlisten(err) {
    if (err) {
      throw err
    }

    var server = this
    var address = server.address()

    console.log('listening at %s', url.format({
      protocol: 'http',
      port: address.port,
      hostname: address.address
    }))
  })
}

// dummy version of the new command-router CLI
var minimist = require('minimist')

function cli(routes, argv) {
  if (routes.server && typeof routes.server === 'function') {
    routes.server.call(null, {}, minimist(argv.slice(2)))
  }
}
