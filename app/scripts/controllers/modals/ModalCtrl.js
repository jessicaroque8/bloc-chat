(function() {
   function ModalCtrl ($uibModal, $log, $document, Room, Message) {
      var modal = this;
      var modalRoom = Room;
      var modalMsg = Message;

        this.open = function (size, templateURL) {
         //  var parentElem = parentSelector ?
         //    angular.element($document[0].querySelector('.page' + parentSelector)) : undefined;
          var modalInstance = $uibModal.open({
            animation: true,
            backdrop: true,
            ariaLabelledBy: 'modal-title',
            ariaDescribedBy: 'modal-body',
            templateUrl: templateURL,
            controller: 'ModalInstanceCtrl',
            controllerAs: 'modal',
            size: size,
            // appendTo: parentElem,
            resolve: {
               input: console.log("What is this resolve for?")
               }

          });
          modalInstance.result.then(function (room) {
             modalRoom.add(room);
             (console.log(Room.all));
             modalRoom.setActive(room);
             (console.log(Room.activeRoom));
            //  Message.setActive(room.$id);
            $log.info('Modal dismissed at: ' + new Date());
            });
         };

   }




    angular
        .module('blocChat')
        .controller('ModalCtrl', ['$uibModal', '$log', '$document', 'Room', 'Message', ModalCtrl]);
})();
