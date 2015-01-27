(function(exports) {
  'use strict';

  function Passcode(digits) {
    this.digits = digits;
    this.code = null;
    this.regenerate();
  }

  Passcode.prototype.regenerate = function () {
    this.code = Math.floor((Math.random() * Math.pow(10, 3)) + 1);
  };

  // returns difference from actual number
  Passcode.prototype.guess = function (guess) {
    return this.code - parseInt(guess);
  };

  exports.Passcode = Passcode;
}(app));
