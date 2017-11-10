(function() {
    function HomeCtrl(Room, $FirebaseArray) {
      this.Rooms = Room.all;
    }

    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', '$firebaseArray', HomeCtrl]);
})();
