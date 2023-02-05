/* eslint-disable no-param-reassign */
const { assert } = require('chai');
const { describe, it } = require('mocha');
const functionsToTest = require('./functionsToTest');

const countConsonants = functionsToTest['5a19226646d843de9000007d'];

describe('Fixed Tests', () => {
  it('Case 1', function () {
    assert.strictEqual(
      countConsonants('sillystring'),
      7,
      'do not count duplicate consonants!'
    );
  });
  it('Case 2', function () {
    assert.strictEqual(countConsonants('aeiou'), 0, 'result should be 0');
  });

  it('Case 3', function () {
    assert.strictEqual(
      countConsonants('abcdefghijklmnopqrstuvwxyz'),
      21,
      'result should be 21'
    );
  });

  it('Case 4', function () {
    assert.strictEqual(
      countConsonants('Count my unique consonants!!'),
      7,
      'result should be 7'
    );
  });
});

describe('Random Tests', () => {
  function countConsonantsCheck(str) {
    let consArr = [];
    let temp = [];
    str = str.replace(/[^A-Za-z]/g, '').toLowerCase();
    let letterArr = str.split('');
    for (let i = 0; i < letterArr.length; i++) {
      if (
        letterArr[i] != 'a' &&
        letterArr[i] != 'e' &&
        letterArr[i] != 'i' &&
        letterArr[i] != 'o' &&
        letterArr[i] != 'u'
      ) {
        consArr.push(letterArr[i]);
      }
    }
    consArr.sort();
    for (let j = 0; j < consArr.length; j++) {
      if (temp.indexOf(consArr[j]) == -1) {
        temp.push(consArr[j]);
      }
    }
    let answer = temp.length;
    return answer;
  }
  function makestring() {
    let array = [];
    let possible =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < 5; i++) {
      array.push(possible[Math.floor(Math.random() * possible.length)]);
    }
    return array.join('');
  }
  for (let i = 0; i < 40; i++) {
    let random = makestring();
    it('input was: ' + random, () => {
      assert.strictEqual(countConsonants(random), countConsonantsCheck(random));
    });
  }
});
