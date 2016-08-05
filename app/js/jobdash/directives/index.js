module.exports = function(app) {
  require('./backlog')(app);
  require('./jobForm')(app);
  require('./pane')(app);
  require('./paneContainer')(app);
  require('./eventForm')(app);
};
