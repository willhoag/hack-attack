(function(app) {
  'use strict';

  function Passcode(model) {
    this.model = app.utils.defaults(model, {
      passcodeDigits: 3,
      passcode: null
    });
    if (!this.model.passcode) { this.regenerate(); }
  }

  Passcode.prototype.regenerate = function () {
    this.passcode = Math.floor((Math.random() * Math.pow(10, this.passcodeDigits)) + 1);
  };

  // returns difference from actual number
  Passcode.prototype.guess = function (guess) {
    return this.passcode - parseInt(guess);
  };

  app.Passcode = Passcode;
}(app));
