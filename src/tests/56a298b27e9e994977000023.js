/* eslint-disable no-prototype-builtins */
const { describe, it, before } = require('mocha');
const functionsToTest = require('./functionsToTest');
const Test = require('@codewars/test-compat');

const multiFilter = functionsToTest['56a298b27e9e994977000023'];

if (multiFilter.hasOwnProperty('toString')) {
  delete multiFilter.toString;
}

let removeStrings = function (str) {
  return str.replace(/"[^"]*"|'[^']*'|`[^`]*`/g, '');
};

let removeComments = function (str) {
  return str.replace(/\/\*[\n.]*\*\/|\/\/[^\n]*\n/g, '');
};

let hasLoops = function (fn) {
  let fnText = fn.toString();
  fnText = removeComments(fnText);
  fnText = removeStrings(fnText);
  return /(for|while)\s*\(((?!var\s+_len\s*=\s*arguments\.length).)*\)/g.test(
    fnText
  );
};

let isOdd = function (el) {
  return el % 2 === 1;
};

let isEven = function (el) {
  return el % 2 === 0;
};

let isGreaterThan = function (number) {
  return function (el) {
    return el > number;
  };
};

let isLessThan = function (number) {
  return function (el) {
    return el < number;
  };
};

let noFilter = function () {
  return true;
};

describe('Check rules', function () {
  it("code can't have loops", function () {
    Test.assertEquals(hasLoops(multiFilter), false);
  });
});

describe('Fixed tests', function () {
  let testArray, result;

  before(function () {
    testArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
    result = undefined;
  });

  it("shouldn't filter without filter function", function () {
    result = testArray.filter(multiFilter());
    Test.assertSimilar(result, testArray);
  });

  it('should filter with filter evens function', function () {
    result = testArray.filter(multiFilter(isEven));
    Test.assertSimilar(result, [2, 4, 6, 8, 10, 12, 14, 16]);
  });

  it('should filter with filter odds function', function () {
    result = testArray.filter(multiFilter(isOdd));
    Test.assertSimilar(result, [1, 3, 5, 7, 9, 11, 13, 15]);
  });
});

describe('Test with multiple filter functions', function () {
  let testArray, result;

  before(function () {
    testArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
    result = undefined;
  });

  it('should filter with even AND odds', function () {
    result = testArray.filter(multiFilter(isEven, isOdd));
    Test.assertSimilar(result, []);
  });

  it('should filter with even AND greater than 10', function () {
    result = testArray.filter(multiFilter(isEven, isGreaterThan(10)));
    Test.assertSimilar(result, [12, 14, 16]);
  });

  it('should filter with even AND greater than 4 AND less than 15', function () {
    result = testArray.filter(
      multiFilter(isEven, isGreaterThan(4), isLessThan(15))
    );
    Test.assertSimilar(result, [6, 8, 10, 12, 14]);
  });
});

describe('Random test', function () {
  let testArray, result;

  let generateTestArray = function () {
    let arr = [];
    let length = parseInt(Math.random() * 100, 10) + 50;
    for (let i = 0; i < length; i++)
      arr.push(parseInt(Math.random() * 100, 10));
    return arr;
  };

  before(function () {
    testArray = generateTestArray();
    result = undefined;
  });

  it('should filter evens on random arrays', function () {
    result = testArray.filter(multiFilter(isEven));
    Test.assertSimilar(result, testArray.filter(isEven));
  });

  it('should filter odds on random arrays', function () {
    result = testArray.filter(multiFilter(isOdd));
    Test.assertSimilar(result, testArray.filter(isOdd));
  });

  it('should filter evens AND odds on random arrays', function () {
    result = testArray.filter(multiFilter(isEven, isOdd));
    Test.assertSimilar(result, testArray.filter(isEven).filter(isOdd));
  });

  it('should apply multiple filters on random arrays 1', function () {
    result = testArray.filter(
      multiFilter(noFilter, noFilter, isEven, isGreaterThan(20))
    );
    Test.assertSimilar(
      result,
      testArray.filter(isEven).filter(isGreaterThan(20))
    );
  });

  it('should apply multiple filters on random arrays 2', function () {
    result = testArray.filter(
      multiFilter(noFilter, noFilter, isEven, isGreaterThan(20), isLessThan(70))
    );
    Test.assertSimilar(
      result,
      testArray.filter(isEven).filter(isGreaterThan(20)).filter(isLessThan(70))
    );
  });

  it('should apply multiple filters on random arrays 3', function () {
    result = testArray.filter(
      multiFilter(noFilter, noFilter, isOdd, isGreaterThan(20), isLessThan(70))
    );
    Test.assertSimilar(
      result,
      testArray.filter(isOdd).filter(isGreaterThan(20)).filter(isLessThan(70))
    );
  });

  it('should apply multiple filters on random arrays 4', function () {
    result = testArray.filter(
      multiFilter(
        noFilter,
        noFilter,
        isOdd,
        isGreaterThan(20),
        isLessThan(70),
        isGreaterThan(40)
      )
    );
    Test.assertSimilar(
      result,
      testArray.filter(isOdd).filter(isGreaterThan(40)).filter(isLessThan(70))
    );
  });
});
