const { assert } = require('chai');
const { describe, it } = require('mocha');
const functionsToTest = require('./functionsToTest');

const javascriptFilter = functionsToTest['55afe435d2ce100356000032'];

//! полифил Array.filter

describe('Javascript from the Inside: Filter', function () {
  let base_array, empty_array, single_array, falsy_array;

  before(function () {
    empty_array = [];
    single_array = [1];
    base_array = [1, 2, 3, 4, 5];
    falsy_array = [undefined, null, 0, NaN, '', false];
  });

  it('should filter', function () {
    let filtered_array = base_array.filter((x) => x == 1);
    Test.assertSimilar(
      filtered_array,
      [1],
      "Oh no! It didn't filter appropriately."
    );
  });

  it('should work with empty arrays', function () {
    let filtered_empty_array = empty_array.filter((x) => true);
    Test.assertSimilar(
      filtered_empty_array,
      empty_array,
      "Oh no! It didn't filter appropriately an empty array."
    );
  });

  it('should work with single-elemented arrays', function () {
    let filtered_single_array = single_array.filter((x) => true);
    Test.assertSimilar(
      filtered_single_array,
      single_array,
      "Oh no! It didn't filter appropriately a single-elemented array."
    );
  });

  it('should not modify the base array', function () {
    let filtered_array = base_array.filter((x) => x < 5);
    Test.assertSimilar(
      base_array,
      [1, 2, 3, 4, 5],
      'Oh no! Apparently your solution modifies the base array.'
    );
  });

  it("should handle predicate's current value", function () {
    let even_numbers = base_array.filter((x) => x % 2 == 0);
    Test.assertSimilar(
      even_numbers,
      [2, 4],
      "Oh no! It didn't return only the even numbers!"
    );

    let odd_numbers = base_array.filter((x) => x % 2 != 0);
    Test.assertSimilar(
      odd_numbers,
      [1, 3, 5],
      "Oh no! It didn't return only the odd numbers!"
    );
  });

  it("should handhe predicate's current index", function () {
    let first_two = base_array.filter((_, i) => i <= 1);
    Test.assertSimilar(
      first_two,
      [1, 2],
      "Oh no! It didn't return only the first two items"
    );

    let center = base_array.filter((_, i) => i == 2);
    Test.assertSimilar(
      center,
      [3],
      "Oh no! It didn't return only the item in the center"
    );

    let last_two = base_array.filter((_, i) => i >= 3);
    Test.assertSimilar(
      last_two,
      [4, 5],
      "Oh no! It didn't return only the last two items"
    );
  });

  it("should handle predicate's origin array", function () {
    let first_from_orig = base_array.filter(
      (_, i, orig) => orig.filter((__, ii) => ii % i < 2).length == 0
    );
    Test.assertSimilar(
      first_from_orig,
      [1],
      "Oh no! It didn't properly filter using 'origin'"
    );

    let skip_first_from_orig = base_array.filter((_, i, orig) => orig[i - 1]);
    Test.assertSimilar(
      skip_first_from_orig,
      [2, 3, 4, 5],
      "Oh no! It didn't properly filter using 'origin'"
    );
  });

  it('should only process array up to original length', function () {
    let filtered = base_array.filter(
      function (x, i, a) {
        a.push(x);
        return this[i] == i;
      },
      [0, 1, 2, 3, 4]
    );
    Test.assertSimilar(
      filtered,
      [1, 2, 3, 4, 5],
      'Oh no! It looks like your solution allows for the predicate to the base array'
    );
  });

  it("should properly handle filter's context", function () {
    let sum_is_even = base_array.filter(function (x) {
      return (x + this) % 2 == 0;
    }, 2);
    Test.assertSimilar(
      sum_is_even,
      [2, 4],
      'Oh no! The callback received the wrong context!'
    );

    let context_is_double = base_array.filter(
      function (x, i) {
        return this[i] == 2 * x;
      },
      [0, 4, 6, 0, 10]
    );
    Test.assertSimilar(
      context_is_double,
      [2, 3, 5],
      'Oh no! The callback received the wrong context!'
    );
  });

  it("should properly handle callback's array when given a context", function () {
    let sum_with_context = [1, 2, 3].filter(
      function (item, index, orig) {
        return item - orig[index] == 0;
      },
      [4, 5, 6]
    );
    Test.assertSimilar(
      sum_with_context,
      [1, 2, 3],
      'Oh no! It looks like the callback received the wrong array!.'
    );
  });

  it('should work with new Array(length)', function () {
    let should_be_empty = new Array(2).filter((x) => true);
    Test.assertSimilar(
      should_be_empty,
      [],
      "Oh no! It looks like your filter doesn't work well with new Array(length"
    );

    let should_have_one = new Array(20).concat([1]).filter((x) => true);
    Test.assertSimilar(
      should_have_one,
      [1],
      "Oh no! It looks like your filter doesn't skip the 'holes' of a new Array(length)"
    );

    let should_match_indexes = new Array(4).concat([1, 2, 3]).filter(
      function (x, i, a) {
        return i == this[i];
      },
      [, , , , 4, 5, 6]
    );
    Test.assertSimilar(
      should_match_indexes,
      [1, 2, 3],
      'Looks like your filter is not quite working'
    );
  });

  it('should not ignore falsy values', function () {
    let filtered_falsy = falsy_array.filter((x) => !x);
    Test.assertSimilar(
      filtered_falsy,
      falsy_array,
      "Oh no! Looks like your filter ignores 'falsy' values!"
    );

    let tricky_filtered_falsy = new Array(4)
      .concat(falsy_array)
      .filter((x) => !x);
    Test.assertSimilar(
      tricky_filtered_falsy,
      falsy_array,
      "Oh no! Looks like you're not properly handling 'falsy' values!"
    );
  });

  it('should be able to change origin inside the predicate and see the changes', function () {
    let filtered_changed = base_array.filter(
      (x, i, orig) => ((orig[i + 1] = orig[i] + 2), true)
    );
    Test.assertSimilar(
      filtered_changed,
      [1, 3, 5, 7, 9],
      'Oh no! Looks like the changes to origin in the predicate were not applied!'
    );
  });

  it("should handle 'almost' numeric indexes like Array does", function () {
    let arr = [1, 2, 3, 4, 5];
    arr['00'] = 41;
    arr['01'] = 42;

    let filtered_array = arr.filter((x) => true);
    Test.assertSimilar(
      Object.keys(filtered_array),
      [0, 1, 2, 3, 4].map(String),
      "Oh no! it allowed for '00' to be processed by the predicate!"
    );
  });

  it('should handle non-numeric indexes like Array does', function () {
    let arr = [1, 2, 3, 4, 5];
    arr['non-numeric'] = 'Oh god, please no';
    arr['nope'] = 'Chuck testa';

    let filtered_array = arr.filter((x) => true);
    Test.assertSimilar(
      Object.keys(filtered_array),
      [0, 1, 2, 3, 4].map(String),
      'Oh no! It looks like your filter allow for non-numeric indexes to pass by'
    );
  });

  it("should not be fooled by Array.prototype key's", function () {
    Array.prototype['42'] = 42;
    let filtered_array_upper = new Array(40).concat([10]).filter((x) => true);
    Test.assertSimilar(
      Object.keys(filtered_array_upper),
      ['0'],
      "Oh no! it was fooled by Array.prototype['42']"
    );

    Array.prototype['3'] = 42;
    let filtered_array_lower = new Array(10).filter((x) => true);
    Test.assertSimilar(
      Object.keys(filtered_array_lower),
      ['0'],
      "Oh no! It was fooled by Array.prototype['3']"
    );
  });
});
