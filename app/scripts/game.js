(function(app, R, RSVP) {
  'use strict';

  function Game(model, startConstructor) {
    this.setModel(model);
    this.startConstructor = startConstructor;
    this._d = RSVP.defer();
    this.started = this._d.promise;
  }

  Game.prototype.setModel = function (model, defaults) {
    this.model = app.utils.defaults(model, defaults || {});
  };

  Game.prototype.addPlayer = function (player) {
    this.model.players.push(player);
  };

  Game.prototype.replacePlayer = function (truthTest, newPlayer) {
    return app.utils.replaceBy(truthTest, newPlayer, this.model.players);
  };

  Game.prototype.start = function () {
    this.model.startTime = new Date();
    this.startConstructor.apply(this);
    this._d.resolve(this);
  };

  Game.prototype.getTimeElapsed = function () {
    return (this.model.endTime || new Date()) - this.model.startTime;
  };

  Game.prototype.getWinningPlayer = function (scoreByProp) {
    return R.maxBy(R.prop(scoreByProp), this.model.players);
  };

  Game.prototype.end = function () {
    this.model.endTime = new Date();
  };

  app.Game = Game;
}(app, R, RSVP));
