(function(exports, R) {
  'use strict';

  function Turns(model, Stages) {

    this.model = exports.utils.defaults(model, {
      iterations: 0,
      turnIndex: 0,
      players: []
    });

    this.Stages = Stages;
  }

  Turns.prototype.nextTurn = function () {
    this.model.turnIndex = (this.model.iterations += 1) % this.model.players.length;
    this.model.stageIndex = 0;
  };

  Turns.prototype.getStages = function () {
    return new this.Stages(this.model);
  };

  Turns.prototype.getCurrentPlayer = function () {
    return this.model.players[this.model.turnIndex];
  };

  Turns.prototype.isCurrentPlayer = function (uid) {
    var player = this.getCurrentPlayer();
    if (player) {
      return player.uid === uid;
    } else {
      return false;
    }
  };

  exports.Turns = Turns;

}(app, R));
