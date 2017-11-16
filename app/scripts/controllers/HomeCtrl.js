(function() {
    function HomeCtrl(Room, $firebaseArray) {
      this.Room = Room;



    }

    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', '$firebaseArray', HomeCtrl]);
})();
