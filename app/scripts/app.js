(function (document, app, R) {
  'use strict';

  function startConstructor() {
    this.adminDeck = new app.Deck(this.model, 'deck');
    this.turns = new app.Turns(this.model, app.stagesFactory(app.stages));
    this.passcode = new app.Passcode(this.model);
  }

  app.game = new app.Game({}, startConstructor);

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
})(wrap(document), app, R);
