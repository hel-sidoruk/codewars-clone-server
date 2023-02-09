const { assert } = require('chai');
const { describe, it } = require('mocha');
const functionsToTest = require('./functionsToTest');

const getLengthOfMissingArray = functionsToTest['57b6f5aadb5b3d0ae3000611'];

describe('Fixed tests', function () {
  it('Should pass fixed tests', function () {
    assert.strictEqual(
      getLengthOfMissingArray([[1, 2], [4, 5, 1, 1], [1], [5, 6, 7, 8, 9]]),
      3
    );
    assert.strictEqual(
      getLengthOfMissingArray([[5, 2, 9], [4, 5, 1, 1], [1], [5, 6, 7, 8, 9]]),
      2
    );
    assert.strictEqual(
      getLengthOfMissingArray([[null], [null, null, null]]),
      2
    );
    assert.strictEqual(
      getLengthOfMissingArray([
        ['a', 'a', 'a'],
        ['a', 'a'],
        ['a', 'a', 'a', 'a'],
        ['a'],
        ['a', 'a', 'a', 'a', 'a', 'a'],
      ]),
      5
    );
  });

  it('Should pass fixed tests not starting with length 1', function () {
    assert.strictEqual(
      getLengthOfMissingArray([
        [5, 2, 9],
        [4, 5, 1, 1, 5, 6],
        [1, 1],
        [5, 6, 7, 8, 9],
      ]),
      4
    );
  });

  it('Should pass edge cases', function () {
    assert.strictEqual(getLengthOfMissingArray([]), 0);
    assert.strictEqual(getLengthOfMissingArray(null), 0);

    assert.strictEqual(getLengthOfMissingArray([[], [1, 2, 2]]), 0);
    assert.strictEqual(getLengthOfMissingArray([[1, 2, 2], null]), 0);
    assert.strictEqual(getLengthOfMissingArray([null, [1, 2, 2]]), 0);
    assert.strictEqual(getLengthOfMissingArray([[1, 2, 2], []]), 0);
  });
});

describe('Random Tests', function () {
  for (let r = 0; r < 40; r++) {
    it(`Random test ${r + 1}`, function () {
      let startLength = Math.floor(Math.random() * 5);
      let endLength = Math.floor(Math.random() * 9) + startLength + 3;

      let missingLength =
        Math.floor(Math.random() * (endLength - startLength - 1)) +
        startLength +
        1;

      let arrayOfArrays = [];

      for (let i = startLength; i <= endLength; i++) {
        if (i != missingLength) {
          arrayOfArrays.push(
            Array.apply(null, Array(i)).map(() => Math.floor(Math.random() * 5))
          );
        }
      }

      if (startLength == 0) {
        missingLength = 0;
      }

      arrayOfArrays.sort(() => Math.floor(Math.random() * 3) - 1);

      let errorMessage =
        'Wrong for [' +
        arrayOfArrays.map((a) => '[' + a.join(', ') + ']').join(',\n') +
        ']';

      assert.strictEqual(
        getLengthOfMissingArray(arrayOfArrays),
        missingLength,
        errorMessage
      );
    });
  }
});
