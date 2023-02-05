const { assert } = require('chai');
const { describe, it } = require('mocha');
const functionsToTest = require('./functionsToTest');

const combine = functionsToTest['56bd9e4b0d0b64eaf5000819'];

const objA = { a: 10, b: 20, c: 30 };
const objB = { a: 3, c: 6, d: 3 };
const objC = { a: 5, d: 11, e: 8 };
const objD = { c: 3 };

describe('Combine two objects', () => {
  testDeepEqual(combine(objA, objB), { a: 13, b: 20, c: 36, d: 3 });
  testDeepEqual(combine(objA, objC), { a: 15, b: 20, c: 30, d: 11, e: 8 });
});

describe('Combine three objects', () => {
  testDeepEqual(combine(objA, objB, objC), {
    a: 18,
    b: 20,
    c: 36,
    d: 14,
    e: 8,
  });
  testDeepEqual(combine(objA, objC, objD), {
    a: 15,
    b: 20,
    c: 33,
    d: 11,
    e: 8,
  });
});

describe('Handle empty objects', () => {
  testDeepEqual(combine({}, {}, {}), {});
  testDeepEqual(combine(objA, objC, {}), { a: 15, b: 20, c: 30, d: 11, e: 8 });
});

describe('Random tests', () => {
  const __combine = (...objs) => {
    const value = (k) => objs.reduce((acc, o) => acc + (o[k] || 0), 0);

    return objs
      .map(Object.keys)
      .reduce((acc, arr) => [...acc, ...arr], [])
      .filter((k, i, arr) => arr.indexOf(k) === i)
      .reduce((o, k) => ({ ...o, ...{ [k]: value(k) } }), {});
  };

  const LETTERS = 'abcdefghijklmnopqrstuvwxyz';

  const genKey = () => LETTERS[Math.floor(Math.random() * LETTERS.length)];

  const genNumber = (max) => Math.round(Math.random() * max);

  const genObject = () =>
    Array.from({ length: genNumber(26) })
      .map((_) => [genKey(), genNumber(100)])
      .reduce((o, [k, v]) => ({ ...o, ...{ [k]: v } }), {});

  const genObjects = () => Array.from({ length: genNumber(10) }).map(genObject);

  const doTest = (os) => testDeepEqual(combine(...os), __combine(...os));

  Array.from({ length: 20 }).map(genObjects).forEach(doTest);
});
