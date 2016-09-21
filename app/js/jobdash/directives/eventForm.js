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
          console.log("event", event);
          event.jobId = $scope.job._id;
          event.typeId = event.selected.id;
          event.value = event.selected.value;
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
