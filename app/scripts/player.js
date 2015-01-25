(function(exports, R) {
  'use strict';

  function Player(spec) {}

  Player.fromFirebase = function (firebaseUser) {
    return new Player(firebaseUser)
  };

  exports.Player = Player;
}(app, R));
