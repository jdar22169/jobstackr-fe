module.exports = function(app) {
  require('./sidebar')(app);
  require('./jobForm')(app);
  require('./tweaker')(app);
  // require('./paneContainer')(app);
  require('./eventForm')(app);
  require('./jobCard')(app);
  require('./eventicon')(app);
  require('./jobList')(app);
};
