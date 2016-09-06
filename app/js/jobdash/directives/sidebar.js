module.exports = function (app) {
  app.directive('sidebar', function ($sce, $timeout) {
    return {
      templateUrl: './templates/sidebar.html',
      scope: {
        backlog: '=',
        today: '=',
        inprocess: '=',
        applied: '=',
        tweakerstyle: '='
      },
      require: '^^ngController',
      link: function ($scope, elem, attr, controller) {
        $scope.active = 1
        $scope.listClick = function (list, title, active) {
          controller.tweaker.jobListLoading = true;
          controller.currentList = [];
          controller.currentListTitle = title;
          $scope.active = active;

          $timeout(function () {
            controller.currentList = list;
            controller.tweaker.jobListLoading = false;
          }, 250);
        };
      }
    };
  });
};
