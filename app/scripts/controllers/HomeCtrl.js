(function() {
    function HomeCtrl(Room, Message, $firebaseArray) {
      this.Room = Room;
      this.Message = Message;

      console.log(Message.getByRoomId('XM6jH2gTrm'));

    }

    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', 'Message', '$firebaseArray', HomeCtrl]);
})();
