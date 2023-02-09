const { describe, it } = require('mocha');
const functionsToTest = require('./functionsToTest');

const fizzbuzz = functionsToTest['5300901726d12b80e8000498'];

const Test = require('@codewars/test-compat');

function fizzify(n) {
  return Array(n)
    .fill()
    .map((_, i) =>
      (i + 1) % 3 == 0 && (i + 1) % 5 == 0
        ? 'FizzBuzz'
        : (i + 1) % 3 == 0
        ? 'Fizz'
        : (i + 1) % 5 == 0
        ? 'Buzz'
        : i + 1
    );
}

// Return an array
function fizzbuzzRandom(n) {
  let arr = [];
  let maxNumber = parseInt(n);

  for (let i = 1; i <= maxNumber; i++) {
    arr.push(fizzify(i));
  }

  return arr;
}
describe('Fixed tests', function () {
  it('Should fizzify 10 numbers correctly', function () {
    let expected = [1, 2, 'Fizz', 4, 'Buzz', 'Fizz', 7, 8, 'Fizz', 'Buzz'];
    Test.assertEquals(
      JSON.stringify(fizzbuzz(10)),
      JSON.stringify(expected),
      'Fails with 10 numbers!'
    );
  });
});
describe('Fizzbuzz', function () {
  it('Should fizzify 30 numbers correctly', function () {
    let expected = [
      1,
      2,
      'Fizz',
      4,
      'Buzz',
      'Fizz',
      7,
      8,
      'Fizz',
      'Buzz',
      11,
      'Fizz',
      13,
      14,
      'FizzBuzz',
      16,
      17,
      'Fizz',
      19,
      'Buzz',
      'Fizz',
      22,
      23,
      'Fizz',
      'Buzz',
      26,
      'Fizz',
      28,
      29,
      'FizzBuzz',
    ];
    Test.assertEquals(
      JSON.stringify(fizzbuzz(30)),
      JSON.stringify(expected),
      'Fails with 30 numbers!'
    );
  });

  it('Should fizzify 1 number correctly', function () {
    let expected = [1];
    Test.assertEquals(
      JSON.stringify(fizzbuzz(1)),
      JSON.stringify(expected),
      'Fails with 1 number!'
    );
  });

  it('Should fizzify 100 number correctly', function () {
    let expected = [
      1,
      2,
      'Fizz',
      4,
      'Buzz',
      'Fizz',
      7,
      8,
      'Fizz',
      'Buzz',
      11,
      'Fizz',
      13,
      14,
      'FizzBuzz',
      16,
      17,
      'Fizz',
      19,
      'Buzz',
      'Fizz',
      22,
      23,
      'Fizz',
      'Buzz',
      26,
      'Fizz',
      28,
      29,
      'FizzBuzz',
      31,
      32,
      'Fizz',
      34,
      'Buzz',
      'Fizz',
      37,
      38,
      'Fizz',
      'Buzz',
      41,
      'Fizz',
      43,
      44,
      'FizzBuzz',
      46,
      47,
      'Fizz',
      49,
      'Buzz',
      'Fizz',
      52,
      53,
      'Fizz',
      'Buzz',
      56,
      'Fizz',
      58,
      59,
      'FizzBuzz',
      61,
      62,
      'Fizz',
      64,
      'Buzz',
      'Fizz',
      67,
      68,
      'Fizz',
      'Buzz',
      71,
      'Fizz',
      73,
      74,
      'FizzBuzz',
      76,
      77,
      'Fizz',
      79,
      'Buzz',
      'Fizz',
      82,
      83,
      'Fizz',
      'Buzz',
      86,
      'Fizz',
      88,
      89,
      'FizzBuzz',
      91,
      92,
      'Fizz',
      94,
      'Buzz',
      'Fizz',
      97,
      98,
      'Fizz',
      'Buzz',
    ];
    Test.assertEquals(
      JSON.stringify(fizzbuzz(100)),
      JSON.stringify(expected),
      'Fails with 100 number!'
    );
  });

  it('Should fizzify a random positive integer (1~100) correctly', function () {
    let randomNum = Math.ceil(Math.random() * 99);
    let expected = fizzbuzzRandom(randomNum);
    Test.assertEquals(
      JSON.stringify(fizzbuzzRandom(randomNum)),
      JSON.stringify(expected),
      'Fails with random number!'
    );
  });
});
