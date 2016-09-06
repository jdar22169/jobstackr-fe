module.exports = function (app) {
  app.factory('sortJobs', function () {

    this.today = []; //from active and isToay = true
    this.backlog = []; //from active and value > 0 || isToday = false
    this.inprocess = []; //from active and value > 2
    this.applied = []; //from active and value = 1

    const service = {};

    service.getToday = function (jobs) {
      return jobs.filter(function (j) {
        if (j.isToday == true && j.statusValue == 0 ){
          j.list = 'today';
          return j;
        }
      });
    };

    service.getBackLog = function (jobs) {
      console.log("getting sorted", jobs);
      return jobs.filter(function (j) {
        return (j.isToday != true && j.statusValue == 0 );
      });
    };

    service.applied = function(jobs){
      return jobs.filter(function (j) {
        if (j.statusValue == 1){
          j.list = 'applied';
          return j;
        }
      });
    };

    service.inprocess = function(jobs){
      return jobs.filter(function (j) {
        if (j.statusValue > 1) {
          j.list = 'inprocess'
          return j
        }
      });
    };

    service.attachEvents = function (jobs, events) {
      let jobsArr = [];
      for (var i = 0; i < jobs.length; i++) {
        jobs[i].events = events.filter(function (e) {
          return e.jobId == jobs[i]._id;
        });
        jobsArr.push(jobs[i]);
      }
      return jobsArr;
    };


    return service;
  });
};
