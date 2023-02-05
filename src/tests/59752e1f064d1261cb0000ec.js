const { assert } = require('chai');
const { describe, it } = require('mocha');
const functionsToTest = require('./functionsToTest');

const whatTimeIsIt = functionsToTest['59752e1f064d1261cb0000ec'];

describe('Solution Tests', function () {
  let dinglemouseAnswer20170727_whatTimeIsIt = function (angle) {
    let min1 = Math.floor((60 * 12 * angle) / 360);
    let hr = Math.floor(min1 / 60);
    let min = min1 - hr * 60;
    if (hr == 0) hr = 12;
    return (hr < 10 ? '0' + hr : hr) + ':' + (min < 10 ? '0' + min : min);
  };

  it('ex1', function () {
    assert.strictEqual(whatTimeIsIt(0), '12:00');
  });

  it('ex2', function () {
    assert.strictEqual(whatTimeIsIt(90), '03:00');
  });

  it('ex3', function () {
    assert.strictEqual(whatTimeIsIt(180), '06:00');
  });

  it('ex4', function () {
    assert.strictEqual(whatTimeIsIt(270), '09:00');
  });

  it('ex5', function () {
    assert.strictEqual(whatTimeIsIt(360), '12:00');
  });

  it('30 degrees', function () {
    assert.strictEqual(whatTimeIsIt(30), '01:00');
  });

  it('40 degrees', function () {
    assert.strictEqual(whatTimeIsIt(40), '01:20');
  });

  it('45 degrees', function () {
    assert.strictEqual(whatTimeIsIt(45), '01:30');
  });

  it('50 degrees', function () {
    assert.strictEqual(whatTimeIsIt(50), '01:40');
  });

  it('60 degrees', function () {
    assert.strictEqual(whatTimeIsIt(60), '02:00');
  });

  it('random', function () {
    for (let r = 0; r < 100; r++) {
      let angle = Math.random() * 360;
      let expected = dinglemouseAnswer20170727_whatTimeIsIt(angle);
      let actual = whatTimeIsIt(angle);
      console.log(`${angle} = <span style='color:green'>${expected}</span>`);
      assert.strictEqual(actual, expected);
    }
  });
});
