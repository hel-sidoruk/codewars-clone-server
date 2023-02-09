const { assert } = require('chai');
const { describe, it } = require('mocha');
const functionsToTest = require('./functionsToTest');
const _ = require('lodash');

const evenOrOdd = functionsToTest['53da3dbb4a5168369a0000fe'];

describe('Fixed tests', () => {
  it('2 is even', () => {
    assert.strictEqual(evenOrOdd(2), 'Even');
  });
  it('7 is odd', () => {
    assert.strictEqual(evenOrOdd(7), 'Odd');
  });
  it('-42 is even', () => {
    assert.strictEqual(evenOrOdd(-42), 'Even');
  });
  it('-7 is odd', () => {
    assert.strictEqual(evenOrOdd(-7), 'Odd');
  });
  it('0 is even', () => {
    assert.strictEqual(evenOrOdd(0), 'Even');
  });
});

describe('Random tests', () => {
  let generateCases = (odd, sign, count) => {
    return Array.from({ length: count }, () => [
      sign * (~~(Math.random() * 500) * 2 + odd),
      odd ? 'Odd' : 'Even',
    ]);
  };

  let generateTestCases = () => [
    ...generateCases(0, 1, 10),
    ...generateCases(0, -1, 10),
    ...generateCases(1, 1, 10),
    ...generateCases(1, -1, 10),
  ];

  let cases = _.shuffle(generateTestCases());
  for (let [input, expected] of cases) {
    it(`Should return "${expected}" for ${input}`, () => {
      let actual = evenOrOdd(input);
      assert.strictEqual(actual, expected);
    });
  }
});
