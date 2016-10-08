angular.module('MyApp')
  .controller('ShotgunCtrl', function(ShotgunService, $routeParams, $scope) {

    var carId = $routeParams.carId
    var data = {user:$rootScope.user._id,card:carId}
    $scope.shotgun = ShotgunService.shotgun(data)
  });
