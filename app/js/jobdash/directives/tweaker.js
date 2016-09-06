module.exports = function(app){
  app.directive('tweaker', function($window){
    return {
      scope: {

      },
      require: '^^ngController',
      link: function(scope, elem, attr, controller){
        controller.tweaker.panelstyle = { 'height': $window.innerHeight - 0 + 'px'}
        controller.tweaker.eventpane =  { 'height': $window.innerHeight - 303 + 'px'}


        angular.element($window).bind('resize', function () {


            controller.tweaker.panelstyle = { 'height': $window.innerHeight - 0 + 'px'}
            controller.tweaker.eventpane =  { 'height': $window.innerHeight - 303 + 'px'}

            // manuall $digest required as resize event
            // is outside of angular
            scope.$apply();

          })

      }
    };
  });
};
