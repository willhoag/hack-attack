(function(exports, R, RSVP) {
  'use strict';

  function Game(playerArray, startConstructor) {
    this.players = playerArray || [];
    this.startConstructor = startConstructor;
    this._deferred = RSVP.defer();
    this.started = this._deferred.promise;
  }

  Game.prototype.addPlayer = function (player) {
    this.players.push(player);
  };

  Game.prototype.replacePlayer = function (truthTest, newPlayer) {
    return exports.utils.replaceBy(truthTest, newPlayer, this.players);
  };

  Game.prototype.start = function () {
    this.startTime = new Date();
    this.startConstructor.apply(this);
    this._deferred.resolve(this);
  };

  Game.prototype.getTimeElapsed = function () {
    return (this.endTime || new Date()) - this.startTime;
  };

  Game.prototype.getWinningPlayer = function (scoreByProp) {
    return R.maxBy(R.prop(scoreByProp), this.players);
  };

  Game.prototype.end = function () {
    this.endTime = new Date();
  };

  exports.Game = Game;
}(app, R, RSVP));
