/* eslint-disable no-param-reassign */
const { assert } = require('chai');
const { describe, it } = require('mocha');
const functionsToTest = require('./functionsToTest');

const runLengthEncoding = functionsToTest['546dba39fa8da224e8000467'];

let randomString = function (n) {
  let i,
    s = '';
  for (i = 0; i < n; ++i)
    s += new Array((Math.random() * 5 + 1) | 0).join(
      String.fromCharCode((Math.random() * 26 + 'A'.charCodeAt(0)) | 0)
    );
  return s;
};

describe('runLengthEncoding', function () {
  it('should work for some examples', function () {
    assert.deepEqual(runLengthEncoding(''), []);
    assert.deepEqual(runLengthEncoding('abc'), [
      [1, 'a'],
      [1, 'b'],
      [1, 'c'],
    ]);
    assert.deepEqual(runLengthEncoding('aab'), [
      [2, 'a'],
      [1, 'b'],
    ]);
    assert.deepEqual(runLengthEncoding('hello world!'), [
      [1, 'h'],
      [1, 'e'],
      [2, 'l'],
      [1, 'o'],
      [1, ' '],
      [1, 'w'],
      [1, 'o'],
      [1, 'r'],
      [1, 'l'],
      [1, 'd'],
      [1, '!'],
    ]);
    assert.deepEqual(
      runLengthEncoding('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabbb'),
      [
        [34, 'a'],
        [3, 'b'],
      ]
    );
    assert.deepEqual(
      runLengthEncoding(
        'WWWWWWWWWWWWBWWWWWWWWWWWWBBBWWWWWWWWWWWWWWWWWWWWWWWWBWWWWWWWWWWWWWW'
      ),
      [
        [12, 'W'],
        [1, 'B'],
        [12, 'W'],
        [3, 'B'],
        [24, 'W'],
        [1, 'B'],
        [14, 'W'],
      ]
    );
  });
});
describe('inverse operations', function () {
  it('should return the original string', function () {
    let i,
      inversRLE = function (arr) {
        return arr.reduce(function (p, e) {
          return (p += new Array(e[0] + 1).join(e[1]));
        }, '');
      },
      s;
    for (i = 0; i < 100; ++i) {
      s = randomString(20);
      assert.strictEqual(inversRLE(runLengthEncoding(s)), s);
    }
  });
});
describe('minimal rle', function () {
  let solution = function (str) {
    return str.split('').reduce(function (p, e) {
      if (p.length && p[p.length - 1][1] == e) p[p.length - 1][0]++;
      else p.push([1, e]);
      return p;
    }, []);
  };
  it('should work as specified on random strings', function () {
    let i, s;
    for (i = 0; i < 100; ++i) {
      s = randomString(20);
      assert.deepEqual(runLengthEncoding(s), solution(s));
    }
  });
});
