const { assert } = require('chai');
const { describe, it } = require('mocha');
const functionsToTest = require('./functionsToTest');

const headTailInitAndLast = functionsToTest['54592a5052756d5c5d0009c3'];
//! тестируются 4 функции - head, tail, init, last

const randArray = () => {
  let res = [Math.floor(51 * Math.random())];
  while (Math.random() < 0.85) res.push(Math.floor(51 * Math.random()));
  return res;
};

describe('Array methods', function () {
  it('Sample Tests', function () {
    assert.strictEqual(head([5, 1]), 5);
    assert.deepEqual(tail([1]), []);
    assert.deepEqual(init([1, 5, 7, 9]), [1, 5, 7]);
    assert.strictEqual(last([7, 2]), 2);
  });

  for (let i = 1; i < 101; i++) {
    const subject = randArray();
    it('Test number ' + String(i) + ': [' + String(subject) + ']', function () {
      const [h, t, j, l] = [
        subject[0],
        subject.slice(1),
        subject.slice(0, subject.length - 1),
        subject[subject.length - 1],
      ];
      assert.deepEqual(head(subject), h, 'Head failed.');
      assert.deepEqual(tail(subject), t, 'Tail failed.');
      assert.deepEqual(init(subject), j, 'Init failed.');
      assert.deepEqual(last(subject), l, 'Last failed.');
    });
  }
});
