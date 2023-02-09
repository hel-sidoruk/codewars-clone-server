const { assert } = require('chai');
const { describe, it } = require('mocha');
const functionsToTest = require('./functionsToTest');

const rentalCarCost = functionsToTest['568d0dd208ee69389d000016'];

describe('Fixed tests', function () {
  it('Should work for under 3 days:', function () {
    assert.strictEqual(rentalCarCost(1), 40);
    assert.strictEqual(rentalCarCost(2), 80);
  });

  it('Should work for under 7 days:', function () {
    assert.strictEqual(rentalCarCost(3), 100);
    assert.strictEqual(rentalCarCost(4), 140);
    assert.strictEqual(rentalCarCost(5), 180);
    assert.strictEqual(rentalCarCost(6), 220);
  });

  it('Should work for 7 or more days:', function () {
    assert.strictEqual(rentalCarCost(7), 230);
    assert.strictEqual(rentalCarCost(8), 270);
    assert.strictEqual(rentalCarCost(9), 310);
    assert.strictEqual(rentalCarCost(10), 350);
  });
});

describe('Random Tests:', function () {
  function solution(d) {
    if (d < 3) return d * 40;
    return d < 7 ? d * 40 - 20 : d * 40 - 50;
  }

  it('Testing for 100 random tests', () => {
    for (let i = 0; i < 100; i++) {
      let days = ~~(Math.random() * 100) + 1;
      assert.strictEqual(
        rentalCarCost(days),
        solution(days),
        `Testing for d = ${days}`
      );
    }
  });
});
