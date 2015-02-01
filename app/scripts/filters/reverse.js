(function(R, PolymerExpressions) {
  'use strict';

  PolymerExpressions.prototype.reverse = function(arr) {
    return R.reverse(arr || []);
  };

}(R, PolymerExpressions));
