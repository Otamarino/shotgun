angular.module('MyApp')
  .controller('LeaderboardCtrl', function(ShotgunService, $scope) {
    $scope.leaderboard = ShotgunService.getLeaderboard();
  });
