angular.module('MyApp')
  .factory('ShotgunService', function($http) {
    return {
      getLeaderboard: function() {
        // return $http.get('/');
         return [{"id":"david","name":"david","score":30,"photo":"https://avatars.githubusercontent.com/magicknot"}];
      },
      getCars: function() {
      //  return $http.get('/cars');
      return [
        {"id":"csimao","owner":"simao","plate":"22-AA-12","model":"mercedes class E","free":true,"disputed":false,
          "photo":"https://avatars.githubusercontent.com/lasering"},
        {"id":"cdavid","owner":"david","plate":"22-BB-12","model":"saxo cup do Aco","free":false,"disputed":false,
          "photo":"https://avatars.githubusercontent.com/magicknot"},
        {"id":"cdts","owner":"goncalo","plate":"LF-RF","model":"Left and Right feet","free":false,"disputed":true,
          "photo":"https://avatars.githubusercontent.com/diutsu"},
    ]

      },
      shotgun: function(data) {
        //return $http.post('/shotgun', data);
        return {"id":"qawe",
          "user":{"name":"david","photo":"https://avatars.githubusercontent.com/magicknot"},
          "time":"4:39",
          "car":{"owner":"simao"}
        }
      },

      getShotgun: function(shotgunId) {
        //return $http.get('/shotgun/'+shotgunId);
        return {"id":shotgunId,
          "user":{"name":"david","photo":"https://avatars.githubusercontent.com/magicknot"},
          "time":"4:39",
          "car":{"owner":"simao"}
        }
      },
      getUser: function(name) {
        //return $http.get('/user/'+name);
      },


      getDisputeReasons: function() {
        //return $http.get('/reasons');
        return [{"id":"1","msg":"Didn't say 'Shotgun!'"},
        {"id":"2","msg":"Wasn't outside"},
        {"id":"3","msg":"Re-entred the building"},
        {"id":"4","msg":"Didn't had line-of-side"},
        {"id":"5","msg":"No seatback"}]
      },
      dispute:function(){
        //return $http.post('/dispute', data);
        return "qwe";
      },
      getDispute:function(disputeId){
        //return $http.get('/dispute/'+disputeId);
          return {"id": disputeId,
            "reason":"Wasn't outside",
            "user": {"name":"goncalo","photo":"https://avatars.githubusercontent.com/diutsu"},
            "choice":"spock",
            "shotgun":{
              "user":{"name":"david","photo":"https://avatars.githubusercontent.com/magicknot"},
              "car":{"owner":"simao"},
              "choice":"rock"
            }
        }
      },
      gameDispute:function(disputeId, data){
        //return $http.put('/dispute/'+disputeId, data);
        return
      }

    };
  });
