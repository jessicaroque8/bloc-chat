(function() {
    function HomeCtrl(currentAuth, Auth, Room, Message, $firebaseArray) {
      this.Room = Room;
      this.Rooms = Room.all;
      this.Message = Message;



    }

    angular
        .module('blocChat')
        .controller('HomeCtrl', ['currentAuth', 'Auth', 'Room', 'Message', '$firebaseArray', HomeCtrl]);
})();
