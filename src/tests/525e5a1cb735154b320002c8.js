const { assert } = require('chai');
const { describe, it } = require('mocha');
const functionsToTest = require('./functionsToTest');

const triangular = functionsToTest['525e5a1cb735154b320002c8'];
describe('Fixed tests', () => {
  it('Testing for fixed tests', () => {
    assert.strictEqual(triangular(2), 3);
    assert.strictEqual(triangular(7), 28);
    assert.strictEqual(triangular(12), 78);
    assert.strictEqual(triangular(25), 325);
    assert.strictEqual(triangular(50), 1275);
    assert.strictEqual(triangular(1000), 500500);
    assert.strictEqual(triangular(5000), 12502500);
    assert.strictEqual(triangular(10000), 50005000);

    assert.strictEqual(triangular(0), 0);
    assert.strictEqual(triangular(-1), 0);
    assert.strictEqual(triangular(-5), 0);
  });
});

describe('Random tests', () => {
  function randint(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  for (let i = 0; i < 100; i++) {
    let num = randint(-(10 ** randint(1, 2)), 10 ** randint(1, 7));
    let expected = num < 1 ? 0 : (num * (num + 1)) / 2;
    it(`triangular(${num}) should equal ${expected}`, () => {
      assert.strictEqual(triangular(num), expected);
    });
  }
});
