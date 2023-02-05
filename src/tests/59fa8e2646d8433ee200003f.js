/* eslint-disable no-param-reassign */
const { assert, config } = require('chai');
const { describe, it } = require('mocha');
const functionsToTest = require('./functionsToTest');
config.truncateThreshold = 0;

const sortByBit = functionsToTest['59fa8e2646d8433ee200003f'];

describe('Testing...', function () {
  it('Basic Tests', function () {
    let a = [3, 8, 3, 6, 5, 7, 9, 1];
    sortByBit(a);
    assert.deepEqual(a, [1, 8, 3, 3, 5, 6, 9, 7]);

    let b = [9, 4, 5, 3, 5, 7, 2, 56, 8, 2, 6, 8, 0];
    sortByBit(b);
    assert.deepEqual(b, [0, 2, 2, 4, 8, 8, 3, 5, 5, 6, 9, 7, 56]);
  });
});
