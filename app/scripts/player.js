(function(exports) {
  'use strict';

  function Player(spec) {

    // Defaults
    this.uid = 'cat';
    this.points = 0;
    this.computers = 20;
    this.connected = 3;

    this.updateData(spec);
  }

  Player.prototype.updateData = function (data) {
    for (var key in data) {
      this[key] = data[key];
    }
  };

  exports.Player = Player;

}(app));
