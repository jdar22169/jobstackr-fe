require('angular');
require('angular-route');
var angular = window.angular;

var JobDash = angular.module('JobDash', ['ngRoute', 'ui.bootstrap']);
require('./jobdash')(JobDash);
require('./router')(JobDash);
