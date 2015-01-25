(function(exports, R) {
  'use strict';

  function Player(userId) {
    this.uid = userId;
    this.points = 0;
    this.computers = 20;
    this.connected = 3;
  }

  exports.Player = Player;

}(app, R));
