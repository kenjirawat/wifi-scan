const scanner = require('node-wifi-scanner')
var express = require('express')
var bodyParser = require('body-parser')
var app = express()
app.use(bodyParser.json())
// var wifi = []
setInterval(function () {
  scanner.scan((err, networks) => {
    if (err) {
      console.error(err)
      return
    }
    console.log(networks)
    // networks.forEach (function (err, data) {
    //   var data = {
    //     channel: networks[data].channel,
    //     ssid: networks[data].ssid,
    //     mac: networks[data].mac,
    //     rssi: 2*(networks[data].rssi + 100)+'%'
    //   }
    //   wifi.push(data)
    // })
    app.get('/data', function (req, res) {
    // res.send(wifi)
      res.send(networks)
    })
  })
}, 5000)

app.use(express.static('public'))

app.listen(5000, function () {
  // console.log(wifi)
  console.log('5000')
})
