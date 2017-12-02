(function () {
   function Users (Auth, $state) {
      var Users = {};
      Users.auth = Auth;
      Users.authMessage = null;
      Users.authError = null;

      Users.signOutUser = function () {
         $state.go('login');
         firebase.auth().signOut().then(function() {
           console.log('Signed Out');
         }, function(error) {
           console.error('Sign Out Error', error);
         });
      };

      Users.createUser = function(email, password) {
         Users.auth.$createUserWithEmailAndPassword(email, password)
            .then(function(firebaseUser) {
               if (firebaseUser) {
                  Users.authMessage = "You've successfully created an account. Please log in below.";
                  console.log("User created with uid: " + firebaseUser.uid);
                  $state.go('login');
               }
            }).catch(function(error) {
               Users.authError = "Uh oh, we weren't able to create an account with that info. Please try again.";
            });
      };

      Users.auth.$onAuthStateChanged(function(firebaseUser) {
         this.firebaseUser = firebaseUser;
         console.log("user change: " + firebaseUser);
      });

      return Users;
  }


angular
   .module('blocChat')
   .factory('Users', ['Auth', '$state', Users]);
})();
