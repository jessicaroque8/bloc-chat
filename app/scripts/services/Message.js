(function() {
  function Message($firebaseArray) {
    var Message = {};
    var ref = firebase.database().ref().child("messages");
    var messages = $firebaseArray(ref);

    Message.all = messages;

    Message.activeMessages = null;

    Message.setActive = function(roomId) {
      Message.activeMessages = $firebaseArray(ref.orderByChild('roomID').equalTo(roomId));

      return Message.activeMessages;
    };


    return Message;
   }


  angular
    .module('blocChat')
    .factory('Message', ['$firebaseArray', Message]);
})();
