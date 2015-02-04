(function(app, R) {
  'use strict';

  var networking = {
      title: 'Networking',
      description: 'Choose up to 3 connections to attack server.',
      action: function (connections, player) {
        if (player) {
          player.connected = app.utils.clamp(1, 3, connections);
        }
      }
    };

  var attacking = {
      title: 'Attacking',
      description: 'Crack the passcode by selecting the numbers',
      action: function (passcode, guess) {
        var number = passcode.guess(guess);
        if (number === 0) { return 0; }
        if (number > 0) { return 1; }
        if (number < 0) { return -1; }
      },
      finish: function () {}
    };

  var admin = {
      title: 'Admin',
      description: 'Drawing Cards',
      action: function (cards, player) {
        R.map(function (card) {
          card.action(player, app.game);
        }, cards);
      }
    };

  app.stages = [networking, attacking, admin];
}(app, R));
