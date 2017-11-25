(function() {
   function config($locationProvider, $stateProvider) {
      $locationProvider
          .html5Mode({
               enabled: true,
               requireBase: false
            });

      $stateProvider
          .state('login', {
               url: '/',
               controller: 'AuthCtrl as auth',
               templateUrl: '/templates/signin.html',
          })
             .state('login.create', {
                  url: '',
                  templateUrl: '/templates/auth/createaccount.html',
             })
          .state('home', {
               url: '/home',
               controller: 'HomeCtrl as home',
               templateUrl: '/templates/home.html',
               resolve: {
                  // controller will not be loaded until $waitForSignIn resolves
                  // Auth refers to our $firebaseAuth wrapper in the factory below
                  "currentAuth": ["Auth", function(Auth) {
                  // $waitForSignIn returns a promise so the resolve waits for it to complete
                     return Auth.$waitForSignIn();
                  }]
               }
            })
             .state('home.chat', {
                 url: 'chat',
                 templateUrl: '/templates/messages.html',
                 resolve: {
                    // controller will not be loaded until $requireSignIn resolves
                    // Auth refers to our $firebaseAuth wrapper in the factory below
                    "currentAuth": ["Auth", function(Auth) {
                       // $requireSignIn returns a promise so the resolve waits for it to complete
                       // If the promise is rejected, it will throw a $stateChangeError (see above)
                       return Auth.$requireSignIn();
                    }]
                 }
              });
   }


     angular
         .module('blocChat', ['ui.router', 'ngCookies', 'ngAnimate', 'ngSanitize', 'ngTouch', 'ui.bootstrap', 'firebase'])
         .config(config);
 })();
