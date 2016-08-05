module.exports = function(app){
  app.directive('pane', function(){
    return {
      templateUrl:'./templates/clickPanes/pane.html',
      scope: {
        title:'=',
        count:'=',
        clickaction: '='
      }
    };
  });
};
