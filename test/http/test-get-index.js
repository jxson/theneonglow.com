var test = require('tape')
var get = require('./get')


test('GET /', function(t) {
  get('/', function(err, res) {
    t.error(err, 'should not error')
    t.equal(res.status, 200)
    t.end()
  })
})
