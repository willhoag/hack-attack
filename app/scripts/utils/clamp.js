(function(app) {
  'use strict';

  app.utils.clamp = function(min, max, value) {
    return Math.min(Math.max(value, min), max);
  };

}(app));
