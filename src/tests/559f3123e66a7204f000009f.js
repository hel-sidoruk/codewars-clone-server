const { assert } = require('chai');
const { describe, it } = require('mocha');
const functionsToTest = require('./functionsToTest');

const ArrowFunc = functionsToTest['559f3123e66a7204f000009f'];

describe('Fixed tests', () => {
  it('Convert those numbers to letters', () => {
    assert.strictEqual(
      ArrowFunc([84, 101, 115, 116]),
      'Test',
      'Convert those numbers to letters'
    );
  });
  it('Keep it up!', () => {
    assert.strictEqual(
      ArrowFunc([70, 85, 83, 32, 82, 79, 72, 32, 68, 65, 72]),
      'FUS ROH DAH'
    );
  });
  it('Final one, come on!', () => {
    assert.strictEqual(
      ArrowFunc([
        73, 32, 119, 97, 115, 32, 97, 110, 32, 97, 100, 118, 101, 110, 116, 117,
        114, 101, 114, 32, 108, 105, 107, 101, 32, 121, 111, 117, 44, 32, 117,
        110, 116, 105, 108, 32, 73, 32, 116, 111, 111, 107, 32, 97, 110, 32, 97,
        114, 114, 111, 119, 32, 116, 111, 32, 116, 104, 101, 32, 107, 110, 101,
        101,
      ]),
      'I was an adventurer like you, until I took an arrow to the knee'
    );
  });
});

describe('Random tests', () => {
  it('tests', () => {
    for (let i3214 = 3; i3214 < 42; i3214++) {
      let codeArr = [];
      for (let i987 = i3214; i987 > 0; i987--) {
        codeArr.push(~~(Math.random() * 60 + 64));
      }
      assert.strictEqual(
        ArrowFunc(codeArr),
        codeArr.map((a) => String.fromCharCode(a)).join('')
      );
    }
  });
});
