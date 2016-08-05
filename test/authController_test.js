'use strict';

const angular = require('angular');
require('angular-mocks');
require('../app/js/client.js');

describe('authcontroller tests', () => {
  let authctrl;
  let $httpBackend;
  let $location;
  beforeEach(() => {
    angular.mock.module('JobDash');
    angular.mock.inject(function($controller, _$httpBackend_, _$location_) {
      authctrl = new $controller('AuthController');
      $httpBackend = _$httpBackend_;
      $location = _$location_;
    });
  });
  it('should go sign in page', () => {
    authctrl.goSignIn();
    expect(typeof $location.url).toBe('function');
  });
});
