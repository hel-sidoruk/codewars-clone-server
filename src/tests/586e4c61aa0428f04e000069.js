const { assert } = require('chai');
const { describe, it } = require('mocha');
const functionsToTest = require('./functionsToTest');

const getDecimal = functionsToTest['586e4c61aa0428f04e000069'];

describe('getDecimal', function () {
  let assertFuzzyEquals = function (actual, expected, msg) {
    // Note: we can use absolute error testing here
    // since the range of the numbers is -5e3 to 5e3.
    //
    // Since double values have 15 significant digits,
    // we could go up to around 1e-12 here, but due to
    // string handling and other shenengians, it's better
    // to stay safe and use 1e-7, before users start yelling.
    //
    // See the section "Handle floating point values the right way"
    // in the codex for more information.
    // -- bkaestner
    let inrange = Math.abs(actual - expected) <= 1e-7;
    Test.expect(
      inrange,
      msg ||
        'Expected value near ' +
          expected.toExponential(13) +
          ', but got ' +
          actual.toExponential(13)
    );
  };
  it('returns decimal part from 10 as 0', function () {
    assertFuzzyEquals(getDecimal(10), 0);
  });

  it('returns decimal part from -1.2 as 0.2', function () {
    assertFuzzyEquals(getDecimal(-1.2), 0.2);
  });

  it('returns decimal part from 4.5 as 0.5', function () {
    assertFuzzyEquals(getDecimal(4.5), 0.5);
  });

  it('returns the decimal part of 100 random numbers', function () {
    const solution = (n) => {
      let str = '' + n,
        position = str.indexOf('.');

      if (position == -1) return 0;
      str = str.slice(position);
      return +str;
    };
    for (let i = 0; i < 100; ++i) {
      const x = 1e4 * Math.random() * -5e3;
      assertFuzzyEquals(getDecimal(x), solution(x));
    }
  });
});
