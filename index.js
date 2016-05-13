const scanner = require('node-wifi-scanner')
var express = require('express')
var bodyParser = require('body-parser')
var app = express()
var NetData = []
app.use(bodyParser.json())

setInterval(function () {
  scanner.scan((err, networks) => {
    if (err) {
      console.error(err)
      return
    }
    console.log(networks)
    NetData = networks
  })
  app.get('/data', function (req, res) {
    res.send(NetData)
  })
}, 5000)

app.use(express.static('public'))

app.listen(5000, function () {
  console.log('5000')
})
