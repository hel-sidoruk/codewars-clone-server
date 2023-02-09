const { assert } = require('chai');
const { describe, it } = require('mocha');
const functionsToTest = require('./functionsToTest');

const removeChar = functionsToTest['56bc28ad5bdaeb48760009b0'];

describe('Fixed', () => {
  it('tests', () => {
    assert.strictEqual(removeChar('eloquent'), 'loquen');
    assert.strictEqual(removeChar('country'), 'ountr');
    assert.strictEqual(removeChar('person'), 'erso');
    assert.strictEqual(removeChar('place'), 'lac');
    assert.strictEqual(removeChar('ooopsss'), 'oopss');
  });
});

describe('Random Tests', () => {
  function testSolution(str) {
    return (this.str = str.substring(1, str.length - 1));
  }

  it('Testing for 100 random tests', () => {
    for (let i = 0; i < 100; i++) {
      let possible = 'abcdefghijklmnopqrstuvwxyz0123456789',
        text = '';
      for (let k = 0; k < ~~(Math.random() * 10) + 2; k++) {
        text += possible.charAt(~~(Math.random() * possible.length));
      }
      assert.strictEqual(
        removeChar(text),
        testSolution(text),
        `Testing for str = ${JSON.stringify(text)}`
      );
    }
  });
});
