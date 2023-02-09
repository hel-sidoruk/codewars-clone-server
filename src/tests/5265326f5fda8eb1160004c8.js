const { assert } = require('chai');
const { describe, it } = require('mocha');
const functionsToTest = require('./functionsToTest');

const numberToString = functionsToTest['5265326f5fda8eb1160004c8'];

describe('Fixed tests', () => {
  it('tests', () => {
    assert.strictEqual(numberToString(67), '67');
    assert.strictEqual(numberToString(79585), '79585');
    assert.notStrictEqual(numberToString(79585), 79585);
    assert.strictEqual(numberToString(1 + 2), '3');
    assert.strictEqual(numberToString(1 - 2), '-1');
  });
});

describe('Random tests', () => {
  for (let run = 0; run < 200; ++run) {
    let num = Math.floor(Math.random() * 2000000 - 1000000);
    it(`Testing for num = ${num}`, () => {
      assert.strictEqual(numberToString(num), String(num));
    });
  }
});
