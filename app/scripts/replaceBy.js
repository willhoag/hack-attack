(function(exports, R) {
  'use strict';

  exports.utils.replaceBy = function (truthTest, newItem, list) {
    return R.forEachIndexed(function(item, i, list) {
      if (truthTest(item)) { return list.splice(i, 1, newItem); }
    }, list);
  }

}(app, R));
