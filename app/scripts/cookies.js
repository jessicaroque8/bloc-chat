(function() {
  function BlocChatCookies($cookies, $uibModal) {
    var currentUser = $cookies.get('blocChatUser');
    if (!currentUser || currentUser == '') {
    var login = $uibModal.open({
             animation: true,
             backdrop: 'static',
             keyboard: false,
             ariaLabelledBy: 'modal-title',
             ariaDescribedBy: 'modal-body',
             templateUrl: '/templates/modals/setusername.html',
             controller: 'userModalInstanceCtrl',
             controllerAs: 'login',
             resolve: {
                input: function () {
                   return console.log('resolve here');
                }
             }
           });
           login.result.then(function (username) {
             $cookies.put('blocChatUser', username);
             console.log("cookies saved for " + username);
             }, function () {
                $log.info('Username set at: ' + new Date());
                console.log($cookies.get('blocChatUser'));
             });
    }
  }

  angular
    .module('blocChat')
    .run(['$cookies', '$uibModal', BlocChatCookies]);
})();
