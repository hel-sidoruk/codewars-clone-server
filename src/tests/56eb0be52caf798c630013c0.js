const { assert } = require('chai');
const { describe, it } = require('mocha');
const functionsToTest = require('./functionsToTest');

const unluckyDays = functionsToTest['56eb0be52caf798c630013c0'];

describe('Fixed Tests', () => {
  it(`Testing for year 2819: should be 2`, () => {
    assert.strictEqual(unluckyDays(2819), 2, 'should be: 2');
  });
  it(`Testing for year 2792: should be 2`, () => {
    assert.strictEqual(unluckyDays(2792), 2, 'should be: 2');
  });
  it(`Testing for year 2723: should be 2`, () => {
    assert.strictEqual(unluckyDays(2723), 2, 'should be: 2');
  });
  it(`Testing for year 1909: should be 1`, () => {
    assert.strictEqual(unluckyDays(1909), 1, 'should be: 1');
  });
  it(`Testing for year 1812: should be 2`, () => {
    assert.strictEqual(unluckyDays(1812), 2, 'should be: 2');
  });
  it(`Testing for year 1618: should be 2`, () => {
    assert.strictEqual(unluckyDays(1618), 2, 'should be: 2');
  });
  it(`Testing for year 2132: should be 1`, () => {
    assert.strictEqual(unluckyDays(2132), 1, 'should be: 1');
  });
  it(`Testing for year 2065: should be 3`, () => {
    assert.strictEqual(unluckyDays(2065), 3, 'should be: 3');
  });
  it(`Testing for year 2017: should be 2`, () => {
    assert.strictEqual(unluckyDays(2017), 2, 'should be: 2');
  });
});

describe('Random tests', () => {
  const randint = (a, b) => ~~(Math.random() * (b - a + 1) + a);
  const sol = (y) =>
    new Array(13)
      .join('a')
      .split('')
      .map((a, i) => new Date(y, i, 13).getDay() == 5)
      .reduce((a, b) => a + b, 0);

  for (let i = 0; i < 40; i++) {
    let y = randint(1583, 2999);
    it(`Testing for year ${y}`, () => {
      assert.strictEqual(
        unluckyDays(y),
        sol(y),
        'It should work for random inputs too'
      );
    });
  }
});
