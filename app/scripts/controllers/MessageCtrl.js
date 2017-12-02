(function() {
    function MessageCtrl(Room, Message, $cookies, $firebaseArray) {
      this.Message = Message;
      this.newMessage = "";
      this.sendClear = function() {
         Message.send(this.newMessage);
         this.newMessage = "";
      };
   }

    angular
        .module('blocChat')
        .controller('MessageCtrl', ['Room', 'Message', '$cookies', '$firebaseArray', MessageCtrl]);
})();
