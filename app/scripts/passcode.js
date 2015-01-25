(function(exports) {
  'use strict';

  function Passcode(digits) {
    this.digits = digits;
    this.code = null;
    this.regenerate();
  }

  Passcode.prototype.regenerate = function () {
    var newCode = [];
    for (var i = 0; i < this.digits; i++) {
      newCode.push(Math.floor((Math.random() * 10) + 1));
    }
    this.code = newCode;
  };

  // returns difference from actual number
  Passcode.prototype.guess = function (index, guess) {
    return this.code[parseInt(index)] - parseInt(guess);
  };

  exports.Passcode = Passcode;
}(app));
