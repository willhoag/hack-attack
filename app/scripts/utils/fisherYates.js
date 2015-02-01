(function(exports, R) {
  'use strict';

  //array shuffling algorithm: http://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle
  exports.utils.fisherYates = function (arr){

    // make shallow copy
    arr = R.map(R.identity, arr);
    var i = arr.length;
    if(i === 0) {
      return false;
    }
    while(--i){
      var j = Math.floor(Math.random() * (i + 1));
      var tempi = arr[i];
      var tempj = arr[j];
      arr[i] = tempj;
      arr[j] = tempi;
    }
    return arr;
  };

}(app, R));
