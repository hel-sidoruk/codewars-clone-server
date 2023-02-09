const { assert } = require('chai');
const { describe, it } = require('mocha');
const functionsToTest = require('./functionsToTest');

const greet_abe = functionsToTest['514aa0dc21607ae236000017'];

describe('Fixed tests', () => {
  it('test', () => {
    assert.strictEqual(
      greet_abe(),
      'Hello, Abe!',
      'greet_abe() is not greeting Abe'
    );
  });
});
