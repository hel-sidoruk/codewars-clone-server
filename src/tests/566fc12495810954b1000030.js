const { assert } = require('chai');
const { describe, it } = require('mocha');
const functionsToTest = require('./functionsToTest');

const nbDig = functionsToTest['566fc12495810954b1000030'];

describe('nbDig', () => {
  it('Basic tests', () => {
    assert.strictEqual(nbDig(5750, 0), 4700, 'n = 5750, d = 0');
    assert.strictEqual(nbDig(11011, 2), 9481, 'n = 11011, d = 2');
    assert.strictEqual(nbDig(12224, 8), 7733, 'n = 12224, d = 8');
    assert.strictEqual(nbDig(11549, 1), 11905, 'n = 11549, d = 1');
    assert.strictEqual(nbDig(14550, 7), 8014, 'n = 14550, d = 7');
    assert.strictEqual(nbDig(8304, 7), 3927, 'n = 8304, d = 7');
    assert.strictEqual(nbDig(10576, 9), 7860, 'n = 10576, d = 9');
    assert.strictEqual(nbDig(12526, 1), 13558, 'n = 12526, d = 1');
    assert.strictEqual(nbDig(7856, 4), 7132, 'n = 7856, d = 4');
    assert.strictEqual(nbDig(14956, 1), 17267, 'n = 14956, d = 1');
  });

  it('Random tests', () => {
    function randint(a, b) {
      return Math.floor(Math.random() * (b - a + 1) + a);
    }

    //................
    function nbDigSol0000(n, d) {
      let cnt = 0,
        d0 = d.toString();
      for (let k = 0; k <= n; ++k) {
        let s = (k * k).toString();
        for (let i = 0; i < s.length; i++) if (s[i] == d0) ++cnt;
      }
      return cnt;
    }
    //................

    for (let i = 0; i < 100; i++) {
      const n = randint(2000, 15000);
      const d = randint(0, 9);
      assert.strictEqual(nbDig(n, d), nbDigSol0000(n, d), `n = ${n}, d = ${d}`);
    }
  });
});
