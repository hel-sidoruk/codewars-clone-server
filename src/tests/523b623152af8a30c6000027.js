const { assert } = require('chai');
const { describe, it } = require('mocha');
const functionsToTest = require('./functionsToTest');
const _ = require('lodash');

const function2SquaringAnArgument = functionsToTest['523b623152af8a30c6000027'];

describe('Sample tests', () => {
  it('2 squared equals 4', () => {
    assert.strictEqual(function2SquaringAnArgument(2), 4);
  });
  it('3 squared equals 9', () => {
    assert.strictEqual(function2SquaringAnArgument(3), 9);
  });
  it('4 squared equals 16', () => {
    assert.strictEqual(function2SquaringAnArgument(4), 16);
  });
});

describe('Random tests', function () {
  for (let i = 0; i < 15; i++) {
    let x = _.random(1, 100);
    it(`Should return ${x * x} for ${x}`, () => {
      assert.strictEqual(function2SquaringAnArgument(x), x * x);
    });
  }
});
