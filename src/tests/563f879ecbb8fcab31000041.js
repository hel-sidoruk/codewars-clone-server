const { assert } = require('chai');
const { describe, it } = require('mocha');
const functionsToTest = require('./functionsToTest');

const factory = functionsToTest['563f879ecbb8fcab31000041'];

describe('Fixed tests', () => {
  it('tests', () => {
    assert.deepEqual(factory(3)([1, 2, 3]), [3, 6, 9]);
    assert.deepEqual(factory(5)([1, 2, 3]), [5, 10, 15]);
    assert.deepEqual(factory(6)([10, 9, 8, 7]), [60, 54, 48, 42]);
    assert.deepEqual(factory(2)([14, 15, 16]), [28, 30, 32]);
    assert.deepEqual(factory(1)([847, 948, 34]), [847, 948, 34]);
    assert.deepEqual(factory(93)([37, 48, 13]), [3441, 4464, 1209]);
  });
});

describe('Testing returned functions', () => {
  let fiveFactory = factory(5);
  it('fiveFactory tests', () => {
    assert.deepEqual(fiveFactory([7, 3, 1]), [35, 15, 5]);
    assert.deepEqual(fiveFactory([3, 4, 5, 6]), [15, 20, 25, 30]);
    assert.deepEqual(fiveFactory([54, 38, 49, 20]), [270, 190, 245, 100]);
  });

  let eightFactory = factory(8);
  it('eightFactory tests', () => {
    assert.deepEqual(eightFactory([4, 7, 32]), [32, 56, 256]);
    assert.deepEqual(eightFactory([9, 41, 9473]), [72, 328, 75784]);
    assert.deepEqual(eightFactory([18, 22, 95]), [144, 176, 760]);
  });

  let twentyTwoFactory = factory(22);
  it('twentyTwoFactory tests', () => {
    assert.deepEqual(twentyTwoFactory([843, 132, 99]), [18546, 2904, 2178]);
    assert.deepEqual(
      twentyTwoFactory([6, 3, 73, 8, 3, 2, 43]),
      [132, 66, 1606, 176, 66, 44, 946]
    );
    assert.deepEqual(twentyTwoFactory([22, 222, 2222]), [484, 4884, 48884]);
  });
});

describe('Random tests', () => {
  it('tests', () => {
    function randint(a, b) {
      return Math.floor(Math.random() * b + a);
    }
    function testFactory(x) {
      return function (n, arr) {
        let result = [];
        for (let i = 0; i < arr.length; i++) {
          result.push(arr[i] * n);
        }
        return result;
      }.bind(this, x);
    }
    for (let i = 0; i < 5; i++) {
      let num = randint(1, 50);
      let testArray = [];
      let testArray2 = [];
      for (let j = 0; j < randint(1, 20); j++) {
        testArray.push(randint(1, 100));
        testArray2.push(randint(1, 100));
      }
      let exampleFactory = factory(num);
      let exampleFactory2 = testFactory(num);
      assert.deepEqual(exampleFactory2(testArray), exampleFactory(testArray));
      assert.deepEqual(exampleFactory2(testArray2), exampleFactory(testArray2));
    }
  });
});
