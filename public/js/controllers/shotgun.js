angular.module('MyApp')
  .controller('ShotgunCtrl', function(ShotgunService, $routeParams, $scope) {

    var carId = $routeParams.carId
    $scope.shotgun = ShotgunService.shotgun(carId)
  });
