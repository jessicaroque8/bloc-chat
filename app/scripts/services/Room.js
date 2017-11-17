(function() {
  function Room($firebaseArray) {
    var Room = {};
    var ref = firebase.database().ref().child("rooms");
    var rooms = $firebaseArray(ref);


    Room.all = rooms;
    Room.activeRoom = null;



    Room.add = function(room) {
        Room.all = rooms.$add({name: room}).then(function(ref) {
           var id = ref.key;
           console.log("added record with id " + id);
           rooms.$indexFor(id);
        });
     };

    Room.setActive = function (room) {
      Room.activeRoom = room;
      console.log(Room.activeRoom);
   };

   Room.getActiveID = function () {
      var ID = Room.activeRoom.$id;
      return(ID);
   };

    return Room;
  }

  angular
    .module('blocChat')
    .factory('Room', ['$firebaseArray', Room]);
console.log("roomctrl loaded");
})();
