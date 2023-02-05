const { assert } = require('chai');
const { describe, it } = require('mocha');
const functionsToTest = require('./functionsToTest');

const maxTriSum = functionsToTest['5aa1bcda373c2eb596000112'];

describe('Basic tests', () => {
  it('Testing for fixed tests', () => {
    assert.strictEqual(maxTriSum([3, 2, 6, 8, 2, 3]), 17);
    assert.strictEqual(maxTriSum([2, 9, 13, 10, 5, 2, 9, 5]), 32);
    assert.strictEqual(maxTriSum([2, 1, 8, 0, 6, 4, 8, 6, 2, 4]), 18);
    assert.strictEqual(maxTriSum([-3, -27, -4, -2, -27, -2]), -9);
    assert.strictEqual(maxTriSum([-14, -12, -7, -42, -809, -14, -12]), -33);
    assert.strictEqual(
      maxTriSum([-13, -50, 57, 13, 67, -13, 57, 108, 67]),
      232
    );
    assert.strictEqual(maxTriSum([-7, 12, -7, 29, -5, 0, -7, 0, 0, 29]), 41);
    assert.strictEqual(maxTriSum([-2, 0, 2]), 0);
    assert.strictEqual(maxTriSum([-2, -4, 0, -9, 2]), 0);
    assert.strictEqual(maxTriSum([-5, -1, -9, 0, 2]), 1);
  });

  it('Random tests', () => {
    const randint = (a, b) => ~~(Math.random() * (b - a + 1) + a);

    const sol = (n) =>
      Array.from(new Set(n))
        .sort((a, b) => b - a)
        .slice(0, 3)
        .reduce((a, b) => a + b);

    for (let i = 0; i < 40; i++) {
      const n = Array.from({ length: randint(3, 200) }, () =>
        randint(
          -randint(1, Math.pow(10, randint(1, 5))),
          randint(1, Math.pow(10, randint(1, 5)))
        )
      );
      assert.strictEqual(
        maxTriSum(n.slice()),
        sol(n),
        `Testing for [${n.join(', ')}]`
      );
    }
  });
});
