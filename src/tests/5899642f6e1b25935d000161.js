const { assert } = require('chai');
const { describe, it } = require('mocha');
const functionsToTest = require('./functionsToTest');

const mergeArrays = functionsToTest['5899642f6e1b25935d000161'];

describe('Solution', function () {
  it('Basic tests', function () {
    assert.deepEqual(mergeArrays([], []), [], 'Should work for 2 empty arrays');
    assert.deepEqual(
      mergeArrays([1, 2, 3], []),
      [1, 2, 3],
      'Should work for only 1 empty array'
    );
    assert.deepEqual(
      mergeArrays([], [5, 4, 3, 2, 1]),
      [1, 2, 3, 4, 5],
      'Should work for only 1 empty array'
    );
    assert.deepEqual(
      mergeArrays([8], [2]),
      [2, 8],
      'Should work for both only 1 number'
    );
    assert.deepEqual(
      mergeArrays([-3, -2, -1, 0], [1, 2, 3, 4]),
      [-3, -2, -1, 0, 1, 2, 3, 4],
      'Should work for negative numbers'
    );
  });

  it('Same order', function () {
    assert.deepEqual(
      mergeArrays([1, 2, 3, 4], [5, 6, 7, 8]),
      [1, 2, 3, 4, 5, 6, 7, 8],
      'Should work for arr1 and arr2 in asc order'
    );
    assert.deepEqual(
      mergeArrays([10, 8, 6, 4, 2], [9, 7, 5, 3, 1]),
      [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      'Should work for arr1 and arr2 in desc order'
    );
    assert.deepEqual(
      mergeArrays(
        [-20, 35, 36, 37, 39, 40],
        [-10, -5, 0, 6, 7, 8, 9, 10, 25, 38, 50, 62]
      ),
      [-20, -10, -5, 0, 6, 7, 8, 9, 10, 25, 35, 36, 37, 38, 39, 40, 50, 62],
      'Should work for arr1 and arr2 with different lengths'
    );
  });

  it('Different orders', function () {
    assert.deepEqual(
      mergeArrays([5, 6, 7, 8, 9, 10], [20, 18, 15, 14, 13, 12, 11, 4, 3, 2]),
      [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 18, 20],
      'Should work for arr1 and arr2 with different lengths'
    );
    assert.deepEqual(
      mergeArrays([45, 30, 20, 15, 12, 5], [9, 10, 18, 25, 35, 50]),
      [5, 9, 10, 12, 15, 18, 20, 25, 30, 35, 45, 50],
      'Should work for arr1 and arr2 with the same length'
    );
    assert.deepEqual(
      mergeArrays(
        [-8, -3, -2, 4, 5, 6, 7, 15, 42, 90, 134],
        [216, 102, 74, 32, 8, 2, 0, -9, -13]
      ),
      [
        -13, -9, -8, -3, -2, 0, 2, 4, 5, 6, 7, 8, 15, 32, 42, 74, 90, 102, 134,
        216,
      ],
      'Should work for diff length & negtive numbers'
    );
  });

  it('More tests', function () {
    assert.deepEqual(
      mergeArrays(
        [-100, -27, -8, 5, 23, 56, 124, 325],
        [-34, -27, 6, 12, 25, 56, 213, 325, 601]
      ),
      [-100, -34, -27, -8, 5, 6, 12, 23, 25, 56, 124, 213, 325, 601],
      'Should work for duplicate numbers'
    );
    assert.deepEqual(
      mergeArrays(
        [18, 7, 2, 0, -22, -46, -103, -293],
        [-300, -293, -46, -31, -5, 0, 18, 19, 74, 231]
      ),
      [-300, -293, -103, -46, -31, -22, -5, 0, 2, 7, 18, 19, 74, 231],
      'Should work for duplicate numbers'
    );
    assert.deepEqual(
      mergeArrays([105, 73, -4, -73, -201], [-201, -73, -4, 73, 105]),
      [-201, -73, -4, 73, 105],
      'Should work for reversed arrays'
    );
  });
});
