(function(exports, R) {
  'use strict';

  function Player(spec) {

    // Defaults
    this.uid = 'cat';
    this.points = 0;
    this.computers = 20;
    this.connected = 3;

    for (var key in spec) {
      this[key] = spec[key];
    }

    console.log('made player', this);

  }

  exports.Player = Player;

}(app, R));
