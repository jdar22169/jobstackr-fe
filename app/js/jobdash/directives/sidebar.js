module.exports = function (app) {
  app.directive('sidebar', function () {
    return {
      templateUrl: './templates/sidebar.html',
      scope: {
        backlog: '=',
        today: '=',
        inprocess: '=',
        applied: '='
      },
      require: '^^ngController',
      link: function($scope, elem, attr, controller) {
        $scope.active = 1
        $scope.listClick = function(list, title, active){
              controller.currentList = list;
              controller.currentListTitle = title;
              $scope.active = active;
              $scope.title = controller.currentListTitle
            }
      }
    };
  });
};
