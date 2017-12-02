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
                  'currentAuth': ['Auth', function(Auth) {
                     return Auth.$waitForSignIn();
                  }]
               }
            })
             .state('home.chat', {
                 url: 'chat',
                 templateUrl: '/templates/messages.html',
                 resolve: {
                    "currentAuth": ["Auth", function(Auth) {
                       return Auth.$requireSignIn();
                    }]
                 }
              });
   }


     angular
         .module('blocChat', ['ui.router', 'ngCookies', 'ngAnimate', 'ngSanitize', 'ngTouch', 'ui.bootstrap', 'firebase'])
         .config(config);
 })();
