/* eslint-disable no-constant-condition */
const { assert } = require('chai');
const { describe, it } = require('mocha');
const functionsToTest = require('./functionsToTest');

const nextPal = functionsToTest['56a6ce697c05fb4667000029'];

describe('Basic Tests', function () {
  it('Test', () => {
    assert.strictEqual(nextPal(11), 22);
    assert.strictEqual(nextPal(188), 191);
    assert.strictEqual(nextPal(191), 202);
    assert.strictEqual(nextPal(2541), 2552);
  });
});

function randint(a, b) {
  return ~~(Math.random() * (b - a + 1)) + a;
}

function reverse(s) {
  return s.split('').reverse().join('');
}

function nextPalMine(val) {
  let i = val + 1;
  while (true) {
    if (i.toString() == reverse(i.toString())) {
      return i;
    }
    i++;
  }
}

describe('Random Tests', function () {
  for (let i = 0; i < 40; ++i) {
    let val = randint(100, 10000);
    let str_ = 'val = '.concat(val.toString());
    let result = nextPalMine(val);
    it(str_, () => {
      assert.strictEqual(nextPal(val), result);
    });
  }

  for (let i = 0; i < 40; ++i) {
    let val = randint(10000, 100000);
    let str_ = 'val = '.concat(val.toString());
    let result = nextPalMine(val);
    it(str_, () => {
      assert.strictEqual(nextPal(val), result);
    });
  }

  for (let i = 0; i < 40; ++i) {
    let val = randint(100000, 1000000);
    let str_ = 'val = '.concat(val.toString());
    let result = nextPalMine(val);
    it(str_, () => {
      assert.strictEqual(nextPal(val), result);
    });
  }

  for (let i = 0; i < 40; ++i) {
    let val = randint(1000000, 10000000);
    let str_ = 'val = '.concat(val.toString());
    let result = nextPalMine(val);
    it(str_, () => {
      assert.strictEqual(nextPal(val), result);
    });
  }

  for (let i = 0; i < 40; ++i) {
    let val = randint(10000000, 100000000);
    let str_ = 'val = '.concat(val.toString());
    let result = nextPalMine(val);
    it(str_, () => {
      assert.strictEqual(nextPal(val), result);
    });
  }
});
