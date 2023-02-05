const { assert } = require('chai');
const { describe, it } = require('mocha');
const functionsToTest = require('./functionsToTest');

const isLeapYear = functionsToTest['526c7363236867513f0005ca'];

describe('leap year', function () {
  it('Year 1000 is not leap', function () {
    assert.strictEqual(isLeapYear(1000), false, 'Year 1000');
  });
  it('Year 1200 is leap', function () {
    assert.strictEqual(isLeapYear(1200), true, 'Year 1000');
  });
  it('Year 1234 is not leap', function () {
    assert.strictEqual(isLeapYear(1234), false, 'Year 1234');
  });
  it('Year 1800 is not leap', function () {
    assert.strictEqual(isLeapYear(1800), false, 'Year 1800');
  });
  it('Year 1900 is not leap', function () {
    assert.strictEqual(isLeapYear(1900), false, 'Year 1900');
  });
  it('Year 1984 is leap', function () {
    assert.strictEqual(isLeapYear(1984), true, 'Year 1984');
  });
  it('Year 1990 is not leap', function () {
    assert.strictEqual(isLeapYear(1990), false, 'Year 1990');
  });
  it('Year 2000 is leap', function () {
    assert.strictEqual(isLeapYear(2000), true, 'Year 2000');
  });
  it('Year 2004 is leap', function () {
    assert.strictEqual(isLeapYear(2004), true, 'Year 2004');
  });
  it('Year 2010 is not leap', function () {
    assert.strictEqual(isLeapYear(2010), false, 'Year 2010');
  });
  it('Year 2013 is not leap', function () {
    assert.strictEqual(isLeapYear(2013), false, 'Year 2013');
  });
  it('Year 2100 is not leap', function () {
    assert.strictEqual(isLeapYear(2100), false, 'Year 2100');
  });
});
