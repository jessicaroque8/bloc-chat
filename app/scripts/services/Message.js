(function() {
  function Message($firebaseArray, Room, Users) {
      const Message = {};
      const ref = firebase.database().ref().child("messages");
      const messages = $firebaseArray(ref);

      Message.all = messages;

      Message.activeMessages = null;

      Message.getByRoomID = function (roomID) {
         return $firebaseArray(ref.orderByChild('roomID').equalTo(roomID));
      };

      Message.setActive = function() {
         let activeRoomID = Room.getActiveID();
         Message.activeMessages = Message.getByRoomID(activeRoomID);
         return Message.activeMessages;
      };

      Message.send = function (newMessage) {
         let activeRoomID = Room.getActiveID();
         let user = Users.currentUser.email;
         messages.$add({content: newMessage, roomID: activeRoomID, sentAt: firebase.database.ServerValue.TIMESTAMP, username: user }).then(function(ref) {
            let id = ref.key;
            console.log("added new message by " + user + " with message id " + id);
            messages.$indexFor(id);
         });
      };

    return Message;
   }


  angular
    .module('blocChat')
    .factory('Message', ['$firebaseArray', 'Room', 'Users', Message]);
})();
