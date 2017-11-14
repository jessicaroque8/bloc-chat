(function() {
   function ModalCtrl ($uibModal, $log, $document) {
      var modal = this;
        modal.items = ['item1', 'item2', 'item3'];

        modal.animationsEnabled = true;

        this.open = function (size, parentSelector, templateURL) {
          var parentElem = parentSelector ?
            angular.element($document[0].querySelector('.content ' + parentSelector)) : undefined;
          var modalInstance = $uibModal.open({
            animation: modal.animationsEnabled,
            backdrop: true,
            ariaLabelledBy: 'modal-title',
            ariaDescribedBy: 'modal-body',
            templateUrl: templateURL,
            controller: 'ModalInstanceCtrl',
            controllerAs: 'modal',
            size: size,
            appendTo: parentElem,
            resolve: {
              items: function () {
                return modal.items;
              }
            }
          });
       };

   }

    angular
        .module('blocChat')
        .controller('ModalCtrl', ['$uibModal', '$log', '$document', ModalCtrl]);
   console.log("modalctrl loaded");
})();
