const { assert } = require('chai');
const { describe, it } = require('mocha');
const functionsToTest = require('./functionsToTest');

const disemvowel = functionsToTest['52fba66badcd10859f00097e'];

describe('Basic tests', () => {
  it('Testing for fixed tests', () => {
    assert.strictEqual(
      disemvowel('This website is for losers LOL!'),
      'Ths wbst s fr lsrs LL!'
    );
    assert.strictEqual(
      disemvowel(
        "No offense but,\nYour writing is among the worst I've ever read"
      ),
      "N ffns bt,\nYr wrtng s mng th wrst 'v vr rd"
    );
    assert.strictEqual(
      disemvowel('What are you, a communist?'),
      'Wht r y,  cmmnst?'
    );
  });
});

describe('Random tests', () => {
  const base = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZaeiouAEIOU';

  function randint(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  for (let i = 0; i < 100; i++) {
    let s = Array.from(
      { length: randint(1, 10) },
      () =>
        Array.from(
          { length: randint(1, 20) },
          () => base[randint(0, base.length - 1)]
        ).join``
    ).join` `;
    let expected = s.replace(/[aeiou]/gi, '');
    it(`disemvowel(${JSON.stringify(s)}) should equal ${JSON.stringify(
      expected
    )}`, () => {
      assert.strictEqual(disemvowel(s), expected);
    });
  }
});
