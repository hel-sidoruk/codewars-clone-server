const { assert } = require('chai');
const { describe, it } = require('mocha');
const functionsToTest = require('./functionsToTest');

const flip = functionsToTest['541b5694204d12573700101c'];

function print(a, b) {
  return a + ' -> ' + b;
}

describe('Tests', () => {
  it('test', () => {
    assert.strictEqual(flip(print)(4, 5), '5 -> 4');
  });
});
