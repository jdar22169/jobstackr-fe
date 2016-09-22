module.exports = function(app) {
  app.factory('AuthService', function($http, $window, $location) {
    let token = $window.localStorage.token;
    let url = process.env.URI;
    const service = {};

    service.signUp = function(user) {
      user.tooltips = true;
      $window.localStorage.tooltips;
      return $http.post(url + 'signup', user)
        .then((res) => {
          token = res.data.token;
          $window.localStorage.token = token;
          $location.url('/');
          return res;
        }, (err) => {
          console.log(err);
          $location.url('/signup');
        });
    };

    service.signIn = function(user) {
      let base64Auth = btoa(user.username + ':' + user.password);
      let authString = 'Basic ' + base64Auth;
      console.log('in service sign in');
      return $http({
        url: url + 'signin',
        method: 'POST',
        headers: {
          authorization: authString
        }
      }).then((res) => {
        console.log('in service signin then');
        token = res.data.token;
        $window.localStorage.token = token;
        $window.localStorage.tooltips = res.data.tooltips;
        return res;
      });
    };

    service.signOut = function() {
      token = $window.localStorage.token = null;
    };

    service.getToken = function() {
      return $window.localStorage.token;
    };

    return service;
  });
};
