(function (document, app) {
  'use strict';

  function startConstructor() {
    this.adminDeck = new app.Deck(app.adminCards);
    this.turns = new app.Turns(this.players, new app.turnFactory(app.stages));
    this.passcode = new app.Passcode(3);
    this.adminDeck.shuffle();
  }

  app.game = new app.Game([], startConstructor);

  // Using the game
  // game.start();
  //
  // // Player Turn
  // var turn = game.turns.nextTurn();
  // var stage = turn.nextStage();
  //
  // var drawnCards = game.adminDeck.draw(3);
  //
  // if (stage) {
  //
  //   stage.title;
  //   stage.description;
  //   userMessage = stage.action(game.passcode, 0, 2);
  //   stage.finish(drawnCards, turn.player);
  //
  // } else {
  //
  //   turn = turns.next();
  //
  // }

  document.addEventListener('polymer-ready', function () {
    // Perform some behaviour
    console.log('Polymer is ready to rock!');
  });

// wrap document so it plays nice with other libraries
// http://www.polymer-project.org/platform/shadow-dom.html#wrappers
})(wrap(document), app);
