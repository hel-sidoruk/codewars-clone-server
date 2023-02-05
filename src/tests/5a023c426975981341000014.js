const { assert } = require('chai');
const { describe, it } = require('mocha');
const functionsToTest = require('./functionsToTest');

const otherAngle = functionsToTest['5a023c426975981341000014'];

describe('Tests', () => {
  it('test', () => {
    assert.strictEqual(otherAngle(30, 60), 90);
    assert.strictEqual(otherAngle(60, 60), 60);
    assert.strictEqual(otherAngle(43, 78), 59);
    assert.strictEqual(otherAngle(10, 20), 150);
  });
});

describe('random test', function () {
  let a_, b_, c_;

  it('Testing for 20 random tests', () => {
    for (let i = 0; i <= 20; i++) {
      a_ = 1 + ~~(Math.random() * 175);
      b_ = 1 + ~~(Math.random() * (180 - a_));
      c_ = 180 - a_ - b_;
      assert.strictEqual(
        otherAngle(a_, b_),
        c_,
        'Testing: ' + a_ + ', ' + b_ + '; Expecting: ' + c_
      );
    }
  });
});
