const { assert } = require('chai');
const { describe, it } = require('mocha');
const functionsToTest = require('./functionsToTest');

const quarterOfTheYear = functionsToTest['5ce9c1000bab0b001134f5af'];

describe('Fixed tests', () => {
  it(`Month ${3} = quarter 1`, function () {
    assert.strictEqual(quarterOfTheYear(3), 1);
  });
  it(`Month ${8} = quarter 3`, function () {
    assert.strictEqual(quarterOfTheYear(8), 3);
  });
  it(`Month ${11} = quarter 4`, function () {
    assert.strictEqual(quarterOfTheYear(11), 4);
  });
});

describe('Random Tests', () => {
  const quarterOfCheck = (month) => Math.ceil(month / 3);

  for (let i = 0; i < 50; i++) {
    const rnd = Math.floor(Math.random() * 12 + 1);
    it(`Month ${rnd} = quarter ${quarterOfCheck(rnd)}`, () => {
      assert.strictEqual(quarterOfTheYear(rnd), quarterOfCheck(rnd));
    });
  }
});
