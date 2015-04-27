var domready = require('domready')
var websocket = require('websocket-stream')
var dnode = require('dnode')

domready(function ondomready() {
  var wsURL = window.location.href.replace('http', 'ws') + 'rpc'
  var ws = websocket(wsURL)
  var d = dnode()

  d.on('remote', function(remote) {
    remote.hello(function(err, message) {
      console.log('message', message)
    })
  })

  d.pipe(ws).pipe(d)
})
