const { assert } = require('chai');
const { describe, it } = require('mocha');
const functionsToTest = require('./functionsToTest');

const perimeterSequence = functionsToTest['589519d1f0902e01af000054'];

describe('Fixed tests', () => {
  it('test', () => {
    assert.strictEqual(perimeterSequence(1, 3), 12);
  });
});

describe('Random tests', () => {
  let testFunction = function (a, n) {
    let solution = function (a, n) {
      return 4 * n * a;
    };
    it(`Input is ${a} and ${n} `, () => {
      assert.strictEqual(perimeterSequence(a, n), solution(a, n));
    });
  };
  for (let i = 0; i < 100; i++)
    testFunction(
      Math.floor(Math.random() * 10) + 1,
      Math.floor(Math.random() * 100) + 1
    );
});
