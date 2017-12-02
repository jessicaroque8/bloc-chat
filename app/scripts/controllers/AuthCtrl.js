(function() {
    function AuthCtrl(Auth, Users, $state, $firebaseAuth) {
      this.auth = Auth;
      var firebaseUser = this.auth.$getAuth();
      var googleProvider = new firebase.auth.GoogleAuthProvider();
      this.Users = Users;

      this.getRedirectResult = function () {
         firebase.auth().getRedirectResult().then(function(result) {
           if (result.credential) {
             var token = result.credential.accessToken;
             $state.go('home');
           }
           var user = result.user;
         }).catch(function(error) {
           var errorCode = error.code;
           var errorMessage = error.message;
           var email = error.email;
           var credential = error.credential;
         });
      }();

      this.signIn = function(email, password) {
            this.auth.$signInWithEmailAndPassword(email, password).then(function(firebaseUser) {
               $state.go('home');
               console.log("Signed in as:", firebaseUser.uid);
            }).catch(function(error) {
               console.error("Authentication failed:", error);
            });
      };

      this.signInGoogle = function() {
         firebase.auth().signInWithRedirect(googleProvider);
      };


    }

    angular
        .module('blocChat')
        .controller('AuthCtrl', ['Auth', 'Users', '$state', '$firebaseAuth', AuthCtrl]);
})();
