module.exports = function(app) {
  app.controller('JobController', function($http, AuthService) {
    this.$http = $http;
    this.jobs = [];
    this.today = [{company:"test", title:"title"}];


    this.getActiveJobs = function(){
      $http({
        method: 'GET',
        url:'http://localhost:3000/jobs/active',
        headers: {
          token: AuthService.getToken()
        }
      })
      .then((res) => {
        this.jobs = res.data;
      },(err) => {
        console.log(err);
      });
    };

    this.addJobs = function(job) {
      $http({
        method: 'POST',
        data: job,
        url: 'http://localhost:3000/jobs',
        headers: {
          token: AuthService.getToken()
        }
      })
      .then((res) => {
        this.jobs.push(res.data);
      }, (err) => {
        console.log(err);
      });
    }.bind(this);

    this.deleteJobs = function(job) {
      $http({
        method: 'DELETE',
        data: job,
        url: 'http://localhost:3000/jobs/' + job._id,
        headers: {
          token: AuthService.getToken()
        }
      })
      .then(() => {
        let index = this.jobs.indexOf(job);
        this.jobs.splice(index, 1);
      }, (err) => {
        console.log(err);
      });
    }.bind(this);

    this.updateJobs = function(job) {
      $http({
        method: 'PUT',
        data: job,
        url: 'http://localhost:3000/jobs',
        headers: {
          token: AuthService.getToken()
        }
      })
      .then(() => {
        this.jobs = this.jobs.map(nJob => {
          return nJob._id === job._id ? job : nJob;
        });
      }, (err) => {
        console.log(err);
      });
    }.bind(this);
  });
};
