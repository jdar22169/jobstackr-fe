require('angular');
require('angular-route');
require('angular-route');
require('angular-drag-and-drop-lists');
var angular = window.angular;

var JobDash = angular.module('JobDash', ['ngRoute', 'dndLists', 'ui.bootstrap']);
require('./jobdash')(JobDash);
require('./router')(JobDash);
