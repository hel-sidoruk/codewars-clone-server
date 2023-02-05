const { assert } = require('chai');
const { describe, it } = require('mocha');
const functionsToTest = require('./functionsToTest');

const consonantCount = functionsToTest['564e7fc20f0b53eb02000106'];

const vowels = 'aeiou',
  consonants = 'bcdfghjklmnpqrstvwxyz',
  limit = 100;

let rTests = 10;

describe('Tests using hard-coded strings', function () {
  it('Should return number of consonants in string', function () {
    Test.assertEquals(consonantCount(''), 0, 'Test string is empty string');
    Test.assertEquals(consonantCount('aaaaa'), 0, 'Test string: "aaaaa"');
    Test.assertEquals(consonantCount('XaeiouX'), 2, 'Test string: "XaeiouX"');
    Test.assertEquals(consonantCount('Bbbbb'), 5, 'Test string: "Bbbbb"');
    Test.assertEquals(
      consonantCount('helLo world'),
      7,
      'Test string: "helLo world"'
    );
    Test.assertEquals(
      consonantCount('h^$&^#$&^elLo world'),
      7,
      'Test string: "h^$&^#$&^elLo world"'
    );
    Test.assertEquals(
      consonantCount('0123456789'),
      0,
      'Test string: "0123456789"'
    );
    Test.assertEquals(
      consonantCount('012345_Cb'),
      2,
      'Test string: "012345_Cb"'
    );
  });
});

describe('Tests using randomly generated strings', function () {
  it('Should return number of consonants in string', function () {
    while (rTests--) {
      let rTestStr = '',
        numV = Math.floor(Math.random() * limit),
        numC = Math.floor(Math.random() * limit),
        testC = numC;
      while (numV--) {
        let indV = Math.floor(Math.random() * 5),
          vowel = vowels[indV];
        rTestStr += vowel;
      }
      while (numC--) {
        let indC = Math.floor(Math.random() * 21),
          consonant = consonants[indC];
        rTestStr += consonant;
      }
      Test.assertEquals(
        consonantCount(rTestStr),
        testC,
        'Test string: "' + rTestStr + '"'
      );
    }
  });
});
