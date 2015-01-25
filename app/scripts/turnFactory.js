(function(exports) {
  'use strict';

  function turnFactory(stages) {

    function Turn(player) {
      this.player = player;
      this.stages = stages;
      this.index = 0;
    }

    Turn.prototype.nextStage = function () {
      this.index += 1;
      return this.getCurrentStage();
    };

    Turn.prototype.getCurrentStage = function () {
      return this.stages[this.index];
    };

    return Turn;

  }

  exports.turnFactory = turnFactory;
}(app));
