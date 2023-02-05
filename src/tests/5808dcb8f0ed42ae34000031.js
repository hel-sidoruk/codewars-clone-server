const { assert } = require('chai');
const { describe, it } = require('mocha');
const functionsToTest = require('./functionsToTest');

const switchItUp = functionsToTest['5808dcb8f0ed42ae34000031'];

describe('Basic Tests', () => {
  it('Testing for fixed tests', () => {
    assert.strictEqual(switchItUp(1), 'One');
    assert.strictEqual(switchItUp(3), 'Three');
    assert.strictEqual(switchItUp(5), 'Five');
  });
});

describe('Random Test', () => {
  function switchItUp1(number) {
    const strings = {
      0: 'Zero',
      1: 'One',
      2: 'Two',
      3: 'Three',
      4: 'Four',
      5: 'Five',
      6: 'Six',
      7: 'Seven',
      8: 'Eight',
      9: 'Nine',
    };
    return strings[number];
  }

  for (let i = 0; i < 97; i++) {
    let a = Math.floor(Math.random() * 10);
    it(`Testing for number = ${a}`, () => {
      assert.strictEqual(switchItUp(a), switchItUp1(a));
    });
  }
});
