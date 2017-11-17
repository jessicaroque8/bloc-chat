(function() {
  function BlocChatCookies($cookies, $uibModal) {
    var currentUser = $cookies.get('blocChatCurrentUser');

    if (!currentUser || currentUser === '') {
    var login = $uibModal.open({
             animation: true,
             backdrop: 'static',
             keyboard: false,
             ariaLabelledBy: 'modal-title',
             ariaDescribedBy: 'modal-body',
             templateUrl: '/templates/modals/setusername.html',
             controller: 'userModalInstanceCtrl',
             controllerAs: 'user',
             resolve: {
                input: function () {
                   return console.log('resolve here');
                }
             }
           });
           login.result.then(function (username) {
             $cookies.put('blocChatCurrentUser', username);
             }, function () {
                $log.info('Username set at: ' + new Date());
                console.log($cookies.get('blocChatCurrentUser'));
             });
    }
  }

  angular
    .module('blocChat')
    .run(['$cookies', '$uibModal', BlocChatCookies]);
})();
