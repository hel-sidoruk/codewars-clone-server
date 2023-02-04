const { assert } = require('chai');
const { describe, it } = require('mocha');
const functionsToTest = require('./functionsToTest');
const _ = require('lodash');

const stringRepeat = functionsToTest['57a0e5c372292dd76d000d7e'];
const solution = (n, s) => s.repeat(n);

describe('Fixed tests', function () {
  it('Basic tests', function () {
    assert.strictEqual(stringRepeat(3, '*'), '***');
    assert.strictEqual(stringRepeat(5, '#'), '#####');
    assert.strictEqual(stringRepeat(2, 'ha '), 'ha ha ');
    assert.strictEqual(stringRepeat(5, '>'), '>>>>>');
    assert.strictEqual(stringRepeat(10, '!'), '!!!!!!!!!!');
    assert.strictEqual(stringRepeat(3, 'hello '), 'hello hello hello ');
    assert.strictEqual(stringRepeat(3, '$'), '$$$');
    assert.strictEqual(stringRepeat(5, 'a'), 'aaaaa');
    assert.strictEqual(stringRepeat(6, 'A'), 'AAAAAA');
    assert.strictEqual(stringRepeat(7, 'aA'), 'aAaAaAaAaAaAaA');
  });
});

describe('Random tests', function () {
  const randomString = () =>
    Array.from({ length: 1 }, () =>
      String.fromCharCode(
        ...Array.from({ length: Math.floor(Math.random() * 10 + 1) }, () =>
          Math.floor(Math.random() * 26 + 97)
        )
      )
    ).join(' ');
  for (let i = 0; i < 10; i++) {
    let num = _.random(1, 20);
    let s = randomString();
    const expected = solution(num, s);
    it(`Should return "${expected}" for "${s}" repeated ${num} times: `, function () {
      assert.strictEqual(stringRepeat(num, s), solution(num, s));
    });
  }
});
