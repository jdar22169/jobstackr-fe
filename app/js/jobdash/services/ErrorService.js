'use strict';

module.exports = function(app){
  app.factory('ErrorService', function(){
    const service = {};
    const errors = [];

    service.logError = function(message){
      return function(err){
        console.log('service',err);
        errors.push(message);
      };
    };
    service.getErrors = function() {
      return errors;
    };
    return service;
  });
};
