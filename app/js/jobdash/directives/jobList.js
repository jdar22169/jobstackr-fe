module.exports = function (app) {
  app.directive('jobList', function () {
    var controller = ['$scope', function ($scope) {

      $scope.logEvent = function (message, event) {
        console.log(message, '(triggered by the following', event.type, 'event)');
        console.log(event);
      };

      $scope.$watch('today', function (model) {
        console.log(model);
        console.log('yeah');
      }, true);

      $scope.$watch('jobs', function (model) {
        console.log(model);
        console.log('Oh, yeah!');
      }, true);

    }];
    return {
      templateUrl: './templates/job/joblist.html',
      scope: {
        jobs: '=',
        today: '=',
        form: '@'
      },
      controller: controller
    };
  });
};
