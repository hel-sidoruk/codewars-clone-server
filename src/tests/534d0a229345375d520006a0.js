const { assert } = require('chai');
const { describe, it } = require('mocha');
const functionsToTest = require('./functionsToTest');

const isPowerOfTwo = functionsToTest['534d0a229345375d520006a0'];

describe('Fixed tests', () => {
  const rnd = () => Math.pow(2, 6 + ~~(Math.random() * 15));

  it('Powers of 2', () => {
    const ns = [1, 2, 4096, 536870912, rnd(), rnd()];
    for (const n of ns)
      assert.strictEqual(isPowerOfTwo(n), true, n + ' is a power of 2');
  });
  it('Non-powers of 2', () => {
    const ns = [
      0,
      3,
      5,
      7,
      127,
      234,
      rnd() + 4,
      rnd() + 3,
      rnd() - 4,
      rnd() - 5,
    ];
    for (const n of ns)
      assert.strictEqual(isPowerOfTwo(n), false, n + ' is NOT a power of 2');
  });
});

describe('isPowerOfTwo', () => {
  const rnd = () => Math.pow(2, 6 + ~~(Math.random() * 15));

  it('Random tests', () => {
    for (let i = 0; i < 50; i++) {
      const r = Math.random() < 0.5,
        n = rnd() + !r;
      assert.strictEqual(
        isPowerOfTwo(n),
        r,
        `${n} is${r ? '' : ' NOT'} a power of 2`
      );
    }
  });
});
