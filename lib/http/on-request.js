var st = require('st')
var path = require('path')
var mount = st({
      path: path.resolve(__dirname, '../../public'),
      url: '/',
      index: 'index.html'
    })

module.exports = onrequest

function onrequest(req, res) {
  var server = this

  mount(req, res)
}
