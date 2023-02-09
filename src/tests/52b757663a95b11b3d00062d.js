const { assert } = require('chai');
const { describe, it } = require('mocha');
const functionsToTest = require('./functionsToTest');

const toWeirdCase = functionsToTest['52b757663a95b11b3d00062d'];

describe('Fixed tests', function () {
  let words = ['This', 'is', 'a', 'test', 'Looks', 'like', 'you', 'passed'];
  for (let i = 0; i < words.length; i++) {
    it('Word = ' + words[i], function () {
      assert.strictEqual(
        toWeirdCase(words[i]),
        words[i]
          .toLowerCase()
          .split(' ')
          .map(function (word) {
            return word
              .split('')
              .map(function (char, index) {
                return index % 2 == 0 ? char.toUpperCase() : char;
              })
              .join('');
          })
          .join(' ')
      );
    });
  }
});

describe('should return the correct value for multiple words', function () {
  let sentences = [
    'This is a test',
    'Looks like you passed',
    'This is the final test case',
    'Just kidding',
    'Ok fine you are done now',
  ];
  for (let i = 0; i < sentences.length; i++) {
    it('String = ' + sentences[i], function () {
      assert.strictEqual(
        toWeirdCase(sentences[i]),
        sentences[i]
          .toLowerCase()
          .split(' ')
          .map(function (word) {
            return word
              .split('')
              .map(function (char, index) {
                return index % 2 == 0 ? char.toUpperCase() : char;
              })
              .join('');
          })
          .join(' ')
      );
    });
  }
});
