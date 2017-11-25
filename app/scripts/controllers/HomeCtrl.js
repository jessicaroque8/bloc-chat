(function() {
    function HomeCtrl(currentAuth, Auth, $firebaseAuth, Room, Message, $firebaseArray) {
      this.Room = Room;
      this.Rooms = Room.all;
      this.Message = Message;
      this.User = firebase.auth().currentUser;
      console.log(this.User);


    }

    angular
        .module('blocChat')
        .controller('HomeCtrl', ['currentAuth', 'Auth', '$firebaseAuth', 'Room', 'Message', '$firebaseArray', HomeCtrl]);
})();
