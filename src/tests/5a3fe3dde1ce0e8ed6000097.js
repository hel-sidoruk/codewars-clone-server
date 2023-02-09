const { assert } = require('chai');
const { describe, it } = require('mocha');
const functionsToTest = require('./functionsToTest');

const century = functionsToTest['5a3fe3dde1ce0e8ed6000097'];

describe('Fixed Tests', function () {
  it('Sample Tests', function () {
    assert.strictEqual(century(1705), 18, 'Testing for year 1705');
    assert.strictEqual(century(1900), 19, 'Testing for year 1900');
    assert.strictEqual(century(1601), 17, 'Testing for year 1601');
    assert.strictEqual(century(2000), 20, 'Testing for year 2000');
    assert.strictEqual(century(89), 1, 'Testing for year 89');
  });
});

describe('Random Tests', function () {
  function gC(y) {
    return Math.ceil(y / 100);
  }

  for (let i = 0; i < 100; i++) {
    let year = Math.ceil(Math.random() * 999999);
    it('Testing for year ' + year, function () {
      assert.strictEqual(century(year), gC(year));
    });
  }
});
