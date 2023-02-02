const { assert } = require('chai');
const { describe, it } = require('mocha');
const functionsToTest = require('./functionsToTest');

function fn() {
  const simpleMultiplication = functionsToTest.simpleMultiplication;

  if (!simpleMultiplication || typeof simpleMultiplication !== 'function')
    return;

  describe('Basic Tests', () => {
    it('Should return given argument times eight...', () => {
      assert.strictEqual(
        simpleMultiplication(2),
        16,
        'Should return given argument times eight...'
      );
    });
    it('Should return given argument times nine...', () => {
      assert.strictEqual(
        simpleMultiplication(1),
        9,
        'Should return given argument times nine...'
      );
    });
    it('Should return given argument times eight...', () => {
      assert.strictEqual(
        simpleMultiplication(8),
        64,
        'Should return given argument times eight...'
      );
    });
    it('Should return given argument times eight...', () => {
      assert.strictEqual(
        simpleMultiplication(4),
        32,
        'Should return given argument times eight...'
      );
    });
    it('Should return given argument times nine...', () => {
      assert.strictEqual(
        simpleMultiplication(5),
        45,
        'Should return given argument times nine...'
      );
    });
  });

  describe('Testing for 40 random tests', () => {
    function theAnswer(number) {
      return number % 2 === 0 ? number * 8 : number * 9;
    }
    function makeTest(x) {
      it(`Testing for number = ${x}`, () => {
        assert.equal(simpleMultiplication(x), theAnswer(x));
      });
    }

    for (let i = 0; i < 40; i++) {
      let num = Math.floor(Math.random() * 30);
      makeTest(num);
    }
  });
}
fn();
