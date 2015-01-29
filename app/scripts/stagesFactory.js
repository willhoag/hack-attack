(function(app) {
  'use strict';

  function stagesFactory(stages) {

    function Stages(model) {
      this.list = stages;
      this.model = app.utils.defaults(model, {
        stageIndex: 0
      });
    }

    Stages.prototype.next = function () {
      this.model.stageIndex += 1;
      return this.getCurrent();
    };

    Stages.prototype.getCurrent = function () {
      return this.list[this.model.stageIndex];
    };

    return Stages;

  }

  app.stagesFactory = stagesFactory;
}(app));
