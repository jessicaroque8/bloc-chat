(function() {
  function BlocChatCookies($cookies) {
    var currentUser = $cookies.get('blocChatCurrentUser');
    if (!currentUser || currentUser === '') {
      modal.open('sm', '.page', '/templates/modals/createroom.html')
    }
  }

  angular
    .module('blocChat')
    .run(['$cookies', BlocChatCookies]);
})();
