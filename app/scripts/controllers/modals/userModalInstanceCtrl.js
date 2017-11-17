(function () {
   function userModalInstanceCtrl ($uibModalInstance, Room) {
      var login = this;

         login.ok = function (username) {
            if (!username || username === "") {
               return;
            } else {
               $uibModalInstance.close(username);
            }
         };

   }

   angular
      .module('blocChat')
      .controller('userModalInstanceCtrl', ['$uibModalInstance', 'Room', userModalInstanceCtrl]);
})();
