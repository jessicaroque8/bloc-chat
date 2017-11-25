(function () {
   function Users ($firebaseArray, $firebaseObject) {
      var Users = {};
      
      return Users;
  }


angular
   .module('blocChat')
   .factory("Users", ["$firebaseArray", "$firebaseObject", Users]);
})();
