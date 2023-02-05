const { assert } = require('chai');
const { describe, it } = require('mocha');
const functionsToTest = require('./functionsToTest');

const litres = functionsToTest['582cb0224e56e068d800003c'];

describe('Fixed tests', () => {
  it('Tests', () => {
    assert.strictEqual(litres(2), 1, 'should return 1 litre');
    assert.strictEqual(litres(1.4), 0, 'should return 0 litres');
    assert.strictEqual(litres(12.3), 6, 'should return 6 litres');
    assert.strictEqual(litres(0.82), 0, 'should return 0 litres');
    assert.strictEqual(litres(11.8), 5, 'should return 5 litres');
    assert.strictEqual(litres(1787), 893, 'should return 893 litres');
    assert.strictEqual(litres(0), 0, 'should return 0 litres');
  });
});

describe('Random tests', () => {
  const ans = (t) => Math.floor(t * 0.5);

  it('Testing for 40 random tests', () => {
    for (let i = 0; i < 40; i++) {
      let time = Math.floor(Math.random() * 10000);
      assert.strictEqual(
        litres(time),
        ans(time),
        `should return ${time} litre${time === 1 ? '' : 's'}`
      );
    }
  });
});
