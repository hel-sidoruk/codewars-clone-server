const { assert } = require('chai');
const { describe, it } = require('mocha');
const functionsToTest = require('./functionsToTest');

const squaresNeeded = functionsToTest['5b0d67c1cb35dfa10b0022c7'];

describe('Fixed tests', () => {
  assert.equal(squaresNeeded(0), 0);
  assert.equal(squaresNeeded(1), 1);
  assert.equal(squaresNeeded(2), 2);
  assert.equal(squaresNeeded(3), 2);
  assert.equal(squaresNeeded(4), 3);
});

describe('Random tests', () => {
  const randint = (a, b) => Math.floor(Math.random() * (b - a + 1)) + a;
  const sol = (n) => (n ? Math.floor(Math.log(n) / Math.log(2)) + 1 : n);

  for (let i = 0; i < 40; i++) {
    const n = randint(1, Math.pow(10, randint(1, 15)));
    it(`Testing for ${n}`, () => {
      assert.equal(squaresNeeded(n), sol(n));
    });
  }
});
