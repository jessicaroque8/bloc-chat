(function () {
   function ModalInstanceCtrl ($uibModalInstance, Room, items) {
      var modal = this;
      var RoomObject = Room;

         modal.ok = function (room) {
           RoomObject.add(room);
           $uibModalInstance.close(console.log(RoomObject));
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
