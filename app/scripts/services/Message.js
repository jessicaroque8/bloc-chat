(function() {
  function Message($firebaseArray, Room) {
      var Message = {};
      var ref = firebase.database().ref().child("messages");
      var messages = $firebaseArray(ref);

      Message.all = messages;

      Message.activeMessages = null;

      Message.getByRoomID = function (roomID) {
         return $firebaseArray(ref.orderByChild('roomID').equalTo(roomID));
      };

      Message.setActive = function(roomID) {
         Message.activeMessages = Message.getByRoomID(roomID);
         return Message.activeMessages;
      };

    return Message;
}


  angular
    .module('blocChat')
    .factory('Message', ['$firebaseArray', 'Room', Message]);
})();
