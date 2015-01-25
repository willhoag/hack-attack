(function(exports, R) {
  'use strict';

  var performCardAction = R.curry(function (card, player) {
    card.action(player);
  });

  var networking = {
      title: 'Networking',
      description: 'On a player\'s turn, they must wire their computers to attack the servers. Player uses computer cards to choose their attacks on the available servers. Limit of 3 connections per server.',
      finish: function () {}
    };

  var attacking = {
      title: 'Attacking',
      description: '',
      action: function (passcode, index, guess) {
        var number = passcode.guess(index, guess);
        if (number === 0) { return 'passcode hacked!'; }
        if (number > 0) { return 'higher...'; }
        if (number < 0) { return 'lower...'; }
      },
      finish: function () {}
    };

  var admin = {
      title: 'Admin',
      description: '',
      finish: function (drawnCards, player) {
        R.forEach(performCardAction(player), drawnCards);
      }
    };

  exports.stages = [networking, attacking, admin];
}(app, R));
