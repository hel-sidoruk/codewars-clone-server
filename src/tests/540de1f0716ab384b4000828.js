const { describe, it } = require('mocha');
const functionsToTest = require('./functionsToTest');
const Test = require('@codewars/test-compat');

const spread = functionsToTest['540de1f0716ab384b4000828'];

describe('Tests', () => {
  it('test', () => {
    // Sample functions
    function add(x, y) {
      return x + y;
    }
    function minus(x, y) {
      return x - y;
    }
    function sum() {
      return [].reduce.call(arguments, add, 0);
    }
    function arg() {
      return arguments;
    }

    // Test cases
    Test.assertEquals(spread(add, [1, 2]), 3);
    Test.assertEquals(spread(add, [6, 5]), 11);

    Test.assertEquals(spread(minus, [2, 1]), 1);
    Test.assertEquals(spread(minus, [9, 2]), 7);

    Test.assertEquals(spread(sum, [1, 1, 1]), 3);
    Test.assertEquals(spread(sum, [9, 10, 11]), 30);

    Test.assertSimilar(spread(arg, [19, 22, 16]), { 0: 19, 1: 22, 2: 16 });
    Test.assertSimilar(spread(arg, [3, 13, 5]), { 0: 3, 1: 13, 2: 5 });
  });
});
