module.exports = function(app) {
  require('./jobList')(app);
  require('./jobForm')(app);
};
