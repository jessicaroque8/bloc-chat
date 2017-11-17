(function() {
  function Message($firebaseArray, Room, $cookies) {
      var Message = {};
      var ref = firebase.database().ref().child("messages");
      var messages = $firebaseArray(ref);

      Message.all = messages;

      Message.activeMessages = null;

      Message.getByRoomID = function (roomID) {
         return $firebaseArray(ref.orderByChild('roomID').equalTo(roomID));
      };

      Message.setActive = function() {
         var activeRoomID = Room.getActiveID();
         Message.activeMessages = Message.getByRoomID(activeRoomID);
         return Message.activeMessages;
      };

      Message.send = function (newMessage) {
         var activeRoomID = Room.getActiveID();
         var user = $cookies.get('blocChatCurrentUser');
         Message.all = messages.$add({content: newMessage, roomID: activeRoomID, sentAt: firebase.database.ServerValue.TIMESTAMP, username: user }).then(function(ref) {
            var id = ref.key;
            console.log("added new message by " + user + " with message id " + id);
            messages.$indexFor(id);
         });
      };

    return Message;
   }


  angular
    .module('blocChat')
    .factory('Message', ['$firebaseArray', 'Room', '$cookies', Message]);
})();
