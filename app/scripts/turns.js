(function(exports, R) {
  'use strict';

  function Turns(model, stages) {

    this.model = exports.utils.defaults(model, {
      iterations: 0,
      turnIndex: 0,
      stageIndex: 0,
      players: []
    });

    this.stages = stages;
  }

  Turns.prototype.nextTurn = function () {
    this.resetStages();
    this.model.turnIndex = (this.model.iterations += 1) % this.model.players.length;
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

  Turns.prototype.nextStage = function () {
    this.model.stageIndex += 1;
    return this.getCurrentStage();
  };

  Turns.prototype.getCurrentStage = function () {
    return this.stages[this.model.stageIndex];
  };

  Turns.prototype.resetStages = function () {
    this.model.stageIndex = 0;
    return this.getCurrentStage();
  };

  exports.Turns = Turns;

}(app, R));
