const { assert } = require('chai');
const { describe, it } = require('mocha');
const functionsToTest = require('./functionsToTest');

const findMissing = functionsToTest['5a5915b8d39ec5aa18000030'];

describe('Basic tests', function () {
  it('tests', () => {
    assert.strictEqual(findMissing([1, 2, 3], [1, 3]), 2);
    assert.strictEqual(findMissing([6, 1, 3, 6, 8, 2], [3, 6, 6, 1, 2]), 8);
    assert.strictEqual(findMissing([7], []), 7);
    assert.strictEqual(findMissing([4, 3, 3, 61, 8, 8], [8, 61, 8, 3, 4]), 3);
    assert.strictEqual(findMissing([0, 0, 0, 0, 0], [0, 0, 0, 0]), 0);
  });
});

function shuffle(array) {
  let i = 0,
    j = 0,
    temp = null;

  for (i = array.length - 1; i > 0; i -= 1) {
    j = Math.floor(Math.random() * (i + 1));
    temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
}

describe('Random tests', function () {
  for (let i = 0; i < 100; i++) {
    let arr1 = Array.from(
      { length: Math.floor(Math.random() * 5) + 1 },
      () => Math.floor(Math.random() * 1000) - 500
    );
    let arr2 = arr1.slice();
    shuffle(arr2);
    let sol = arr2.pop();
    it(`Tests for values (${arr1}, ${arr2})`, () => {
      assert.strictEqual(findMissing(arr1, arr2), sol);
    });
  }
});
