(function(exports, R) {
  'use strict';

  function Turns(players, Turn) {
    this.players = players;
    this.index = 0;
    this.currentTurn = null;
    this.Turn = Turn;
  }

  Turns.prototype.nextTurn = function () {
    this.index = exports.utils.incOrLoop(0, this.players.length - 1, this.index);
    this.currentTurn = new this.Turn(this.getCurrentPlayer());
    return this.getCurrent();
  };

  Turns.prototype.getCurrentPlayer = function () {
    return this.players[this.index];
  };

  Turns.prototype.getCurrent = function () {
    return this.currentTurn;
  };

  exports.Turns = Turns;

}(app, R));
