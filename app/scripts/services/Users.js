(function () {
   function Users (Auth, $state) {
      const Users = {};
      const googleProvider = new firebase.auth.GoogleAuthProvider();
      Users.auth = Auth;
      Users.authMessage = null;
      Users.authError = null;
      Users.currentUser = null;

      Users.signOut = function () {
         $state.go('login');
         firebase.auth().signOut().then(function() {
           console.log('Signed Out');
         }, function(error) {
           console.error('Sign Out Error', error);
         });
      };

      Users.signIn = function(email, password) {
            Users.auth.$signInWithEmailAndPassword(email, password).then(function(firebaseUser) {
               $state.go('home');
               console.log("Signed in as:", firebaseUser.uid);
            }).catch(function(error) {
               console.error("Authentication failed:", error);
            });
      };

      Users.clearErrMsg = function() {
         Users.authMessage = null;
         Users.authError = null;
      };

      Users.signInGoogle = function() {
         firebase.auth().signInWithRedirect(googleProvider);
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
         Users.currentUser = firebaseUser;
         console.log("user change: " + firebaseUser);
      });

      return Users;
  }


angular
   .module('blocChat')
   .factory('Users', ['Auth', '$state', Users]);
})();
