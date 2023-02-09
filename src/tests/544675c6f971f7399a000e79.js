const { assert } = require('chai');
const { describe, it } = require('mocha');
const functionsToTest = require('./functionsToTest');

const stringToNumber = functionsToTest['544675c6f971f7399a000e79'];

describe('Fixed tests', function () {
  it('should work for the examples', function () {
    assert.strictEqual(stringToNumber('1234'), 1234);
    assert.strictEqual(stringToNumber('605'), 605);
    assert.strictEqual(stringToNumber('1405'), 1405);
    assert.strictEqual(stringToNumber('-7'), -7);
  });
});

describe('Random tests', function () {
  it('should work for random strings', function () {
    let i, t;
    for (i = 0; i < 100; ++i) {
      t = Math.round(Math.random() * 1e6 - 5e5);
      assert.strictEqual(stringToNumber(t.toString(10)), t);
    }
  });
});
