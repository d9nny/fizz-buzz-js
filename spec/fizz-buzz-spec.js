describe("Fizzbuzz", function(){
	var Fizzbuzz = require('../lib/fizz-buzz');
	var fizzbuzz;

	beforeEach(function(){
		fizzbuzz = new Fizzbuzz();
	});

	it("it should return fizz when given an argument of 3", function() {
    expect(fizzbuzz.play(3)).toEqual("fizz");
  });

  it('it should return buzz when given an argument of 5', function() {
  	expect(fizzbuzz.play(5)).toEqual('buzz');
  });
  it('should return fizzbuzz if gviven an argument of 15', function(){
  	expect(fizzbuzz.play(15)).toEqual('fizzbuzz');
  });
  it('should return teh number if given an argument not divisible by 3 or 5', function(){
  	expect(fizzbuzz.play(1)).toEqual(1);
  });

});