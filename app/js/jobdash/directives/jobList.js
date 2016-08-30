module.exports = function (app) {
  app.directive('jobList', function () {
    return {
      templateUrl: './templates/job/joblist.html',
      scope: {
        jobs: '='
      }
    };
  });
};
