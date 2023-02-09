const { assert } = require('chai');
const { describe, it } = require('mocha');
const functionsToTest = require('./functionsToTest');

const checkCoupon = functionsToTest['539de388a540db7fec000642'];

describe('Fixed tests', function () {
  it('tests', () => {
    assert.strictEqual(
      checkCoupon('123', '123', 'September 5, 2014', 'October 1, 2014'),
      true
    );
    assert.strictEqual(
      checkCoupon('123a', '123', 'September 5, 2014', 'October 1, 2014'),
      false
    );
    assert.strictEqual(
      checkCoupon('12abcd3', '12abcd3', 'January 5, 2014', 'January 1, 2014'),
      false
    );
    assert.strictEqual(
      checkCoupon('123ablqc0', '123ablqc0', 'July 5, 2000', 'July 5, 2000'),
      true
    );
    assert.strictEqual(
      checkCoupon('abc', 'abc', 'November 8, 2013', 'November 5, 2014'),
      true
    );
    assert.strictEqual(
      checkCoupon(0, false, 'September 5, 2014', 'September 25, 2014'),
      false
    );
    assert.strictEqual(
      checkCoupon(1, true, 'September 5, 2014', 'September 25, 2014'),
      false
    );
    assert.strictEqual(
      checkCoupon(1 + 1, '2', 'September 5, 2014', 'September 25, 2014'),
      false
    );
    assert.strictEqual(
      checkCoupon('a12v564', 'a12v564', 'March 25, 1998', 'March 5, 1998'),
      false
    );
    assert.strictEqual(
      checkCoupon('0a12bc64', '0a12bc64', 'March 6, 2005', 'March 5, 2006'),
      true
    );
  });
});

describe('Random ests', function () {
  it('tests', function () {
    Object.freeze(Math);
    function randmonth() {
      return [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
      ][Math.floor(Math.random() * 12)];
    }
    function randday() {
      return Math.floor(Math.random() * 28) + 1;
    }
    function randyear() {
      return 1980 + Math.floor(Math.random() * 41);
    }
    function randdate() {
      return randmonth() + ' ' + randday() + ', ' + randyear();
    }

    function randcode() {
      return ['bdab987ba8f', '5nyi7n868u696u0u6', 'blo4r04on09'][
        Math.floor(Math.random() * 3)
      ];
    }

    function masterCheckYeah(
      enteredCode,
      correctCode,
      currentDate,
      expirationDate
    ) {
      return (
        enteredCode === correctCode &&
        new Date(currentDate) <= new Date(expirationDate)
      );
    }

    for (let i = 0; i < 15; ++i) {
      let aYeahWoo, bYeahWoo, cYeahWoo, dYeahWoo;
      aYeahWoo = randcode();
      bYeahWoo = randcode();
      cYeahWoo = randdate();
      dYeahWoo = randdate();
      assert.strictEqual(
        checkCoupon(aYeahWoo, bYeahWoo, cYeahWoo, dYeahWoo),
        masterCheckYeah(aYeahWoo, bYeahWoo, cYeahWoo, dYeahWoo)
      );
    }
  });
});
