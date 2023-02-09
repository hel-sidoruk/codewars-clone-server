const { describe, it } = require('mocha');
const functionsToTest = require('./functionsToTest');
const Test = require('@codewars/test-compat');

const createFunctions = functionsToTest['526ec46d6f5e255e150002d1'];

describe('Fixed tests', function () {
  let callbacks = createFunctions(10);

  it('function must return an array of functions', function () {
    Test.expect(Array.isArray(callbacks), 'Return value must be an array');
    Test.assertEquals(
      callbacks.length,
      10,
      'Returned array must contain exactly 5 functions'
    );

    let functions = 0;
    for (let i = 0; i < callbacks.length; i++) {
      if (typeof callbacks[i] === 'function') functions++;
    }
    Test.assertEquals(functions, 10, 'All array elements must be functions');
  });

  it('functions must return correct number', function () {
    for (let i = 0; i < callbacks.length; i++) {
      Test.assertEquals(callbacks[i](), i, 'Function with index ' + i);
    }
  });
});

describe('Random tests', function () {
  it('random values for n', function () {
    for (let i = 0; i < 5; i++) {
      let rand = Test.randomNumber() + 10;
      let callbacks = createFunctions(rand);
      Test.assertEquals(
        callbacks.length,
        rand,
        'Number of functions does not match'
      );
      let correct = 0;
      for (let j = 0; j < rand; j++) {
        if (callbacks[j]() === j) correct++;
      }
      Test.expect(
        correct === rand,
        'Functions must return the correct numbers'
      );
    }
  });
});
