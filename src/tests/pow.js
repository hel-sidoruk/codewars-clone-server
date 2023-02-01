const { assert } = require('chai');
const { describe, it } = require('mocha');
const functionsToTest = require('./functionsToTest');

function fn() {
  console.log('POW FILE', functionsToTest);

  const pow = functionsToTest.pow;

  if (!pow || typeof pow !== 'function') return;
  console.log(pow.toString());

  describe('pow testing', function () {
    function makeTest(x) {
      let expected = x * x * x;
      it(`${x} в степени 3 будет ${expected}`, function () {
        assert.equal(pow(x, 3), expected);
      });
    }

    for (let x = 1; x <= 5; x++) {
      makeTest(x);
    }
  });
}
fn();
