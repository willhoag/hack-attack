(function(exports) {
  'use strict';

  exports.utils.defaults = function (obj, defaults) {
    for (var prop in defaults) {
      obj[prop] = obj[prop] || defaults[prop];
    }
    return obj;
  };

}(app));
