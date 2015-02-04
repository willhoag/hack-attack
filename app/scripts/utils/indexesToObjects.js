
(function(app, R) {
  'use strict';

  app.utils.indexesToObjects = function (indexes, objects) {
    return R.map(R.flip(R.nth)(objects), indexes || []);
  };

}(app, R));
