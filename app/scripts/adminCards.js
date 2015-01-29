(function(app) {
  'use strict';

  var hacked = {
    card: 'hacked',
    deck: 'admin',
    title: 'Hack Detected!!!',
    description: 'Hack detected, connected servers are reported and shutdown.',
    settings: {
      points: 0,
      holdable: false
    },
    image: {
      front: 'images/blank.png',
      back: 'images/blank.png',
    },
    action: function(player, numOfCards) {
      // player.computers.splice(0, numOfCards);
    }
  };

  var data = {
    card: 'data',
    deck: 'admin',
    title: 'Data Breach +1',
    description: 'Good News!!! You\'ve discovered an extra batch of data.',
    settings: {
      points: 1,
      holdable: true
    },
    image: {
      front: 'images/blank.png',
      back: 'images/blank.png',
    },
    action: function(player) {
      // player.points += 1;
    }
  };

  var invalid = {
    card: 'invalid',
    deck: 'admin',
    title: 'Invalid Password',
    description: 'Bummer, the admin changed the password, no data was accessed.',
    settings: {
      points: 0,
      holdable: false
    },
    image: {
      front: 'images/blank.png',
      back: 'images/blank.png',
    },
    action: function(admin) {
      // admin.resetPasscode();
    }
  };

  var offline =  {
    card: 'offline',
    deck: 'admin',
    title: 'Server Offline',
    description: 'Server went offline!',
    settings: {
      points: 0,
      holdable: false
    },
    image: {
      front: 'images/blank.png',
      back: 'images/blank.png',
    },
    action: function(game) {
      //game.end();
    }
  };

  app.adminCards = [hacked, data, invalid, offline];
 
}(app));
