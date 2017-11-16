(function() {
    function HomeCtrl(Room, Message, $firebaseArray) {
      this.Room = Room;
      this.activeRoom = Room.activeRoom;


      this.Message = Message;
      this.activeMsg = Message.activeMessages;

    }

    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', 'Message', '$firebaseArray', HomeCtrl]);
})();
