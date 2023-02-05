const { assert } = require('chai');
const { describe, it } = require('mocha');
const functionsToTest = require('./functionsToTest');

const capitalizeWord = functionsToTest['595970246c9b8fa0a8000086'];

describe('Tests', () => {
  it('test', () => {
    assert.strictEqual(capitalizeWord('word'), 'Word');
    assert.strictEqual(capitalizeWord('i'), 'I');
    assert.strictEqual(capitalizeWord('glasswear'), 'Glasswear');
  });
});

describe('Random tests', () => {
  function randInt(a, b) {
    return (Math.random() * (b - a + 1) + a) | 0;
  }

  for (let i = 0; i < 25; i++) {
    let randomString = '';
    for (let i = 1; i <= randInt(1, 10); i++) {
      randomString += String.fromCharCode(Math.floor(Math.random() * 26) + 97);
    }

    it(`${randomString} should become ${
      randomString[0].toUpperCase() + randomString.slice(1)
    }`, () => {
      assert.strictEqual(
        capitalizeWord(randomString),
        randomString[0].toUpperCase() + randomString.slice(1)
      );
    });
  }
});
