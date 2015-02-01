'use strict';

(function(app, R) {

  function Deck(model, deck, name) {
    this.name = name || 'deck';
    this.model = app.utils.defaults(model, {});
  }

  Deck.prototype.shuffle = function () {
    this.model[this.name] = app.utils.fisherYates(this.getDeck());
    return this.getDeck();
  };

  Deck.prototype.getDeck = function () {
    return this.model[this.name];
  };

  Deck.prototype.deal = function (numberOfCards, hands) {
    var that = this;
    for (var i = 0; i < numberOfCards; i++) {
      R.map(function (hand) {
        hand.push(that.draw(1)[0]);
      }, hands);
    }
    return hands;
  };

  Deck.prototype.draw = function (numberOfCards) {
    var deck = this.getDeck() || [];
    var cards = R.slice(0, numberOfCards || 1)(R.reverse(deck));
    this.model[this.name] = R.take(deck.length - cards.length, deck);
    return cards;
  };

  app.Deck = Deck;
}(app, R));
