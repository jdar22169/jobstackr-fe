module.exports = function (app) {

  app.directive('paneContainer', function () {
    return {
      templateUrl: './templates/clickPanes/paneContainer.html',
      scope: {
        backlog: '=',
        today: '=',
        inprocess: '=',
        applied: '='
      },
      require: '^^ngController',
      link: function ($scope, elem, attr, controller) {
        var initializing = 0;
        $scope.$watch('backlog', function (newmodel, oldmodel) {
          $scope.backlogCount = $scope.backlog.length;
          if (newmodel.length > oldmodel.length) {
            initializing = initializing + 1;
            if (initializing > 1) {
              let myEl = angular.element(document.querySelector('body > main > div > div > div:nth-child(2) > pane-container > div.three.columns.pane.backlog.roundedcorners'));
              myEl.addClass('flashNow');
              setTimeout(function () {
                myEl.removeClass('flashNow');
              }, 1000);
            }
          }
        }, true);

        $scope.$watch('today', function (newmodel, oldmodel) {
          $scope.todayCount = $scope.today.length;
          if (newmodel.length > oldmodel.length) {
            initializing = initializing + 1;
            if (initializing > 2) {
              let myEl = angular.element(document.querySelector('body > main > div > div > div:nth-child(2) > pane-container > div.three.columns.pane.today.roundedcorners'));
              myEl.addClass('flashNow');
              setTimeout(function () {
                myEl.removeClass('flashNow');
              }, 1000);
            }
          }
        }, true);

        $scope.$watch('inprocess', function (newmodel, oldmodel) {
          $scope.inprocessCount = $scope.inprocess.length;
          if (newmodel.length > oldmodel.length) {
            initializing = initializing + 1;
            if (initializing > 3) {
              let myEl = angular.element(document.querySelector('body > main > div > div > div:nth-child(2) > pane-container > div.three.columns.pane.inprogress.roundedcorners'));
              myEl.addClass('flashNow');
              setTimeout(function () {
                myEl.removeClass('flashNow');
              }, 1000);
            }
          }
        }, true);

        $scope.$watch('applied', function (newmodel, oldmodel) {
          $scope.appliedCount = $scope.applied.length;
          if (newmodel.length > oldmodel.length) {
            initializing = initializing + 1;
            if (initializing > 4) {
              let myEl = angular.element(document.querySelector('body > main > div > div > div:nth-child(2) > pane-container > div.three.columns.pane.applied.roundedcorners'));
              myEl.addClass('flashNow');
              setTimeout(function () {
                myEl.removeClass('flashNow');
              }, 1000);
            }
          }
        }, true);



        $scope.todayclick = function () {
          controller.showjobevents = true;
          controller.showbacklog = false;
          controller.joblist = controller.today;
          controller.backlogshow = false;
          let myEl = angular.element(document.querySelector('div.three.columns.pane.today'));
          myEl.addClass('paneslected');
          myEl = angular.element(document.querySelector('div.three.columns.pane.backlog'));
          myEl.removeClass('paneslected');
          myEl = angular.element(document.querySelector('div.three.columns.pane.inprogress'));
          myEl.removeClass('paneslected');
          myEl = angular.element(document.querySelector('div.three.columns.pane.applied'));
          myEl.removeClass('paneslected');
          controller.listtitle = 'Today'

        };

        $scope.backlogclick = function () {
          controller.showjobevents = false;
          controller.showbacklog = true;
          controller.backlogshow = true;
          let myEl = angular.element(document.querySelector('div.three.columns.pane.today'));
          myEl.removeClass('paneslected');
          myEl = angular.element(document.querySelector('div.three.columns.pane.backlog'));
          myEl.addClass('paneslected');
          myEl = angular.element(document.querySelector('div.three.columns.pane.inprogress'));
          myEl.removeClass('paneslected');
          myEl = angular.element(document.querySelector('div.three.columns.pane.applied'));
          myEl.removeClass('paneslected');
          controller.listtitle = 'Today'
        };

        $scope.inprocessclick = function () {
          controller.showjobevents = true;
          controller.showbacklog = false;
          controller.joblist = controller.inprocess;
          controller.backlogshow = false;
          let myEl = angular.element(document.querySelector('div.three.columns.pane.today'));
          myEl.removeClass('paneslected');
          myEl = angular.element(document.querySelector('div.three.columns.pane.backlog'));
          myEl.removeClass('paneslected');
          myEl = angular.element(document.querySelector('div.three.columns.pane.inprogress'));
          myEl.addClass('paneslected');
          myEl = angular.element(document.querySelector('div.three.columns.pane.applied'));
          myEl.removeClass('paneslected');
          controller.listtitle = 'In Process'
        };

        $scope.appliedclick = function () {
          controller.showjobevents = true;
          controller.showbacklog = false;
          controller.joblist = controller.applied;
          controller.backlogshow = false;
          let myEl = angular.element(document.querySelector('div.three.columns.pane.today'));
          myEl.removeClass('paneslected');
          myEl = angular.element(document.querySelector('div.three.columns.pane.backlog'));
          myEl.removeClass('paneslected');
          myEl = angular.element(document.querySelector('div.three.columns.pane.inprogress'));
          myEl.removeClass('paneslected');
          myEl = angular.element(document.querySelector('div.three.columns.pane.applied'));
          myEl.addClass('paneslected');
          controller.listtitle = 'Applied'
        };
      },
      controller: ['$scope', function ($scope) {
        $scope.appliedclick = function () {
          alert();
        };
      }]
    };
  });
};
