(function(exports, R) {
  'use strict';

  function Turns(players, Turn) {
    this.players = players;
    this.Turn = Turn;
    this.iterations = 0;
    this.index = 0;
    this.current = null;
    this.resetTurn();
  }

  Turns.prototype.nextTurn = function () {
    this.index = (this.iterations += 1) % this.players.length
    return this.resetTurn();
  };

  Turns.prototype.resetTurn = function () {
    return this.current = new this.Turn(this.getCurrentPlayer());
  };

  Turns.prototype.getCurrentPlayer = function () {
    return this.players[this.index];
  };

  exports.Turns = Turns;

}(app, R));
