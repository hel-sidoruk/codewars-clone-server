const { assert } = require('chai');
const { describe, it } = require('mocha');
const functionsToTest = require('./functionsToTest');

const dataReverse = functionsToTest['569d488d61b812a0f7000015'];

describe('Data Reverse', function () {
  it('Fixed Tests', function () {
    const data1 = [
      1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1,
      0, 1, 0, 1, 0, 1, 0,
    ];
    const data2 = [
      1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1,
      1, 1, 1, 1, 1, 1, 1,
    ];
    assert.deepEqual(dataReverse(data1), data2);
    const data3 = [0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 1, 0, 1, 0, 0, 1];
    const data4 = [0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 1, 0, 1, 1, 0];
    assert.deepEqual(dataReverse(data3), data4);
  });
  it('Random Tests', function () {
    const rnd = (n) => Math.floor(Math.random() * n);
    const rndArray = () => Array.from({ length: rnd(30) * 8 }, () => rnd(2));
    const chunksOf8 = (a) =>
      a.length ? [a.slice(0, 8)].concat(chunksOf8(a.slice(8))) : [];
    const refDataReverse = (data) => [].concat(...chunksOf8(data).reverse());
    for (let i = 40; i--; ) {
      const arg = rndArray();
      assert.deepEqual(dataReverse([...arg]), refDataReverse(arg));
    }
  });
});
