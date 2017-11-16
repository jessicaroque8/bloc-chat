(function() {
    function HomeCtrl(Room, Message, $firebaseArray) {
      this.Room = Room;

      this.Message = Message;


    }

    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', 'Message', '$firebaseArray', HomeCtrl]);
})();
