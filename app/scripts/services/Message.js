(function() {
  function Message($firebaseArray) {
      var Message = {};
      var ref = firebase.database().ref().child("messages");
      var messages = $firebaseArray(ref);

      Message.getByRoomId = function(roomID) {
         messages.child().orderByChild('roomID').equalTo(roomID).on('value', function(snapshot) {
            console.log(snapshot.val());
         });
      };

    return Message;
  }

  angular
    .module('blocChat')
    .factory('Message', ['$firebaseArray', Message]);
})();
