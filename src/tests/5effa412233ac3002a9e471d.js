const { assert } = require('chai');
const { describe, it } = require('mocha');
const functionsToTest = require('./functionsToTest');

const add = functionsToTest['5effa412233ac3002a9e471d'];

describe('Silly addition', () => {
  it('Real addition', () => {
    assert.strictEqual(add(2, 11), 13);
    assert.strictEqual(add(0, 1), 1);
    assert.strictEqual(add(0, 0), 0);
  });

  it('Silly addition', () => {
    assert.strictEqual(add(16, 18), 214);
    assert.strictEqual(add(26, 39), 515);
    assert.strictEqual(add(122, 81), 1103);
  });

  it('Big addition', () => {
    assert.strictEqual(add(1222, 30277), 31499);
    assert.strictEqual(add(1236, 30977), 31111013);
    assert.strictEqual(add(38810, 1383), 391193);
    assert.strictEqual(add(49999, 49999), 818181818);
  });
});

describe('Random tests', () => {
  function sillyAddRefSolution(num1, num2) {
    if (num1 < num2) return sillyAddRefSolution(num2, num1);
    let a = num1.toString(),
      b = num2.toString().padStart(a.length, 0);
    return +[...a].reduce((str, c, i) => str + (+c + +b[i]), '');
  }

  const randInt = (a, b) => (Math.random() * (b - a + 1) + a) | 0;

  for (let i = 1; i <= 100; i++) {
    it(`Random test #${i}`, () => {
      const a = randInt(1, 50000);
      const b = randInt(1, 50000);
      const expected = sillyAddRefSolution(a, b);
      const actual = add(a, b);
      //console.log(a, b, actual, expected)
      assert.strictEqual(actual, expected);
    });
  }
});
