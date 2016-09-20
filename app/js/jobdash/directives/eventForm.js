module.exports = function (app) {
  app.directive('eventForm', function (globals) {
    return {
      templateUrl: './templates/job/eventForm.html',
      scope: {
        job: '='
      },

      require: '^^ngController',
      link: function ($scope, elem, attr, controller) {
        $scope.addEvent = function (event) {
          event.jobId = $scope.job._id;
          event.typeId = $scope.selected.id;
          event.value = $scope.selected.value;
          event.date = new Date().getTime();
          controller.addEvent(event, $scope.job);
        };
      },
      controller: function ($scope) {
        $scope.items = globals.eventTypes;
      }
    };
  });
};
