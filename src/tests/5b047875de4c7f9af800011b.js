const { assert } = require('chai');
const { describe, it } = require('mocha');
const functionsToTest = require('./functionsToTest');

const sentence = functionsToTest['5b047875de4c7f9af800011b'];

describe('Fixed tests', function () {
  it('tests', () => {
    let List = [
      { 1: 'dog' },
      { 2: 'took' },
      { 4: 'Vatsan' },
      { 5: 'for' },
      { 6: 'a' },
      { 12: 'spin' },
    ];
    assert.strictEqual(sentence(List), 'dog took Vatsan for a spin');

    List = [
      { 3: 'Jake.' },
      { 5: 'Chinatown' },
      { 1: 'Forget' },
      { 4: 'It is' },
      { 2: 'it' },
    ];
    assert.strictEqual(sentence(List), 'Forget it Jake. It is Chinatown');

    List = [{ 3: 'vatsan!' }, { 2: 'love' }, { 1: 'I' }];
    assert.strictEqual(sentence(List), 'I love vatsan!');

    List = [{ 0: 'Wars' }, { '-1': 'Code' }];
    assert.strictEqual(sentence(List), 'Code Wars');
  });
});

function solution(a) {
  return JSON.parse(JSON.stringify(a))
    .map((x) => [parseInt(Object.keys(x)[0]), x[Object.keys(x)[0]]])
    .sort((x, y) => x[0] - y[0])
    .map(([x, y]) => y)
    .join(' ');
}

describe('Random tests', function () {
  let alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXUZ';
  for (let _ = 0; _ < 100; _++) {
    let array = [];
    let n = 5 + ~~(Math.random() * 6);
    let keys = [];
    for (let i = 0; i < n; i++) {
      let key = null;
      do {
        key = -999 + ~~(Math.random() * 1999);
      } while (keys.includes(key));
      keys.push(key);
      let object = {};
      object[key.toString()] = Array.from(
        '_'.repeat(5 + ~~(Math.random() * 6)),
        () => alphabet[~~(Math.random() * 52)]
      ).join('');
      array.push(object);
    }
    let expected = solution(array);
    it(`Value = ${expected}`, () => {
      assert.strictEqual(sentence(array), expected);
    });
  }
});
