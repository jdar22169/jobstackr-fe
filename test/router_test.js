const angular = require('angular');
require('angular-mocks');
require('../app/js/client.js');

describe('router tests', () => {
  beforeEach(() => {
    angular.mock.module('JobDash');

  });

  it('should map routes to different partials', () => {
    angular.module('JobDash');
    angular.mock.inject(function($route){
      expect($route.routes['/'].controller).toBe('JobController');
      expect($route.routes['/'].templateUrl).toBe('./templates/partials/home.html');

      expect($route.routes['/signin'].controller).toBe('AuthController');
      expect($route.routes['/signin'].templateUrl).toBe('./templates/partials/signIn.html');

      expect($route.routes['/signup'].controller).toBe('AuthController');
      expect($route.routes['/signup'].templateUrl).toBe('./templates/partials/signUp.html');
    });
  });
});
