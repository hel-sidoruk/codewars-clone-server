const { assert } = require('chai');
const { describe, it } = require('mocha');
const functionsToTest = require('./functionsToTest');

const greet = functionsToTest['523b4ff7adca849afe000035'];

describe('Fixed tests', function () {
  it('Is it a function?', function () {
    assert.strictEqual(typeof greet, 'function', 'greet should be a function');
  });
  it('Correct return-value?', function () {
    assert.strictEqual(greet(), 'hello world!');
  });
});
