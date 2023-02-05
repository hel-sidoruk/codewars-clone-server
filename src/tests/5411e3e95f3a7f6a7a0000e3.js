const { assert } = require('chai');
const { describe, it } = require('mocha');
const functionsToTest = require('./functionsToTest');

const arrayReduce = functionsToTest['5411e3e95f3a7f6a7a0000e3'];

describe('Tests', () => {
  it('test', () => {
    function sum(x, y) {
      return x + y;
    }
    function nsum(x, y) {
      return x - y;
    }
    function count(obj, elem) {
      if (!obj[elem]) obj[elem] = 0;
      obj[elem] += 1;
      return obj;
    }

    // String concatenation
    Test.assertEquals(['u', 'm'].reduce(sum, 's'), 'sum');
    Test.assertEquals(['i', 'rd', 'ies'].reduce(sum, 'b'), 'birdies');
    Test.assertEquals(['fall', 'aff', 'les'].reduce(sum), 'fallaffles');

    // Number operations
    Test.assertEquals([1, 2, 3, 4, 5].reduce(sum), 15);
    Test.assertEquals([2, 3, 4, 5].reduce(sum, 1), 15);
    Test.assertEquals([10, 5].reduce(nsum, 15), 0);

    // Object counting
    Test.assertSimilar(['bird', 'bee', 'bird', 'bird'].reduce(count, {}), {
      bird: 3,
      bee: 1,
    });
    Test.assertSimilar(
      ['bee', 'bird', 'coconut'].reduce(count, { bird: 3, bee: 1 }),
      { bird: 4, bee: 2, coconut: 1 }
    );
    Test.assertSimilar([].reduce(count, { bird: 3, bee: 100 }), {
      bird: 3,
      bee: 100,
    });

    // No-Changes testing
    let lst = [1, 2, 3, 4, 5];
    Test.assertEquals(lst.reduce(sum, 15), 30);
    Test.assertSimilar(lst, [1, 2, 3, 4, 5]);

    Test.assertEquals(['l', 'a', 'm', 'a'].reduce(sum, 'l'), 'llama');
  });
});
