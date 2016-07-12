module.exports = function(app) {
  app.directive('jobForm', function() {
    return {
      templateUrl: './templates/job/jobform.html',
      scope: {
        job: '=',
        type: '@'
      },
      require: '^^ngController',
      link: function ($scope, elem, attr, controller) {
        $scope.deleteJob = controller.deleteJob;
        $scope.submit = $scope.type === 'new' ? controller.addJobs : controller.updateJobs;
      }
    };
  });
};
