var myApp = angular.module('myApp', [])
myApp.controller('Controller', function ($scope, $http) {
  $scope.message = 'Hello AngularJS'

  $http.get('./data')
    .then(function (res) {
      $scope.wifidata = res.data
      console.log(res.data)
      $scope.wifidata.forEach(function (err, data) {
        var barData = {
          labels: [
            'ssid' + $scope.wifidata[data].ssid
          ],
          datasets: [
            {
              fillColor: 'rgba(255,255,0,0.6)',
              strokeColor: 'rgba(72,174,209,0.4)',
              borderWidth: 1,
              data: [ 2 * ($scope.wifidata[data].rssi + 100) ]
            }
          ]
        }
        // get bar chart canvas
        var iot = document.getElementById('iot').getContext('2d')
        // draw bar chart
        new Chart(iot).Bar(barData)
      })
    })
})
