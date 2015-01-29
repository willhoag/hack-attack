'use strict';

(function(exports, R) {

  function Deck(model, deck, name) {
    this.name = name || 'deck';
    var defaults = {};
    defaults[this.name] = deck;
    this.model = exports.utils.defaults(model, defaults);
  }

  Deck.prototype.shuffle = function () {
    return exports.utils.fisherYates(this.model.deck);
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
    return this.model[this.name]
      .splice(-parseInt(numberOfCards), parseInt(numberOfCards) || 1);
  };

  exports.Deck = Deck;
}(app, R));
