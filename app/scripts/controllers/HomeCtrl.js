(function() {
    function HomeCtrl(Users, Auth, $firebaseAuth, Room, Message, $firebaseArray) {
      this.Room = Room;
      this.Rooms = Room.all;
      this.Message = Message;
      this.User = firebase.auth().currentUser;
      console.log(this.User);
      this.Users = Users;


    }

    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Users', 'Auth', '$firebaseAuth', 'Room', 'Message', '$firebaseArray', HomeCtrl]);
})();
