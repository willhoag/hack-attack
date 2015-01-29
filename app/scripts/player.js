(function(app) {
  'use strict';

  function Player(model) {

    model = app.utils.defaults(model, {
      uid: 'cat',
      points: 0,
      computers: 20,
      connected: 3,
      hand: []
    });

    for (var prop in model) {
      this[prop] = model[prop];
    }

  }

  app.Player = Player;

}(app));
