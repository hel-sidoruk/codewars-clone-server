const { assert } = require('chai');
const { describe, it } = require('mocha');
const functionsToTest = require('./functionsToTest');

const strCount = functionsToTest['565b3542af398bfb50000003'];

function fm88(obj) {
  let count = 0;
  function counter(obj) {
    for (let key in obj) {
      let value = obj[key];
      if (typeof value === 'string') count++;
      else if (value instanceof Array) counter(value);
      else if (value instanceof Object) counter(value);
    }
    return count;
  }
  return counter(obj);
}

describe('Fixed Tests', () => {
  it('test', () => {
    assert.strictEqual(
      strCount({
        first: '1',
        second: '2',
        third: false,
        fourth: ['anytime', 2, 3, 4],
        fifth: null,
        sixth: undefined,
        seventh: {},
      }),
      3,
      'Did not count the correct number of strings. Check counting inside nested objects.'
    );

    assert.strictEqual(
      strCount(['1', 2, '3', '4']),
      3,
      'Did not count the correct number of strings. Check counting inside nested objects. Did you start counting from 0?'
    );
    assert.strictEqual(
      strCount([
        '1',
        2,
        '3',
        ['and another', 2, 'and again', [undefined, 'and again'], false],
        '4',
      ]),
      6,
      'Did not count the correct number of items.'
    );
    assert.strictEqual(
      strCount({
        one: '1',
        two: 2,
        three: false,
        four: {},
        another: '3',
        andit: [],
        andyou: function () {
          return;
        },
        whatabout: { andone: 'and another', andtwo: 2, andthree: 'and again' },
        lastkey: [[[undefined, 'and again'], false], 0],
      }),
      5,
      'Did not count the correct number of strings.'
    );
  });
});

describe('Random Tests', () => {
  it('test', () => {
    let arr1 = [],
      a = Math.floor(Math.random(0, 1) * 50);
    for (let i = 0; i < a; i++) {
      arr1.push('strin');
    }
    assert.strictEqual(
      strCount(arr1),
      fm88(arr1),
      'Did not count the correct number of strings.'
    );

    let arr2 = [],
      b = Math.floor(Math.random(0, 1) * 50);
    for (let i = 0; i < b; i++) {
      arr2.push('strin');
    }
    assert.strictEqual(
      strCount(arr2),
      fm88(arr2),
      'Did not count the correct number of strings.'
    );

    let arr3 = [],
      c = Math.floor(Math.random(0, 1) * 50);
    for (let i = 0; i < c; i++) {
      if (i == 0 || i % 2 == 0) {
        arr3.push('strin');
      } else {
        arr3.push([1, 2, 3, 4, '0', { one: 'a', two: 's' }]);
      }
    }
    assert.strictEqual(
      strCount(arr3),
      fm88(arr3),
      'Did not count the correct number of strings.'
    );

    let arr4 = [],
      d = Math.floor(Math.random(0, 1) * 50);
    for (let i = 0; i < d; i++) {
      if (i !== 0 || i % 2 !== 0) {
        arr4.push('strin');
      } else {
        arr4.push([1, '1', 2, 3, 4, '0', { one: 'a', two: 's', three: 'c' }]);
      }
    }
    assert.strictEqual(
      strCount(arr4),
      fm88(arr4),
      'Did not count the correct number of strings.'
    );

    let obj1 = {},
      e = Math.floor(Math.random(0, 1) * 50);
    for (let i = 0; i < e; i++) {
      if (i == 0 || i % 2 == 0) {
        obj1[i] = 'strin';
      } else {
        obj1[i] = [1, 2, 3, 4, '0', { one: 'a', two: 's' }];
      }
    }
    assert.strictEqual(
      strCount(obj1),
      fm88(obj1),
      'Did not count the correct number of strings.'
    );

    let obj2 = {},
      f = Math.floor(Math.random(0, 1) * 50);
    for (let i = 0; i < f; i++) {
      if (i == 0 || i % 2 == 0) {
        obj2[i] = 'strin';
      } else {
        obj2[i] = [1, 2, 3, 4, '0', { one: 'a', two: 's' }];
      }
    }
    assert.strictEqual(
      strCount(obj2),
      fm88(obj2),
      'Did not count the correct number of strings.'
    );

    let obj3 = {},
      g = Math.floor(Math.random(0, 1) * 50);
    for (let i = 0; i < g; i++) {
      if (i == 0 || i % 2 == 0) {
        obj3[i] = 'strin';
      } else {
        obj3[i] = [1, 2, 3, 4, '0', { one: 'a', two: 's' }];
      }
    }
    assert.strictEqual(
      strCount(obj3),
      fm88(obj3),
      'Did not count the correct number of strings.'
    );

    let obj4 = {},
      h = Math.floor(Math.random(0, 1) * 50);
    for (let i = 0; i < h; i++) {
      if (i == 0 || i % 2 == 0) {
        obj4[i] = 'strin';
      } else {
        obj4[i] = [1, 2, 3, 4, '0', { one: 'a', two: 's' }];
      }
    }
    assert.strictEqual(
      strCount(obj4),
      fm88(obj4),
      'Did not count the correct number of strings.'
    );
  });
});
