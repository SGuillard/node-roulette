const { REPETITION_BEFORE } = require("./Constants");

module.exports = class CheckAction {
  constructor() {
    this.isOddSerie = false;
    this.isEvenSerie = false;
    this.lastResult = [];
  }

  isOdd(num) {
    if (num % 2 === 0) {
      return false;
    } else {
      return true;
    }
  }

  checkOddSerie() {
    for (let i = 0; i < REPETITION_BEFORE; i++) {
      if (!this.isOdd(this.lastResult[i]) && this.lastResult[i] !== 0) {
        this.isOddSerie = false;
        return false;
      }
    }
    this.isOddSerie = true;
    return true;
  }

  checkEvenSerie() {
    for (let i = 0; i < REPETITION_BEFORE; i++) {
      if (this.isOdd(this.lastResult[i]) && this.lastResult[i] !== 0) {
        this.isEvenSerie = false;
        return false;
      }
    }
    this.isEvenSerie = true;
    return true;
  }

  isWinner(actualResult) {
    if (
      (this.isEvenSerie && actualResult !== 0 && this.isOdd(actualResult)) ||
      (this.isOddSerie && actualResult !== 0 && !this.isOdd(actualResult))
    ) {
      console.log("++++ winnner ++++");
      return true;
    } else {
      console.log("---- loser ----");
      return false;
    }
  }

  isSerie(lastResult) {
    this.lastResult = lastResult;
    this.checkEvenSerie();
    this.checkOddSerie();
    if (this.isEvenSerie || this.isOddSerie) {
      return true;
    } else {
      return false;
    }
  }
};
