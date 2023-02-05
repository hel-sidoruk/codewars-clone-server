/* eslint-disable no-param-reassign */
const { assert } = require('chai');
const { describe, it } = require('mocha');
const functionsToTest = require('./functionsToTest');

const fakeBin = functionsToTest['57eae65a4321032ce000002d'];

describe('Basic tests', () => {
  it('Testing for fixed tests', () => {
    assert.strictEqual(fakeBin('45385593107843568'), '01011110001100111');
    assert.strictEqual(fakeBin('509321967506747'), '101000111101101');
    assert.strictEqual(
      fakeBin('366058562030849490134388085'),
      '011011110000101010000011011'
    );
    assert.strictEqual(fakeBin('15889923'), '01111100');
    assert.strictEqual(fakeBin('800857237867'), '100111001111');
  });
});

describe('Random tests', () => {
  const randint = (a, b) => ~~(Math.random() * (b - a + 1)) + a;

  function myfakeBin(x) {
    x = x.split('');
    for (let i = 0; i < x.length; i++) {
      if (
        x[i] == '0' ||
        x[i] == '1' ||
        x[i] == '2' ||
        x[i] == '3' ||
        x[i] == '4'
      )
        x[i] = '0';
      else x[i] = '1';
    }
    return x.join('');
  }

  let names = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

  it('Testing for 100 random tests', () => {
    for (let i = 0; i < 100; i++) {
      let x = [],
        len = randint(1, 30);
      for (let k = 0; k < len; k++) x.push(names[randint(0, names.length - 1)]);
      x = x.join('');
      assert.strictEqual(
        fakeBin(x),
        myfakeBin(x),
        `Testing for ${JSON.stringify(x)}`
      );
    }
  });
});
