const { assert } = require('chai');
const { describe, it } = require('mocha');
const functionsToTest = require('./functionsToTest');

const highAndLow = functionsToTest['554b4ac871d6813a03000035'];

describe('Fixed tests', () => {
  it('Testing basic input', () => {
    assert.strictEqual(
      highAndLow('4 5 29 54 4 0 -214 542 -64 1 -3 6 -6'),
      '542 -214'
    );
  });
  it('Testing common string sort mistake', () => {
    assert.strictEqual(
      highAndLow('10 2 -1 -20'),
      '10 -20',
      'Sorting a collection of strings is different from softing a collection of numbers'
    );
  });
  it('Testing positive and negative', () => {
    assert.strictEqual(highAndLow('1 -1'), '1 -1');
  });
  it('Testing positive and positive', () => {
    assert.strictEqual(highAndLow('1 1'), '1 1');
  });
  it('Testing negative and negative', () => {
    assert.strictEqual(highAndLow('-1 -1'), '-1 -1');
  });
  it('Testing positive, negative and zero', () => {
    assert.strictEqual(highAndLow('1 -1 0'), '1 -1');
  });
  it('Testing positive, positive and zero', () => {
    assert.strictEqual(highAndLow('1 1 0'), '1 0');
  });
  it('Testing negative, negative and zero', () => {
    assert.strictEqual(highAndLow('-1 -1 0'), '0 -1');
  });
  it('Testing single', () => {
    assert.strictEqual(highAndLow('42'), '42 42');
  });
});

describe('Random tests', function () {
  let t = 100,
    rnd = Math.random;

  it('Testing for 100 random tests', () => {
    while (t--) {
      let min = ~~(rnd() * 1e4) - 5e3,
        max = min + 3e3 + ~~(rnd() * 100),
        rr = [],
        exp = max + ' ' + min;
      for (let i = 1; i < 20; i++) rr.push(min + ~~(rnd() * 3e3));

      rr = rr.slice(10).concat([min, max]).concat(rr.slice(0, 10));
      rr = rr
        .sort(function () {
          return rnd() < 0.5 ? 1 : -1;
        })
        .join(' ');

      assert.strictEqual(
        highAndLow(rr),
        exp,
        `Testing for str = ${JSON.stringify(rr)}`
      );
    }
  });
});
