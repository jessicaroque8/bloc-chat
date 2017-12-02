(function() {
   function ModalCtrl ($uibModal, Room, Message, $state, $log, $document) {
      const modal = this;
      this.Room = Room;
      this.Message = Message;

        this.open = function (size, templateURL) {
          const modalInstance = $uibModal.open({
            animation: true,
            backdrop: true,
            ariaLabelledBy: 'modal-title',
            ariaDescribedBy: 'modal-body',
            templateUrl: templateURL,
            controller: 'ModalInstanceCtrl',
            controllerAs: 'modal',
            size: size,
            resolve: {
               input: function () {
                  return console.log('resolve here');
               }
            }

          });
          modalInstance.result.then( function (room) {
             $state.go('home.chat');
            }, function () {
               $log.info('Modal dismissed at: ' + new Date());
            });
         };

   }




    angular
        .module('blocChat')
        .controller('ModalCtrl', [ '$uibModal', 'Room', 'Message', '$state', '$log', '$document', ModalCtrl]);
})();
