describe ('FizzBuzz', function(){
  let fizzBuzz;

  beforeEach(function(){
    fizzBuzz = new FizzBuzz();
  });

  describe('can work out when a number is', function(){
    it ('divisible by 3', function(){
      expect(fizzBuzz._isDivisibleByThree(3)).toBe(true)
    });
  });
});
