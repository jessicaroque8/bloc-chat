(function () {
   function ModalInstanceCtrl ($uibModalInstance, Room, Message) {
      const modal = this;
      this.Room = Room;

         modal.ok = function (room) {
            Room.add(room);
            Room.setActive(room);
           $uibModalInstance.close(room);
         };

         modal.cancel = function () {
           $uibModalInstance.dismiss('cancel');
         };

   }

   angular
      .module('blocChat')
      .controller('ModalInstanceCtrl', ['$uibModalInstance', 'Room', 'Message', ModalInstanceCtrl]);
})();
