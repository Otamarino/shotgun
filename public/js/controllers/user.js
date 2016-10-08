angular.module('MyApp')
  .controller('UserCtrl', function($routeParams, $scope) {
    $scope.user = $routeParams.userId;
  });
