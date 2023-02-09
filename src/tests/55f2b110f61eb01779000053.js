/* eslint-disable no-param-reassign */
const { assert } = require('chai');
const { describe, it } = require('mocha');
const functionsToTest = require('./functionsToTest');
const _ = require('lodash');

const getSum = functionsToTest['55f2b110f61eb01779000053'];

describe('Fixed tests', () => {
  function dotest(a, b, expected) {
    it(`Should return ${expected} for a=${a}, b=${b}`, () => {
      assert.strictEqual(getSum(a, b), expected);
    });
  }

  dotest(5, -1, 14);
  dotest(505, 4, 127759);
  dotest(321, 123, 44178);
  dotest(-50, 0, -1275);
  dotest(-1, -5, -15);
  dotest(-5, -5, -5);
  dotest(-505, 4, -127755);
  dotest(-321, 123, -44055);
  dotest(0, 0, 0);
  dotest(-5, -1, -15);
  dotest(5, 1, 15);
  dotest(-17, -17, -17);
  dotest(17, 17, 17);
});

describe('Testing for 100 random tests', () => {
  function dotest(a, b, expected) {
    it(`Should return ${expected} for a=${a}, b=${b}`, () => {
      assert.strictEqual(getSum(a, b), expected);
    });
  }

  function Get_Sum(a, b) {
    if (a == b) return a;
    if (a > b) {
      [a, b] = [b, a];
    }

    let sum = 0;
    for (let i = a; i <= b; i++) sum += i;
    return sum;
  }

  let lohi = Array.from({ length: 40 }).map(() => {
    let a = _.random(-600, 599);
    let b = _.random(a, 600);
    return [a, b];
  });
  let hilo = Array.from({ length: 40 }).map(() => {
    let a = _.random(-600, 599);
    let b = _.random(a, 600);
    return [b, a];
  });
  let eq = Array.from({ length: 20 }).map(() => {
    let a = _.random(-600, 600);
    return [a, a];
  });
  let cases = [...lohi, ...hilo, ...eq];
  for (let [a, b] of _.shuffle(cases)) {
    dotest(a, b, Get_Sum(a, b));
  }
});
