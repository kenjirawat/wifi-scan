var myApp = angular.module('myApp', [])
myApp.controller('Controller', function ($scope, $http) {
  $scope.message = 'Hello AngularJS'

  $http.get('./data')
    .then(function (res) {
      $scope.wifidata = res.data
      console.log(res.data)

      function dataBar () {
        var dataArray = []
        $scope.wifidata.forEach(function (err, data) {
          var ndata = {
            rssi: 2 * ($scope.wifidata[data].rssi + 100)
          }
          dataArray.push(ndata.rssi)
        })
        return dataArray
      }
      function labelsBar () {
        var labelsArray = []
        $scope.wifidata.forEach(function (err, data) {
          var ndata = {
            ssid: $scope.wifidata[data].ssid,
          }
          labelsArray.push(ndata.ssid)
        })
        return labelsArray
      }

      var barData = {
        labels: labelsBar(),
        datasets: [
          {
            label: 'test',
            fillColor: 'rgba(255,255,0,0.6)',
            strokeColor: 'rgba(72,174,209,0.4)',
            borderWidth: 1,
            data: dataBar()
          }
        ]
      }
      console.log(dataBar())
      console.log(labelsBar())
      // get bar chart canvas
      var iot = document.getElementById('iot').getContext('2d')
      // draw bar chart
      new Chart(iot).Bar(barData)
    })
})
