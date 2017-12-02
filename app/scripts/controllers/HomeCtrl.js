(function() {
    function HomeCtrl(Users, Room, Message) {
      this.Room = Room;
      this.Rooms = Room.all;
      this.Message = Message;
      this.Users = Users;
      this.currentUser = Users.currentUser;


    }

    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Users', 'Room', 'Message', HomeCtrl]);
})();
