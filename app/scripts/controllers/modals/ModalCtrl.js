(function() {
   function ModalCtrl ($uibModal, $log, $document) {
      var modal = this;


        this.open = function (size, parentSelector, templateURL) {
          var parentElem = parentSelector ?
            angular.element($document[0].querySelector('.page' + parentSelector)) : undefined;
          var modalInstance = $uibModal.open({
            animation: true,
            backdrop: true,
            ariaLabelledBy: 'modal-title',
            ariaDescribedBy: 'modal-body',
            templateUrl: templateURL,
            controller: 'ModalInstanceCtrl',
            controllerAs: 'modal',
            size: size,
            appendTo: parentElem,
            resolve: {
               input: function () {
                  return console.log('resolve here');
               }
            }
         });
         modalInstance.result.then(function (selectedItem) {
            modal.selected = selectedItem;
         }, function () {
            $log.info('Modal dismissed at: ' + new Date());
         });
      };
   }




    angular
        .module('blocChat')
        .controller('ModalCtrl', ['$uibModal', '$log', '$document', ModalCtrl]);
   console.log("modalctrl loaded");
})();
