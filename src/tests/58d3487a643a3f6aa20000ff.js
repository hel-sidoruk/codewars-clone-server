const { assert } = require('chai');
const { describe, it } = require('mocha');
const functionsToTest = require('./functionsToTest');

const minMinMax = functionsToTest['58d3487a643a3f6aa20000ff'];

describe('Tests', () => {
  it('test', () => {
    function randInt(n, negative = true) {
      return negative
        ? Math.floor(Math.random() * n - n / 2) // allow generation of negative numbers
        : Math.floor(Math.random() * n + 5);
    }

    function generateRandArray(c) {
      let newArr = [];
      for (let i = 0; i < randInt(9, false); i += 1) newArr.push(randInt(20));
      newArr.push(randInt(20, false)); // so the array doesnt just consist of negative numbers
      return newArr;
    }

    for (let c = 0; c < 60; c += 1) {
      let randArray = generateRandArray(c);
      Test.assertSimilar(
        minMinMax([...randArray]),
        _mmm(randArray),
        'Test Failed'
      );
    }
  });
});
