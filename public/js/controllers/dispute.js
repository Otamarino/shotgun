angular.module('MyApp')
  .controller('DisputeCtrl', function(ShotgunService, $location, $routeParams, $scope) {
    var shotgunId = $routeParams.shotgunId;

    $scope.shotgun = ShotgunService.getShotgun(shotgunId);
    $scope.reasons = ShotgunService.getDisputeReasons();
    $scope.dispute=(message)=>{
      var data ={"shotgunId":shotgunId,"message":message};
      var dispute = ShotgunService.dispute(message);
      $location.path("/dispute/"+dispute+"/challenge")
    }
  });
