const { assert } = require('chai');
const { describe, it } = require('mocha');
const functionsToTest = require('./functionsToTest');

const nthFibo = functionsToTest['522551eee9abb932420004a0'];

describe('Tests', function () {
  it('Fixed tests', function () {
    assert.strictEqual(nthFibo(1), 0, '1-st Fibo');
    assert.strictEqual(nthFibo(2), 1, '2-nd Fibo');
    assert.strictEqual(nthFibo(3), 1, '3-rd Fibo');
    assert.strictEqual(nthFibo(4), 2, '4-th Fibo');
    assert.strictEqual(nthFibo(5), 3, '5-th Fibo');
    assert.strictEqual(nthFibo(6), 5, '6-th Fibo');
    assert.strictEqual(nthFibo(7), 8, '7-th Fibo');
    assert.strictEqual(nthFibo(8), 13, '8-th Fibo');
    assert.strictEqual(nthFibo(9), 21, '9-th Fibo');
    assert.strictEqual(nthFibo(10), 34, '10-th Fibo');
    assert.strictEqual(nthFibo(11), 55, '11-th Fibo');
    assert.strictEqual(nthFibo(12), 89, '12-th Fibo');
    assert.strictEqual(nthFibo(13), 144, '13-th Fibo');
    assert.strictEqual(nthFibo(14), 233, '14-th Fibo');
    assert.strictEqual(nthFibo(15), 377, '15-th Fibo');
    assert.strictEqual(nthFibo(16), 610, '16-th Fibo');
    assert.strictEqual(nthFibo(17), 987, '17-th Fibo');
    assert.strictEqual(nthFibo(18), 1597, '18-th Fibo');
    assert.strictEqual(nthFibo(19), 2584, '19-th Fibo');
    assert.strictEqual(nthFibo(20), 4181, '20-th Fibo');
    assert.strictEqual(nthFibo(21), 6765, '21-st Fibo');
    assert.strictEqual(nthFibo(22), 10946, '22-nd Fibo');
    assert.strictEqual(nthFibo(23), 17711, '23-rd Fibo');
    assert.strictEqual(nthFibo(24), 28657, '24-th Fibo');
    assert.strictEqual(nthFibo(25), 46368, '25-th Fibo');
  });
  it('Random tests', function () {
    const ref = (n) => (n === 1 ? 0 : n === 2 ? 1 : ref(n - 1) + ref(n - 2));
    const M = 40;
    for (let i = 0; i < 10; i++) {
      const n = (Math.random() * (M - 1) + 1) | 0;
      assert.strictEqual(nthFibo(n), ref(n));
    }
  });
});
