describe('FizzBuzz', function() {
  let fizzBuzz;

  beforeEach(function() {
    fizzBuzz = new FizzBuzz();
  });

  describe('can work out when a number is', function() {
    it('divisible by 3', function() {
      expect(fizzBuzz._isDivisibleByThree(3)).toBe(true)
    });

    it('divisible by 5', function() {
      expect(fizzBuzz._isDivisibleByFive(5)).toBe(true)
    });

    it('divisible by 15', function() {
      expect(fizzBuzz._isDivisibleByFifteen(15)).toBe(true)
    });
  });

  describe('returns the output of fizzbuzz rules', function() {
    it('returns Fizz when divisible by 3', function() {
      expect(fizzBuzz.result(3)).toBe("Fizz")
    });
  });
});
