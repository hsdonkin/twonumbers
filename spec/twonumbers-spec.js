import {numberAdder, numberCompare, arraySum, array, sum} from "./../src/twonumbers.js";


describe ('two numbers', function(){

  it('should add two numbers', function(){
    expect(numberAdder(2,5)).toEqual(7);
  })

  it('should compare two numbers added together to another number, K', function(){
    let k = 5;
    expect(numberCompare(2,3,k)).toEqual(true);
  })

  it('should add numbers in an array and compare that sum to K', function(){
    let k = 700;
    let array = [10, 20, 100, 200, 300, 400, 500];
    expect(arraySum(array, k)).toEqual(true);
  })

})
