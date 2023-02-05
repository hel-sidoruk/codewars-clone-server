const { assert } = require('chai');
const { describe, it } = require('mocha');
const functionsToTest = require('./functionsToTest');

const spoonerize = functionsToTest['56b8903933dbe5831e000c76'];

describe('Spoonerize Me', () => {
  it('Basic Tests', function () {
    assert.equal(spoonerize('not picking'), 'pot nicking');
    assert.equal(spoonerize('wedding bells'), 'bedding wells');
    assert.equal(spoonerize('jelly beans'), 'belly jeans');
    assert.equal(spoonerize('pop corn'), 'cop porn');
  });

  it('Random Tests', function () {
    function spoonTest(words) {
      words = words.split(' ');
      return (
        words[words.length - 1].charAt(0) +
        words[0].slice(1, words[0].length) +
        ' ' +
        words[0].charAt(0) +
        words[words.length - 1].slice(1, words[words.length - 1].length)
      );
    }

    function makeString(min, max) {
      let array = [];
      let possible =
        'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      let length = Math.ceil(Math.random() * max - 1 + min);
      for (let i = 0; i < length; i++) {
        array.push(possible[Math.floor(Math.random() * possible.length)]);
      }
      return array.join('');
    }

    for (let i = 0; i < 50; i++) {
      let testString = makeString(4, 20) + ' ' + makeString(4, 20);
      assert.equal(spoonerize(testString), spoonTest(testString));
    }
  });
});
