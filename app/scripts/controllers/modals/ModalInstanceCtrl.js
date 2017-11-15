(function () {
   function ModalInstanceCtrl ($uibModalInstance, items) {
      var modal = this;
         // modal.items = items;
         // modal.selected = {
         //   item: modal.items[0]
         // };

         modal.ok = function () {
           $uibModalInstance.close(modal.selected.item);
         };

         modal.cancel = function () {
           $uibModalInstance.dismiss('cancel');
         };

   }

   angular
      .module('blocChat')
      .controller('ModalInstanceCtrl', ['$uibModalInstance', ModalInstanceCtrl]);
console.log("modalinstancectrl loaded");
})();
