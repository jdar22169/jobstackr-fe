module.exports = function(app){
  app.directive('jobCard', function(globals){
    return {
      templateUrl:'./templates/job/job_card.html',
      scope: {
        job:'=',
        tweakerstyle: '='
      },
      controller: function($scope, globals){
        $scope.globals = globals;

      }
    };
  });
};
