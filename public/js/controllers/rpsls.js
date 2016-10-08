angular.module('MyApp')
  .controller('RPSLSCtrl', function(ShotgunService, $location, $routeParams, $scope) {
    ShotgunService.getDispute($routeParams.disputeId)
    .then(function(data){
      $scope.dispute= data;
       if(data.choice && data.shotgun.choice){
              $scope.tie=()=>{
                var qwe =$scope.dispute.choice;
                var asd = $scope.dispute.shotgun.choice;
                return qwe.localeCompare(asd)==0
              }
              $scope.wonDispute=()=>{
                var qwe = $scope.dispute.choice;
                var asd = $scope.dispute.shotgun.choice;
                console.log(asd)
                console.log(qwe)
                return !qwe.localeCompare("scissors") && !!asd.localeCompare("paper") ||
                  !qwe.localeCompare("paper") && !asd.localeCompare("rock") ||
                  !qwe.localeCompare("rock") && !asd.localeCompare("lizard") ||
                  !qwe.localeCompare("lizard") && !asd.localeCompare("spock") ||
                  !qwe.localeCompare("spock") && !asd.localeCompare("scissors") ||
                  !qwe.localeCompare("scissors") && !asd.localeCompare("lizard") ||
                  !qwe.localeCompare("lizard") && !asd.localeCompare("paper") ||
                  !qwe.localeCompare("paper") && !asd.localeCompare("spock") ||
                  !qwe.localeCompare("spock") && !asd.localeCompare("rock") ||
                  !qwe.localeCompare("rock") && !asd.localeCompare("scissors");
              }


          $scope.verb =()=>{
              var qwe;
              var asd;
              if(wonDispute()){
                qwe=$scope.dispute.choice;
                asd=$scope.dispute.shotgun.choice;
              } else {
                asd=$scope.dispute.choice;
                 qwe=$scope.dispute.shotgun.choice;
              }
              if(!qwe.localeCompare("scissors") && !asd.localeCompare("paper"))return"cuts"
              if(!qwe.localeCompare("paper") && !asd.localeCompare("rock"))return"covers"
              if(!qwe.localeCompare("rock") && !asd.localeCompare("lizard"))return"crushes"
              if(!qwe.localeCompare("lizard") && !asd.localeCompare("spock"))return"poisons"
              if(!qwe.localeCompare("spock") && !asd.localeCompare("scissors"))return"smashes"
              if(!qwe.localeCompare("scissors") && !asd.localeCompare("lizard"))return"decapitates"
              if(!qwe.localeCompare("lizard") && !asd.localeCompare("paper"))return"eats"
              if(!qwe.localeCompare("paper") && !asd.localeCompare("spock"))return"disproves"
              if(!qwe.localeCompare("spock") && !asd.localeCompare("rock"))return"vaporizes"
              if(!qwe.localeCompare("rock") && !asd.localeCompare("scissors"))return"crushes"
              else return "is"
          }
        }
    });

    $scope.choices = [
        {"name":"rock"},
        {"name":"paper"},
        {"name":"scissors"},
        {"name":"lizard"},
        {"name":"spock"},
      ]

    $scope.disputeSelect = (choice) =>{
      var data = {"choice":choice,"user":$scope.dispute.user}
      console.log(data)
      ShotgunService.gameDispute($scope.dispute.id, data)
      $location.path("/dispute/"+$scope.dispute.id+"/confirmation")
    }

    $scope.shotgunSelect = (choice) =>{
      var data = {"choice":choice,"user":$scope.dispute.shotgun.user}
      ShotgunService.gameDispute($scope.dispute.id, data)
      $location.path("/dispute/"+$scope.dispute.id+"/confirmation")
    }

     $scope.update= ()=>{
      var dispute = ShotgunService.getDispute($scope.dispute.id)
      $scope.dispute = dispute
      console.log(dispute)
      if(dispute.choice && dispute.shotgun.choice){
        $location.path("/dispute/"+dispute.id+"/result")
      }
    }




  });
