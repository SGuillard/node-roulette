const CheckAction = require("./CheckAction.js");

module.exports = class PlayRoulette {
  constructor(history) {
    this.stack = 1000;
    this.initialAmount = 1;
    this.maxAmount = 100;
    this.history = history;
    this.actualIteration = 0;
    this.checkClass = new CheckAction();
    this.lastResult = [];
  }

  resetResult() {
    for (let i = 0; i < 4; i++) {
      this.lastResult.push(this.history[this.actualIteration - i]);
    }
  }

  bet() {
    this.stack -= this.amount;
    return `Mise :  + ${this.amount}`;
  }

  play() {
    let returnText = "";
    for (let i = 0; i < this.history.length; i++) {
      returnText += "Stack : " + this.stack;
      this.actualIteration = i;
      this.resetResult();
      if (i > 4) {
        if (this.checkClass.isSerie(this.lastResult)) {
          if (this.amount < this.maxAmount) {
            returnText += this.bet();
            if (this.checkClass.isWinner(this.lastResult[i])) {
              this.amount = this.initialAmount;
            } else {
              this.amount = this.amount * 2;
            }
          } else {
            this.amount = this.initialAmount;
          }
        }
      }
    }
    return returnText;
  }
};
