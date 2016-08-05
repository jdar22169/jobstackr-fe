module.exports = function(app){
  require('./AuthService.js')(app);
  require('./SortJobs.js')(app);
  require('./globals.js')(app);
};
