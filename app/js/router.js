'use strict';

module.exports = function(JobDash) {
  JobDash.config(['$routeProvider', function($route) {
    $route
      .when('/',{
        templateUrl:'./templates/partials/home.html',
        controller:'JobController',
        controllerAs:'jobctrl'
      })
      .when('/signin',{
        templateUrl: './templates/partials/signIn.html',
        controller:'AuthController',
        controllerAs:'authctrl'
      })
      .when('/signup', {
        templateUrl: './templates/partials/signUp.html',
        controller:'AuthController',
        controllerAs: 'authctrl'
      });

  }]);
};
