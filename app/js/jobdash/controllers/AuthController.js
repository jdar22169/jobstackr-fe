'use strict';
module.exports = function(app){
  app.controller('AuthController', function($location, $window, AuthService) {
    let token = $window.localStorage.token;

    this.goSignIn = function(){
      $location.url('/signin');
    };
    this.goSignUp = function() {
      if(!token || token === 'null') return $location.url('/signup');
      $location.url('/');
    };
    this.signUp = function(user){
      AuthService.signUp(user);
    };
    this.signIn = function(user){
      AuthService.signIn(user);

    };
    this.signOut = function(){
      AuthService.signOut();
      $location.url('/signin');
    };
  });
};
