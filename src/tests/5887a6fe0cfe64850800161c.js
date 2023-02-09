const { assert } = require('chai');
const { describe, it } = require('mocha');
const functionsToTest = require('./functionsToTest');

const areaLargestSquare = functionsToTest['5887a6fe0cfe64850800161c'];

describe('Fixed tests', () => {
  it('Basic tests', () => {
    assert.strictEqual(areaLargestSquare(5), 50);
    assert.strictEqual(areaLargestSquare(7), 98);
    assert.strictEqual(areaLargestSquare(15), 450);
  });
});

describe('Random tests', () => {
  it('Random testing', () => {
    let sol = (r) => 2 * Math.pow(r, 2);

    for (let i = 0; i < 100; i++) {
      let t = Math.floor(Math.random() * 50) + 1;
      assert.strictEqual(areaLargestSquare(t), sol(t), `Testing for r = ${t}`);
    }
  });
});
