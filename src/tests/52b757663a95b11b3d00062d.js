const { assert } = require('chai');
const { describe, it } = require('mocha');
const functionsToTest = require('./functionsToTest');

const toWeirdCase = functionsToTest['52b757663a95b11b3d00062d'];

describe('toWeirdCase', function () {
  it('should return the correct value for a single word', function () {
    let words = ['This', 'is', 'a', 'test', 'Looks', 'like', 'you', 'passed'];
    for (let i = 0; i < words.length; i++) {
      Test.assertEquals(
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
    }
  });

  it('should return the correct value for multiple words', function () {
    let sentences = [
      'This is a test',
      'Looks like you passed',
      'This is the final test case',
      'Just kidding',
      'Ok fine you are done now',
    ];
    for (let i = 0; i < sentences.length; i++) {
      Test.assertEquals(
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
    }
  });
});
