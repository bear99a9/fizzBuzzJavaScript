class FizzBuzz {
  _isDivisibleByThree(number) {
    if (number % 3 === 0) {
      return true;
    }
  }
  _isDivisibleByFive(number) {
    if (number % 5 === 0) {
      return true;
    }
  }

  _isDivisibleByFifteen(number) {
    if (number % 15 === 0) {
      return true;
    }
  }

  result(number) {
    if (this._isDivisibleByThree(number)) {
      return "Fizz";
    }else if (this._isDivisibleByFive(number)) {
      return "Buzz"
    }
  }
}
