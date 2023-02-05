const { assert } = require('chai');
const { describe, it } = require('mocha');
const functionsToTest = require('./functionsToTest');

const vowelOne = functionsToTest['580751a40b5a777a200000a1'];

describe('vowelOne', () => {
  it('should work for some examples', () => {
    assert.strictEqual(vowelOne('vowelOne'), '01010101');
    assert.strictEqual(vowelOne('123, arou'), '000001011');
    assert.strictEqual(vowelOne('aefgooh'), '1100110');
    assert.strictEqual(vowelOne('hello, world'), '010010001000');
    assert.strictEqual(vowelOne('aeiou   '), '11111000');
    assert.strictEqual(vowelOne(''), '');
    assert.strictEqual(vowelOne('00000'), '00000');
    assert.strictEqual(vowelOne('11111'), '00000');
  });
});

describe('Random tests', () => {
  let rnd = (x) => (x ? ~~(Math.random() * x) : Math.random()),
    rndBin = (_) => rnd(1e9).toString(2),
    rndVow = (_) => 'aeiouAEIOU'[rnd(10)],
    rndCon = (c) =>
      /[aeiou]/i.test((c = String.fromCharCode(32 + rnd(95)))) ? rndCon() : c,
    rndStr = (b) =>
      [...b].map((d) => (d == '0' ? rndCon() : rndVow())).join('');

  let t = 99;
  while (t--) {
    let exp = rndBin(),
      str = rndStr(exp);
    it(`Input: "${str}"`, () => {
      assert.strictEqual(vowelOne(str), exp, 'Should work for random strings');
    });
  }
});
