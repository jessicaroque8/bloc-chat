(function() {
    function MessageCtrl(Room, Message, $cookies, $firebaseArray) {
      this.Message = Message;
      this.newMessage = "";

      this.sendClear = function(message) {
         Message.send(message);
         this.newMessage = "";
      };
   }

    angular
        .module('blocChat')
        .controller('MessageCtrl', ['Room', 'Message', '$cookies', '$firebaseArray', MessageCtrl]);
})();
