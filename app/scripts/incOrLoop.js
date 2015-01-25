(function(exports) {
  'use strict';

  function incOrLoop(min, max, current) {
    if ( current >= max ) {
      return min;
    } else {
      return current += 1;
    }
  }

  exports.utils.incOrLoop = incOrLoop;

}(app));
