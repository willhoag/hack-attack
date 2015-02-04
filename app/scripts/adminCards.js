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
    action: function(player) {
      player.computers -= player.connected;
      window.alert('Hacked! You lose ' + player.connected + "computers!");
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
      // TODO -- connect to the settings attr above
      player.points += 1;
      window.alert('Data Breach! You get 1 point!');
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
    action: function(player, game) {
      game.passcode.regenerate();
      window.alert('Invalid Password! Passcode has been regenerated!');
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
    action: function(player, game) {
      game.end();
      window.alert('Sever Offline! The Admin has detected your hacking!');
    }
  };

  app.adminCards = [hacked, data, invalid, offline];

}(app));
