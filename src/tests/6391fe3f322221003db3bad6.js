const { assert } = require('chai');
const { describe, it } = require('mocha');
const functionsToTest = require('./functionsToTest');

const maxBisectors = functionsToTest['6391fe3f322221003db3bad6'];

describe('Solution test', () => {
  function act(n, expected) {
    const userSolution = maxBisectors(n);
    assert.equal(userSolution, expected, `Invalid result for n = ${n}`);
  }

  describe('Fixed tests', () => {
    it('Basic tests', () => {
      act(0, 0);
      act(1, 0);
      act(2, 1);
      act(3, 2);
      act(4, 4);
      act(5, 6);
      act(6, 9);
      act(51, 650);
    });
  });

  describe('Random tests', () => {
    const randint = (x, y) => Math.floor(Math.random() * (y - x)) + x;
    // A002620: a(n) = floor(n^2/4)
    const solve = (n) => (n >> 1) * Math.ceil(n / 2);
    for (let [numberOfTests, minN, maxN] of [
      [200, 1, 1000],
      [200, 1000, 5000],
      [80, 5000, 40000],
      [20, 40000, 50000],
    ]) {
      it(`${numberOfTests} random tests for ${minN} <= n < ${maxN}`, () => {
        for (let i = 0; i < numberOfTests; i++) {
          const n = randint(minN, maxN);
          const expected = solve(n);
          act(n, expected);
        }
      });
    }
  });
});
