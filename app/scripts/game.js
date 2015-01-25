(function(exports, R) {
  'use strict';

  function Game(playerArray, constructor) {
    this.players = playerArray || [];
    this.constructor = constructor;
  }

  Game.prototype.addPlayer = function (player) {
    this.players.push(player);
  };

  Game.prototype.start = function (callback) {
    this.startTime = new Date();
    if (callback) { callback(); }
    this.constructor.apply(this);
  };

  Game.prototype.getTimeElapsed = function () {
    return (this.endTime || new Date()) - this.startTime;
  };

  Game.prototype.getWinningPlayer = function (scoreByProp) {
    return R.maxBy(R.prop(scoreByProp), this.players);
  };

  Game.prototype.end = function (callback) {
    this.endTime = new Date();
    if (callback) { callback(); }
  };

  exports.Game = Game;
}(app, R));
