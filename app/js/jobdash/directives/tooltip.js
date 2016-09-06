module.exports = function(app){
  app.directive('tooltip', function(globals){
    return {
      templateUrl:'./templates/tooltip.html',
      scope: {
        message:'@'
      },
      controller: function($scope){
        $scope.messages = {
          backlog:
          ['These are all the jobs you need to take an',
          'intal action on (i.e. submit and application',
          ' or send an email'],

          applied:
          ['These are all the jobs you need to take an',
          'intal action on (i.e. submit and application',
          ' or send an email']


        };

      }
    };
  });
};
