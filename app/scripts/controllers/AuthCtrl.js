(function() {
    function AuthCtrl(Auth, $state, $firebaseAuth) {
      this.auth = Auth;
      var firebaseUser = this.auth.$getAuth();

         // if (firebaseUser) {
         //   console.log("Signed in as:", firebaseUser.uid);
         // } else {
         //   console.log("Signed out");
         // }

      this.signIn = function() {
            this.auth.$signInWithEmailAndPassword(this.email, this.password).then(function(firebaseUser) {
               $state.go('home');
               console.log("Signed in as:", firebaseUser.uid);
            }).catch(function(error) {
               console.error("Authentication failed:", error);
            });
      };

      this.createUser = function() {
         this.authMessage = null;
         this.authError = null;
         this.displayname = null;
         this.photourl = null;

         // Create a new user
         this.auth.$createUserWithEmailAndPassword(this.email, this.password)
            .then(function(firebaseUser) {
               this.authMessage = "User created with uid: " + firebaseUser.uid;
            }).catch(function(error) {
               this.authError = error;
            });

      };

      // this.updateProfile = function() {
      //       this.user.updateProfile({
      //          displayName: this.displayname,
      //          photoURL: this.photourl
      //       }).then(function() {
      //          // Update successful.
      //       }).catch(function(error) {
      //          // An error happened.
      //       });
      // };

      this.deleteUser = function() {
         this.authMessage = null;
         this.authError = null;

      // Delete the currently signed-in user
         this.auth.$deleteUser().then(function() {
            this.authMessage = "User deleted";
         }).catch(function(error) {
            this.authError = error;
         });
      };

      this.auth.$onAuthStateChanged(function(firebaseUser) {
         this.firebaseUser = firebaseUser;
      });

    }

    angular
        .module('blocChat')
        .controller('AuthCtrl', ['Auth', '$state', '$firebaseAuth', AuthCtrl]);
})();
console.log("authctrl loaded");
