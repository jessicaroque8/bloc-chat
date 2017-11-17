(function() {
    function HomeCtrl(Room, Message, $firebaseArray) {
      this.Room = Room;
      this.Rooms = Room.all;
      this.Message = Message;


    }

    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', 'Message', '$firebaseArray', HomeCtrl]);
})();
