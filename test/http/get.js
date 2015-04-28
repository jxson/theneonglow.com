var http = require('http')
var server = require('../../lib/http/server')

module.exports = get

function get(pathname, callback) {
  server.listen(onlisten)

  function onlisten(err) {
    if (err) return callback(err)

    var address = this.address()
    var port = address.port

    http
    .request({
      port: port,
      path: pathname,
      method: 'GET'
    })
    .on('response', onresponse)
    .end()
  }

  function onresponse(res) {
    res.status = res.statusCode
    callback(null, res)
    server.close()
  }
}
