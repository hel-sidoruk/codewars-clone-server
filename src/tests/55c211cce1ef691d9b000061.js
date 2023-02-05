/* eslint-disable no-param-reassign */
const { describe, it } = require('mocha');
const functionsToTest = require('./functionsToTest');
const Test = require('@codewars/test-compat');

const calculate = functionsToTest['55c211cce1ef691d9b000061'];

describe('Main Tests', function () {
  it('should be a correct number from example Test Case', function () {
    Test.assertEquals(calculate(1)(1), 2);
    Test.assertEquals(calculate(1, 1)(1), 3);
    Test.assertEquals(calculate(1, 1)(1, -1), 2);
    Test.assertEquals(calculate(2, 4)(3, 7, 1), 17);
  });
  it('should return the correct number', function () {
    Test.assertEquals(calculate(2, 3)(0), 5);
    Test.assertEquals(calculate(2)(0), 2);
    Test.assertEquals(calculate(1, 1, 1, 1, 1, 1)(1, 1), 8);
    Test.assertEquals(calculate(0)(0), 0);
    Test.assertEquals(calculate(-1)(-1), -2);
    Test.assertEquals(calculate(-1.1)(-1), -2.1);
    Test.assertEquals(calculate(1.1002)(55), 56.1002);
    Test.assertEquals(calculate(1.1, 2.2)(4, 4, 2), 13.3);
  });
});

function calculateReference() {
  function r(arg) {
    let a = [].map.call(arg, function (a) {
      return a;
    });

    return a.reduce(function (p, c) {
      return p + c;
    });
  }
  let res = r(arguments);
  return function () {
    res += r(arguments);
    return res;
  };
}

function generator() {
  let a = [randNum(-10, 10)];
  let b = [randNum(-10, 10)];
  while (Math.random() > 0.1) a.push(randNum(-10, 10));
  while (Math.random() > 0.1) b.push(randNum(-10, 10));
  return [a, b];
}

function randNum(min, max) {
  if (Math.random() > 0.1) return randInt(min, max);
  return randFloat(min, max);
}
function randInt(a, b) {
  return (Math.random() * (b - a + 1) + a) | 0;
}
function randFloat(min, max) {
  return Math.random() * (max - min) + min;
}

function randomAssertSimilar(
  generator,
  userSolution,
  referenceSolution,
  tests
) {
  tests = tests || 100;
  let user, reference, values;
  while (tests-- > 0) {
    values = generator();
    reference = referenceSolution(...values[0])(...values[1]);
    user = userSolution(...values[0])(...values[1]);
    Test.assertApproxEquals(
      user,
      reference,
      "didn't work on the following argument array: " + values
    );
  }
}

describe('Random tests', function () {
  randomAssertSimilar(generator, calculate, calculateReference);
});
