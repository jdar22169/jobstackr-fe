'use strict';
module.exports = function(app){
  app.controller('AuthController', function($location, $window, AuthService, ErrorService) {
    let token = $window.localStorage.token;

    this.errors = ErrorService.getErrors();

    this.goSignIn = function(){
      $location.url('/signin');
    };
    this.goSignUp = function() {
      if(!token || token === 'null') return $location.url('/signup');
      $location.url('/');
    };
    this.signUp = function(user){
      AuthService.signUp(user)
      .then(() => {
        $location.url('/');
      }, ErrorService.logError('Error in Sign Up: '));
    };
    this.signIn = function(user){
      AuthService.signIn(user)
      .then(() => {
        $location.url('/');
      }, ErrorService.logError('Error in Sign In: '));
    };
    this.signOut = function(){
      AuthService.signOut();
      // if (this.errors.length === 1) this.errors = [];
      $location.url('/signin');
    };

  });
};
