var myApp = angular.module('myApp', [])
myApp.controller('Controller', function ($scope, $http) {
  $scope.message = 'Hello AngularJS'
  $http.get('../index.js')
    .then(function (res) {
      $scope.myWelcome = res.data
    })
})
