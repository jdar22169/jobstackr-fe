'use strict';
const angular = require('angular');
require('angular-mocks');
require('../app/js/client');

describe('sort service tests', function () {
  let sortjobs;
  beforeEach(() => {
    angular.mock.module('JobDash');
    angular.mock.inject(function (sortJobs) {
      sortjobs = sortJobs;
    });
  });

  it('should attach events to jobs', () => {
    let jobs = [{_id:1},{_id:2}];
    let events = [{_id:1, jobId:1},{_id:2, jobId:1},{_id:3, jobId:2},{_id:4, jobId:2},{_id:5, jobId:2},{_id:6, jobId:3}];
    console.log(sortjobs.attachEvents(jobs, events));
    expect(sortjobs.attachEvents(jobs, events)).toEqual(
      [
      { _id: 1, events: [{ _id: 1, jobId: 1 }, { _id: 2, jobId: 1 }]},
      { _id: 2, events: [{ _id: 3, jobId: 2 }, { _id: 4, jobId: 2 },{ _id: 5, jobId: 2 }]}
      ]
      );
  });
});
