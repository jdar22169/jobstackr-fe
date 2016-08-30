module.exports = function (app) {
  app.directive('jobList', function () {
    return {
      templateUrl: './templates/job/joblist.html',
      scope: {
        jobs: '=',
        currentlisttitle: '='
      },
      require: '^^ngController',
      link: function($scope, elem, attr, controller) {
        $scope.jobClick = controller.jobClick;

      }
    };
  });
};
