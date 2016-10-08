angular.module('MyApp')
  .controller('CarsCtrl', function(ShotgunService,$location, $scope) {
    $scope.cars = ShotgunService.getCars();
    $scope.header = "Cars"
    $scope.free = (car)=>{return car.free && !car.disputed}
    $scope.dispute = (car)=>{return  !car.free && !car.disputed}
    $scope.disputing = (car)=>{return !car.free && car.disputed}
  });
