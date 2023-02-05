const { describe, it } = require('mocha');
const functionsToTest = require('./functionsToTest');
const Test = require('@codewars/test-compat');

const minMinMax = functionsToTest['58d3487a643a3f6aa20000ff'];

function _mmm(arr) {
  let max = Math.max(...arr);
  let min = Math.min(...arr);
  for (let i = min; i < max; i++) {
    if (!arr.includes(i)) return [min, i, max];
  }
}

describe('Tests', () => {
  function randInt(n, negative = true) {
    return negative
      ? Math.floor(Math.random() * n - n / 2)
      : Math.floor(Math.random() * n + 5);
  }

  function generateRandArray() {
    let newArr = [];
    for (let i = 0; i < randInt(9, false); i += 1) newArr.push(randInt(20));
    newArr.push(randInt(20, false));
    return newArr;
  }

  for (let c = 0; c < 60; c += 1) {
    let randArray = generateRandArray(c);
    const expected = _mmm(randArray);
    it(`Should return ${expected} for array ${randArray}`, () => {
      Test.assertSimilar(minMinMax([...randArray]), expected, 'Test Failed');
    });
  }
});
