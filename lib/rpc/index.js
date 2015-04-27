var websocket = require('websocket-stream')
var dnode = require('dnode')

module.exports = rpc

function rpc(server, prefix) {
  var options = {
        server: server,
        prefix: prefix || '/rpc'
      }

  websocket.createServer(options, handle)
}

function handle(stream) {
  console.log('Got a websocket connection!')

  var d = dnode({
    hello: function(callback) {
      callback(null, 'world')
    }
  })

  d.pipe(stream).pipe(d);
}
