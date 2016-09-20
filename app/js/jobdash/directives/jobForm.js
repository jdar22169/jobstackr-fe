module.exports = function (app) {
  app.directive('jobForm', function ($uibModal) {
    return {
      templateUrl: './templates/job/job_form.html',
      scope: {
        linkApiJob: '=',
        tweakerstyle: '='
      },
      require: '^^ngController',
      link: function ($scope, elem, attr, controller) {

        $scope.formHandler = function (event) {
          if(event.clipboardData){
            controller.getLink({
              url: event.clipboardData.getData('text/plain')
            });
          }
          $scope.showform = true;
        };


        $scope.$watch('linkApiJob', function () {
          if ($scope.linkApiJob.title) $scope.job.title = $scope.linkApiJob.title;
          if ($scope.linkApiJob.company) $scope.job.company = $scope.linkApiJob.company;
        });

        $scope.deleteJob = controller.deleteJob;

        $scope.submit = function (job) {
          if(!job.title || !job.company) {
            $scope.tweakerstyle.jobFormError = true
          } else {
          controller.addJobs(job);
          $scope.job = {};
          $scope.showform = false;
          $scope.tweakerstyle.jobFormError = false
          controller.currentList = controller.backlog
          controller.currentListTitle = "Backlog"
        }
        };
      }

    };
  });
};
