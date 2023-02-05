const { assert } = require('chai');
const { describe, it } = require('mocha');
const functionsToTest = require('./functionsToTest');

const arrayHelpers = functionsToTest['525d50d2037b7acd6e000534'];

describe('static tests', function () {
  const array = [1, 2, 3, 4, 5];

  it('should square() correctly', function () {
    assert.deepEqual(array.square(), [1, 4, 9, 16, 25]);
    assert.deepEqual(
      array,
      [1, 2, 3, 4, 5],
      'The original array must not be changed'
    );
  });

  it('should cube() correctly', function () {
    assert.deepEqual(array.cube(), [1, 8, 27, 64, 125]);
    assert.deepEqual(
      array,
      [1, 2, 3, 4, 5],
      'The original array must not be changed'
    );
  });

  it('should sum() and average() correctly', function () {
    assert.strictEqual(array.sum(), 15, 'Wrong sum');
    assert.strictEqual(array.average(), 3, 'Wrong average');
    assert.isNaN([].average(), 'Wrong average on empty array, expected NaN');
  });

  it('should even() and odd() correctly', function () {
    assert.deepEqual(array.even(), [2, 4], 'Wrong result for even()');
    assert.deepEqual(
      array,
      [1, 2, 3, 4, 5],
      'The original array must not be changed'
    );

    assert.deepEqual(array.odd(), [1, 3, 5], 'Wrong result for odd()');
    assert.deepEqual(
      array,
      [1, 2, 3, 4, 5],
      'The original array must not be changed'
    );
  });
});

describe('random tests', function () {
  const array = Array.from({ length: 20 }, () => random(0, 100));

  it('should even() and odd() correctly', function () {
    assert.deepEqual(
      array.odd().even(),
      [],
      'odd() or even() returned wrong result'
    );
    assert.deepEqual(
      array.odd().length + array.even().length,
      array.length,
      'The count of odd and even values must be the total array length'
    );
  });

  it('should work all together :)', function () {
    assert.deepEqual(
      array.square(),
      array.map(function (v) {
        return v * v;
      }),
      'square() returnd wrong result'
    );
    assert.deepEqual(
      array.cube(),
      array.map(function (v) {
        return v * v * v;
      }),
      'cube() returnd wrong result'
    );
    assert.deepEqual(
      array.even(),
      array.filter(function (v) {
        return v % 2 == 0;
      }),
      'even() returnd wrong result'
    );
    assert.deepEqual(
      array.odd(),
      array.filter(function (v) {
        return v % 2 == 1;
      }),
      'odd() returnd wrong result'
    );
    assert.strictEqual(
      array.sum(),
      array.reduce(function (p, c) {
        return p + c;
      }, 0),
      'sum() returnd wrong result'
    );
    assert.strictEqual(
      array.average(),
      array.sum() / array.length,
      'average() returnd wrong result'
    );
  });
});
