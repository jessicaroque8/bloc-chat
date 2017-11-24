(function () {
   function userModalInstanceCtrl ($uibModalInstance) {
      var login = this;

         login.ok = function (username) {
            if (!username || username === "") {
               var statement = console.log("username is empty");
               return statement;
            } else {
               $uibModalInstance.close(username);
            }
         };

   }

   angular
      .module('blocChat')
      .controller('userModalInstanceCtrl', ['$uibModalInstance', userModalInstanceCtrl]);
})();
