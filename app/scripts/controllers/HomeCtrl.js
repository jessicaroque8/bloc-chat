(function() {
    function HomeCtrl(Room, $firebaseArray) {
      this.Rooms = Room.all;
    }

    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', '$firebaseArray', HomeCtrl]);
console.log("homectrl loaded");
})();
