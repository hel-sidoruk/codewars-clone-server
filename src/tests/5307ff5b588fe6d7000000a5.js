const { describe, it } = require('mocha');
const functionsToTest = require('./functionsToTest');
const Test = require('@codewars/test-compat');

const once = functionsToTest['5307ff5b588fe6d7000000a5'];

describe('Fixed tests', () => {
  it('This should only be called once and do nothing the second time', () => {
    let f = once(function () {
      throw 'This should only be called once';
    });

    Test.expectError('Should throw an error the first time', f);
    Test.expectNoError('Should do nothing the second time', f);
  });
  it('Should return its argument the first time and undefined the second time..', () => {
    let f = once(function (x) {
      return x;
    });

    Test.assertEquals(f(1), 1, 'Should return its argument the first time.');
    Test.assertEquals(
      f(1),
      undefined,
      'Should return undefined the second time.'
    );
  });
  it('Should return maximum argument the first time and undefined the second time.', () => {
    let f = once(Math.max);

    Test.assertEquals(
      f(6, 51, 39, 12, 18),
      51,
      'Should return maximum argument the first time.'
    );
    Test.assertEquals(
      f(5, 10),
      undefined,
      'Should return undefined the second time.'
    );
  });
  it('Testing a random number of arguments.', () => {
    let f = once(Math.min);
    let args = [];
    for (let i = 0; i < 10 + 10 * Math.random(); i++) {
      args.push(Math.random());
    }

    Test.assertEquals(
      f.apply(null, args),
      Math.min.apply(null, args),
      'Testing a random number of arguments.'
    );
    Test.assertEquals(
      f.apply(null, args),
      undefined,
      'Should return undefined the second time.'
    );
  });
});

describe('Random tests', () => {
  it('Testing a random number of arguments.', () => {
    let f = once(Math.min);
    let args = [];
    for (let i = 0; i < 10 + 10 * Math.random(); i++) {
      args.push(Math.random());
    }

    Test.assertEquals(
      f.apply(null, args),
      Math.min.apply(null, args),
      'Testing a random number of arguments.'
    );
    Test.assertEquals(
      f.apply(null, args),
      undefined,
      'Should return undefined the second time.'
    );
  });
});
