const { assert } = require('chai');
const { describe, it } = require('mocha');
const functionsToTest = require('./functionsToTest');

const cyclops = functionsToTest['56b0bc0826814364a800005a'];

describe('Fixed tests', function () {
  it('basic tests', function () {
    assert.strictEqual(cyclops(1), false);
    assert.strictEqual(cyclops(5), true);
    assert.strictEqual(cyclops(3), false);
    assert.strictEqual(cyclops(11), false);
    assert.strictEqual(cyclops(13), false);
    assert.strictEqual(cyclops(23), false);
    assert.strictEqual(cyclops(27), true);
    assert.strictEqual(cyclops(2015), true);
    assert.strictEqual(cyclops(666), false);
    assert.strictEqual(cyclops(42), false);
  });
});

describe('Cyclops', function () {
  it('random tests', function () {
    const sol = (n, b = n.toString(2)) =>
      [...b].filter((x) => !+x) == '0' && b === [...b].reverse().join``;
    const ns = [
      5, 27, 119, 495, 2015, 8127, 32639, 130815, 523775, 2096127, 8386559,
      33550335, 134209535, 536854527, 2147450879, 8589869055, 34359607295,
      137438691327, 549755289599, 2199022206975, 8796090925055, 35184367894527,
      140737479966719, 562949936644095, 2251799780130815, 9007199187632127,
    ];
    for (let i = 100; i--; ) {
      const n = ns[(Math.random() * ns.length) | 0] - Math.round(Math.random());
      assert.strictEqual(cyclops(n), sol(n));
    }
  });
});
