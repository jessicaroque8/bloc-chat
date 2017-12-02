(function() {
    function AuthCtrl(Auth, Users, $state) {
      this.auth = Auth;
      this.Users = Users;

      this.getRedirectResult = function () {
         firebase.auth().getRedirectResult().then(function(result) {
           if (result.credential) {
             let token = result.credential.accessToken;
             $state.go('home');
           }
         }).catch(function(error) {
           let errorCode = error.code;
           let errorMessage = error.message;
           let email = error.email;
           let credential = error.credential;
         });
      }();


    }

    angular
        .module('blocChat')
        .controller('AuthCtrl', ['Auth', 'Users', '$state', AuthCtrl]);
})();
