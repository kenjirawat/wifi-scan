/* global angular */
var myApp = angular.module('myApp', [])
myApp.controller('Controller', function ($scope, $http) {
  $scope.message = 'Hello AngularJS'

  $http.get('./data')
    .then(function (res) {
      $scope.wifidata = res.data
      console.log(res.data)

      function dataBar () {
        var dataArray = []
        var labelsArray = []
        $scope.wifidata.forEach(function (err, data) {
          var ndata = {
            rssi: 2 * ($scope.wifidata[data].rssi + 100),
            ssid: $scope.wifidata[data].ssid
          }
          dataArray.push(ndata.rssi)
          labelsArray.push(ndata.ssid)
        })
        return {da: dataArray, label: labelsArray}
      }

      var barData = {
        labels: dataBar().label,
        datasets: [
          {
            label: 'test',
            fillColor: 'rgba(255,255,0,0.6)',
            strokeColor: 'rgba(72,174,209,0.4)',
            borderWidth: 1,
            data: dataBar().da
          }
        ]
      }
      console.log(dataBar().da)
      console.log(dataBar().label)
      // get bar chart canvas and draw bar chart
      setInterval(function () {
        var iot = document.getElementById('iot').getContext('2d')
        new Chart(iot).Line(barData, {responsive: true})
      }, 5000)
    })
    setInterval('dataBar()', 5000)
})
