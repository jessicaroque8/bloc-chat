(function() {
   function ModalCtrl ($uibModal, $log, $document) {
      var modal = this;

        this.open = function (size, templateURL) {
          var modalInstance = $uibModal.open({
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
             Room.add(room);
             Room.setActive(room);
             console.log(Room.activeRoom);
            //  Message.setActive(room.$id);
            }, function () {
               $log.info('Modal dismissed at: ' + new Date());
            });
         };

   }




    angular
        .module('blocChat')
        .controller('ModalCtrl', ['$uibModal', '$log', '$document', ModalCtrl]);
})();
