const { assert } = require('chai');
const { describe, it } = require('mocha');
const functionsToTest = require('./functionsToTest');

const invertValues = functionsToTest['5899dc03bc95b1bf1b0000ad'];

describe('Fixed tests', () => {
  it('Invert array values', () => {
    assert.deepEqual(invertValues([1, 2, 3, 4, 5]), [-1, -2, -3, -4, -5]);
    assert.deepEqual(invertValues([1, -2, 3, -4, 5]), [-1, 2, -3, 4, -5]);
    assert.deepEqual(invertValues([]), []);
    assert.deepEqual(invertValues([0]), [-0]);
  });
});

describe('Random tests', () => {
  function rand(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  function sol(array) {
    return array.map((n) => -n);
  }

  function generateArr() {
    let arr = [],
      n = rand(5, 100);
    for (let i = 0; i < n; i++) {
      arr.push(rand(-100, 100));
    }
    return arr;
  }

  for (let i = 0; i < 100; i++) {
    let v = generateArr();
    it(`Testing for array = ${JSON.stringify(v)}`, function () {
      assert.deepEqual(invertValues(v.slice()), sol(v));
    });
  }
});
