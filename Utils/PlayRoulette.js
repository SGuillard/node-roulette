const CheckAction = require("./CheckAction");
const {
  STACK,
  INITIAL_AMOUNT,
  MAX_AMOUNT,
  REPETITION_BEFORE
} = require("./Constants");

module.exports = class PlayRoulette {
  constructor(history) {
    this.stack = STACK;
    this.initialAmount = INITIAL_AMOUNT;
    this.maxAmount = MAX_AMOUNT;
    this.history = history;
    this.actualIteration = 0;
    this.checkClass = new CheckAction();
    this.lastResult = [];
  }

  resetResult() {
    this.lastResult = [];
    for (let i = 1; i < REPETITION_BEFORE + 1; i++) {
      this.lastResult.push(this.history[this.actualIteration - i]);
    }
  }

  bet() {
    this.stack -= this.amount;
    console.log(`Mise :  ${this.amount}`);
  }

  handleResult() {
    if (this.checkClass.isWinner(this.history[this.actualIteration])) {
      this.stack += this.amount * 2;
      this.amount = this.initialAmount;
    } else {
      this.amount = this.amount * 2;
    }
  }

  play() {
    for (let i = 0; i < this.history.length; i++) {
      console.log("----------------------------------------");
      console.log("");

      this.actualIteration = i;
      this.resetResult();
      if (i > 4) {
        console.log(this.lastResult);
        if (this.checkClass.isSerie(this.lastResult)) {
          if (this.amount < this.maxAmount) {
            this.bet();
            this.handleResult();
          } else {
            this.amount = this.initialAmount;
          }
        }
      }
      console.log(`Result : ${this.history[i]}`);
      console.log(`Stack : ${this.stack}`);
    }
    return this.stack;
  }
};
