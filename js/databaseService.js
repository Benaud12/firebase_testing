testApp.factory('databaseService', function(){
  var dbService;
  dbService = new Firebase("https://resplendent-torch-5391.firebaseio.com/");
  return dbService;
});