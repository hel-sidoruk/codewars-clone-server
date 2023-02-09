const { assert } = require('chai');
const { describe, it } = require('mocha');
const functionsToTest = require('./functionsToTest');

const typeOfSum = functionsToTest['5a2e9ae2b6cfd7692a0000ba'];

describe('Fixed tests', () => {
  it(`Type of sum 12, 1 should be 'number'`, () => {
    assert.strictEqual(typeOfSum(12, 1), 'number');
  });
  it(`Type of sum 'd', 1 should be 'string'`, () => {
    assert.strictEqual(typeOfSum('d', 1), 'string');
  });
  it(`Type of sum 1, 'a' should be 'string'`, () => {
    assert.strictEqual(typeOfSum(1, 'a'), 'string');
  });
  it(`Type of sum 'dd', '' should be 'string'`, () => {
    assert.strictEqual(typeOfSum('dd', ''), 'string');
  });
  it(`Type of sum true, 1 should be 'number'`, () => {
    assert.strictEqual(typeOfSum(true, 1), 'number');
  });
  it(`Type of sum 's', false should be 'string'`, () => {
    assert.strictEqual(typeOfSum('s', false), 'string');
  });
  it(`Type of sum null, 1 should be 'number'`, () => {
    assert.strictEqual(typeOfSum(null, 1), 'number');
  });
  it(`Type of sum 's', null should be 'string'`, () => {
    assert.strictEqual(typeOfSum('s', null), 'string');
  });
  it(`Type of sum null, undefined should be 'number'`, () => {
    assert.strictEqual(typeOfSum(null, undefined), 'number');
  });
  it(`Type of sum undefined, 're' should be 'string'`, () => {
    assert.strictEqual(typeOfSum(undefined, 're'), 'string');
  });
  it(`Type of sum undefined, true should be 'number'`, () => {
    assert.strictEqual(typeOfSum(undefined, true), 'number');
  });
  it(`Type of sum null, false should be 'number'`, () => {
    assert.strictEqual(typeOfSum(null, false), 'number');
  });
});

describe('Random Tests', () => {
  const randomInteger = (a, b) => Math.floor(Math.random() * (b - a + 1) + a);

  const check = (a, b) => typeof (a + b);
  const answers = [0, 1, 'a', 'b', null, undefined, true, false];

  for (let i = 1; i <= 88; i++) {
    const index1 = randomInteger(0, 7);
    const index2 = randomInteger(0, 7);

    const a = answers[index1];
    const b = answers[index2];

    it(`Testing №${i} for typeOfSum(${a}, ${b})`, () => {
      assert.strictEqual(
        typeOfSum(a, b),
        check(a, b),
        `It should work for random tests too`
      );
    });
  }
});
