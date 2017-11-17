(function () {
   function ModalInstanceCtrl ($uibModalInstance, Room) {
      var modal = this;
      var RoomObject = Room;

         modal.ok = function (room) {
            RoomObject.add(room);
           $uibModalInstance.close(room);
         };

         modal.cancel = function () {
           $uibModalInstance.dismiss('cancel');
         };

   }

   angular
      .module('blocChat')
      .controller('ModalInstanceCtrl', ['$uibModalInstance', 'Room', ModalInstanceCtrl]);
console.log("modalinstancectrl loaded");
})();
