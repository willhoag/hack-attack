(function(exports) {
  'use strict';

  exports.utils.getFromIndex = R.curry(function (list, i) {
    return list[i];
  });

}(app));
