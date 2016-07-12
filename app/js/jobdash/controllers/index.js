module.exports = function(app) {
  require('./JobController.js')(app);
  require('./AuthController.js')(app);
};
