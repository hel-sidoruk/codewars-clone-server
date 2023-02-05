const { assert } = require('chai');
const { describe, it } = require('mocha');
const functionsToTest = require('./functionsToTest');

const reversedWords = functionsToTest['51c8991dee245d7ddf00000e'];

describe('Fixed tests', () => {
  const fixed = [
    ['hello world!', 'world! hello'],
    ["yoda doesn't speak like this", "this like speak doesn't yoda"],
    ['foobar', 'foobar'],
    ['kata editor', 'editor kata'],
    ['row row row your boat', 'boat your row row row'],
    ['', ''],
  ];
  for (let [input, expected] of fixed) {
    it(`Should return "${expected}" for "${input}"`, () => {
      assert.strictEqual(reversedWords(input), expected);
    });
  }
});

describe('40 Random tests', () => {
  const randomString = (w) =>
    Array.from({ length: w }, () =>
      String.fromCharCode(
        ...Array.from({ length: Math.floor(Math.random() * 10 + 1) }, () =>
          Math.floor(Math.random() * 26 + 97)
        )
      )
    ).join(' ');
  for (let k = 0; k < 40; ++k) {
    let r = randomString(Math.floor(Math.random() * 12));
    let expected = r.split(' ').reverse().join(' ');
    it(`Should return "${expected}" for "${r}"`, () => {
      assert.strictEqual(reversedWords(r), expected);
    });
  }
});
