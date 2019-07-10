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

  isOddSerie() {
    if (
      (isOdd(this.lastResult[0]) || this.lastResult[0] === 0) &&
      (isOdd(this.lastResult[1]) || this.lastResult[1] === 0) &&
      (isOdd(this.lastResult[2]) || this.lastResult[2] === 0)
    ) {
      this.isOddSerie = true;
      return true;
    } else {
      this.isOddSerie = false;
      return false;
    }
  }

  isEvenSerie() {
    if (
      (!isOdd(this.lastResult[0]) || this.lastResult[0] === 0) &&
      (!isOdd(this.lastResult[1]) || this.lastResult[1] === 0) &&
      (!isOdd(this.lastResult[2]) || this.lastResult[2] === 0)
    ) {
      this.isEvenSerie = true;
      return true;
    } else {
      this.isEvenSerie = false;
      return false;
    }
  }

  isWinner(actualResult) {
    if (
      (this.isEvenSerie && actualResult !== 0 && !this.isOdd(actualResult)) ||
      (this.isOddSerie && actualResult !== 0 && this.isOdd(actualResult))
    ) {
      return true;
    } else {
      return false;
    }
  }

  isSerie(lastResult) {
    this.lastResult = lastResult;
    if (this.isEvenSerie || this.isOddSerie) {
      return true;
    } else {
      return false;
    }
  }
};
