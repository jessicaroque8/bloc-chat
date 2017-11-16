(function() {
   function config($locationProvider, $stateProvider) {
      $locationProvider
          .html5Mode({
               enabled: true,
               requireBase: false
            });

      $stateProvider
          .state('home', {
               url: '/',
               controller: 'HomeCtrl as home',
               templateUrl: '/templates/home.html'
            })
             .state('home.chat', {
                 url: 'chat',
                 controller: 'HomeCtrl as homechat',
                 templateUrl: '/templates/messages.html',
              });
   }


     angular
         .module('blocChat', ['ui.router', 'ngAnimate', 'ngSanitize', 'ngTouch', 'ui.bootstrap', 'firebase'])
         .config(config);
 })();
