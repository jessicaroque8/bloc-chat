(function() {
  function Room($firebaseArray) {
    var Room = {};
    //firebase.database().ref(). Reference the firebase database service.
    //.child("rooms") Reference specifically the "rooms" and its children.
    var ref = firebase.database().ref().child("rooms");
    //Turn the "rooms" database info into an array.
    var rooms = $firebaseArray(ref);


    /**
    * @desc Holds the Firebase array of rooms.
    * @type {Object}
    */
    Room.all = rooms;

    Room.activeRoom = null;


    /**
    * @function add
    * @desc Adds a new room to the Firebase Array with a unique key.
    * @param {Object} room
    */
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


    return Room;
  }

  angular
    .module('blocChat')
    .factory('Room', ['$firebaseArray', Room]);
console.log("roomctrl loaded");
})();
