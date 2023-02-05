const { assert } = require('chai');
const { describe, it } = require('mocha');
const functionsToTest = require('./functionsToTest');

const javascriptMap = functionsToTest['558ccca75f511f2b0d0000f7'];

//! полифил map

describe('Javascript from the Inside: Map', function () {
  let base_array, empty_array, single_array;

  before(function () {
    empty_array = [];
    single_array = [1];
    base_array = [1, 2, 3, 4, 5];
  });

  it('should return a new array', function () {
    let mapped_to_same = base_array.map(function (x) {
      return x;
    });
    Test.assertNotEquals(
      mapped_to_same,
      base_array,
      "Oh no! I didn't return a new array."
    );
  });

  it('should map', function () {
    let mapped_to_same = base_array.map(function (x) {
      return x;
    });
    Test.assertDeepEquals(
      mapped_to_same,
      base_array,
      "Oh no! I didn't map appropriately."
    );
  });

  it('should work for empty arrays', function () {
    let empty_map = empty_array.map(function (x) {
      return x;
    });
    Test.assertDeepEquals(
      empty_map,
      empty_array,
      "Oh no! it didn't work for empty arrays."
    );
  });

  it('should work for arrays with a single element', function () {
    let single_map = single_array.map(function (x) {
      return x;
    });
    Test.assertDeepEquals(
      single_map,
      single_array,
      "Oh no! it didn't work for arrays with a single element."
    );
  });

  it('should not modify base_array', function () {
    let plus_two = base_array.map(function (item) {
      return item + 2;
    });
    Test.assertDeepEquals(
      base_array,
      [1, 2, 3, 4, 5],
      'Oh no! base_array was altered by your map.'
    );
    Test.assertDeepEquals(plus_two, [3, 4, 5, 6, 7], 'Oh no!');
  });

  it("should properly handle callback's currentValue", function () {
    let squared_array = base_array.map(function (item) {
      return item * item;
    });
    Test.assertDeepEquals(
      squared_array,
      [1, 4, 9, 16, 25],
      "Oh no!, it didn't square every element."
    );

    let to_the_power_of_three_array = base_array.map(function (item) {
      return Math.pow(item, 3);
    });
    Test.assertDeepEquals(
      to_the_power_of_three_array,
      [1, 8, 27, 64, 125],
      "Oh no!, it didn't power every element by three"
    );
  });

  it("should properly handle callback's current index", function () {
    let plus_two_and_index = base_array.map(function (item, index) {
      return item + 2 + index;
    });
    Test.assertDeepEquals(
      plus_two_and_index,
      [3, 5, 7, 9, 11],
      'Oh no! it did not add the indexes appropriately.'
    );

    let divided_by_index = base_array.map(function (item, index) {
      return item / index;
    });
    Test.assertDeepEquals(
      divided_by_index,
      [Infinity, 2, 1.5, 1.3333333333333333, 1.25],
      'Oh no! it did not divided by the correspondant index!'
    );

    let array_indexes = base_array.map(function (_, index) {
      return index;
    });
    Test.assertDeepEquals(
      array_indexes,
      [0, 1, 2, 3, 4],
      'Oh no! The index are not properly enumerated.'
    );
  });

  it("should properly handle callback's array", function () {
    let array_times_five = base_array.map(function (_, _2, array) {
      return array;
    });
    Test.assertDeepEquals(
      array_times_five,
      [
        [1, 2, 3, 4, 5],
        [1, 2, 3, 4, 5],
        [1, 2, 3, 4, 5],
        [1, 2, 3, 4, 5],
        [1, 2, 3, 4, 5],
      ],
      'Oh no! it was expecting array to be returned 5 times.'
    );

    let plus_two_from_array = base_array.map(function (_, index, array) {
      return array[index] + 2;
    });
    Test.assertDeepEquals(
      plus_two_from_array,
      [3, 4, 5, 6, 7],
      "Oh no! It looks like array[index] didn't return what it should!"
    );
  });

  it('should properly handle context', function () {
    let sum_with_context = [1, 2, 3].map(
      function (item, index) {
        return item + this[index];
      },
      [4, 5, 6]
    );
    Test.assertDeepEquals(
      sum_with_context,
      [5, 7, 9],
      "Oh no! It looks like 'this' was not the context."
    );
  });

  it("should properly handle callback's array when given a context", function () {
    let sum_with_context = [1, 2, 3].map(
      function (item, index, orig) {
        return item + orig[index];
      },
      [4, 5, 6]
    );
    Test.assertDeepEquals(
      sum_with_context,
      [2, 4, 6],
      'Oh no! It looks like the callback received the wrong array!.'
    );
  });

  it('should work with new Array constructor', function () {
    let array_of_two = new Array(2).map(function (x) {
      return 1;
    });
    Test.assertDeepEquals(
      array_of_two,
      [, ,],
      "Oh no! It looks like your map doesn't work well with a new Array()"
    );
  });

  it("should skip the 'holes' a new Array(length)", function () {
    let array_of_two_and_one = new Array(2).concat([null]).map(function (x) {
      return 1;
    });
    Test.assertDeepEquals(
      array_of_two_and_one,
      [, , 1],
      "On on! It looks like your map is not skipping the 'holes' inside a new Array(length) Object"
    );
  });

  it('should handle non numeric-indexes like an array does', function () {
    let array = [1, 2, 3, 4];
    array['batida'] = "oh no... Please, don't do this. NOOOOOOOOO";
    let mapped_array = array.map(function (x, i) {
      return x;
    });
    Test.assertDeepEquals(
      Object.keys(mapped_array),
      Object.keys([1, 2, 3, 4]),
      "Well, a non-numeric index 'batida' was mapped, that shouldn't happen"
    );
  });
});

function sol(fn, thisArg = this) {
  let ret = [];
  for (let ctx = this, i = 0, l = ctx.length, undef; i < l; i += 1) {
    ret[i] = i in ctx ? fn.call(thisArg, ctx[i], i, ctx) : undef;
  }
  return ret;
}

describe('Random tests', function () {
  it('should work for random tests', function () {
    for (let i = 0; i < 100; i++) {
      let l = (Math.random() * 10 + 5) | 0;
      let arr = [...Array(l)].map((_) => (Math.random() * 100 - 50) | 0);
      let ref = arr.slice();
      let fn = (
        (a, b) => (x) =>
          x * a + b
      )((Math.random() * 100 - 50) | 0, (Math.random() * 100 - 50) | 0);
      for (let j = 0; j < l; j++) ref[j] = fn(ref[j]);
      Test.assertDeepEquals(arr.map(fn), ref);
    }
  });
});
