module.exports = function(app){
  app.controller('AuthController', function($location, AuthService) {
    this.goSignIn = function(){
      $location.url('/signin');
    };
    this.goSignUp = function() {
      $location.url('/signup');
    };
    this.signUp = function(user){
      AuthService.signUp(user);
      $location.url('/');
    };
    this.signIn = function(user){
      console.log('in controller signin', user);
      AuthService.signIn(user);
      $location.url('/');
    };
  });
};
