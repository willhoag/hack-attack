'use strict';

(function(exports, R) {

  //array shuffling algorithm: http://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle
  function fisherYates(arr){
    var i = arr.length;
    if(i === 0) {
      return false;
    }
    while(--i){
      var j = Math.floor(Math.random() * (i + 1));
      var tempi = arr[i];
      var tempj = arr[j];
      arr[i] = tempj;
      arr[j] = tempi;
    }
    return arr;
  }

  function Deck(cards) {
    this.cards = cards;
  }

  Deck.prototype.shuffle = function () {
    return fisherYates(this.cards);
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
    return this.cards.splice(-parseInt(numberOfCards), parseInt(numberOfCards) || 1);
  };

  exports.Deck = Deck;
}(app, R));
