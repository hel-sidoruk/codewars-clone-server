const { assert } = require('chai');
const { describe, it } = require('mocha');
const functionsToTest = require('./functionsToTest');

const toBinary = functionsToTest['59fca81a5712f9fa4700159a'];

describe('Basic tests', () => {
  it('Testing for fixed tests', () => {
    assert.strictEqual(toBinary(1), 1);
    assert.strictEqual(toBinary(2), 10);
    assert.strictEqual(toBinary(3), 11);
    assert.strictEqual(toBinary(5), 101);
  });
});

describe('Random Tests', function () {
  it('Testing for 100 random tests', () => {
    for (let i = 0; i < 100; i++) {
      let a = Math.floor(Math.random() * 100);
      assert.strictEqual(
        toBinary(a),
        parseInt(a.toString(2)),
        `Testing for n = ${a}`
      );
    }
  });
});
