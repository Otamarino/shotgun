angular.module('MyApp', ['ngRoute', 'satellizer'])
  .config(function($routeProvider, $locationProvider, $authProvider) {
    $locationProvider.html5Mode(true);

    $routeProvider
      .when('/', {
        templateUrl: 'partials/home.html',
        controller: 'LeaderboardCtrl',
      })
      .when('/shotgun', {
        templateUrl: 'partials/cars.html',
        controller: 'ShotgunCtrl'
      })
      .when('/shotgun/:shogunId', {
        templateUrl: 'partials/confirmation.html',
        controller: 'ShotgunCtrl',
      })
      .when('/dispute/:shogunId', {
        templateUrl: 'partials/dispute.html',
        controller: 'DisputeCtrl',
      })
      .when('/dispute/:shogunId/challenge', {
        templateUrl: 'partials/dispute-challenge.html',
        controller: 'RPSLSCtrl',
      })
      .when('/game/:disputeId', {
        templateUrl: 'partials/dispute-confirmation.html',
        controller: 'RPSLSCtrl',
      })
      .when('/game/:disputeId/result', {
        templateUrl: 'partials/dispute-win.html',
        controller: 'RPSLSCtrl',
      })
      .when('/reset/:token', {
        templateUrl: 'partials/reset.html',
        controller: 'ResetCtrl',
        resolve: { skipIfAuthenticated: skipIfAuthenticated }
      })
      .otherwise({
        templateUrl: 'partials/404.html'
      });

    $authProvider.loginUrl = '/login';
    $authProvider.signupUrl = '/signup';
    $authProvider.facebook({
      url: '/auth/facebook',
      clientId: '980220002068787',
      redirectUri: 'http://localhost:3000/auth/facebook/callback'
    });
    $authProvider.google({
      url: '/auth/google',
      clientId: '631036554609-v5hm2amv4pvico3asfi97f54sc51ji4o.apps.googleusercontent.com'
    });
    $authProvider.twitter({
      url: '/auth/twitter'
    });
    $authProvider.github({
      url: '/auth/github',
      clientId: 'c8d5bf482c0ece46fa1a'
    });

    function skipIfAuthenticated($location, $auth) {
      if ($auth.isAuthenticated()) {
        $location.path('/');
      }
    }

    function loginRequired($location, $auth) {
      if (!$auth.isAuthenticated()) {
        $location.path('/login');
      }
    }
  })
  .run(function($rootScope, $window) {
    if ($window.localStorage.user) {
      $rootScope.currentUser = JSON.parse($window.localStorage.user);
    }
  });
