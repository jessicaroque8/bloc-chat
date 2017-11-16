(function () {
   function ModalInstanceCtrl ($uibModalInstance) {
      var modal = this;

         modal.ok = function (room) {
           $uibModalInstance.close(room);
         };

         modal.cancel = function () {
           $uibModalInstance.dismiss('cancel');
         };

   }

   angular
      .module('blocChat')
      .controller('ModalInstanceCtrl', ['$uibModalInstance', ModalInstanceCtrl]);
})();
