var myApp = angular.module('myApp', [])
myApp.controller('Controller', function ($scope, $http) {
  $scope.message = 'Hello AngularJS'
  $scope.num += 1
  $http.get('./data')
    .then(function (res) {
      $scope.wifidata = res.data
      console.log(res.data)
    })

})
