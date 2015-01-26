(function(exports, R) {
  'use strict';

  function Player(spec) {

    // Defaults
    this.uid = userId;
    this.points = 0;
    this.computers = 20;
    this.connected = 3;

    for (var key in spec) {
      this[key] = spec[key];
    }

  }

  exports.Player = Player;

}(app, R));
