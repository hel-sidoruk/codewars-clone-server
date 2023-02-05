const { describe, it } = require('mocha');
const functionsToTest = require('./functionsToTest');

const newFunction = functionsToTest['5a2cb53cee1aaef2fa000037'];
const Test = require('@codewars/test-compat');

describe('Your Interpreter', function () {
  it('should work for some example test cases', function () {
    let novelty = 0;
    Test.expectNoError('Your function is old.', function () {
      new newFunction();
      console.log('Your function is new.');
      novelty++;
    });
    Test.expectNoError(
      novelty == 1 ? 'Your function is middle-aged.' : undefined,
      function () {
        new new newFunction()();
        console.log('Your function is very new.');
        novelty++;
      }
    );
    Test.expectNoError(
      novelty == 2 ? 'Your function is new, but not new enough.' : undefined,
      function () {
        new new new newFunction()()();
        console.log('Your function is very, very new.');
        novelty++;
      }
    );
    Test.expectNoError(
      novelty == 3
        ? 'Your function is quite new, but not new enough.'
        : undefined,
      function () {
        new new new new newFunction()()()();
        console.log('Your function is remarkably, uncommonly new.');
        novelty++;
      }
    );
    Test.expectNoError(
      novelty == 4
        ? 'Your function is really quite new. Still, please make it newer.'
        : undefined,
      function () {
        new new new new new newFunction()()()()();
        console.log('It is downright extreme, just how new your function is.');
        novelty++;
      }
    );
    Test.expectNoError(
      novelty == 5 ? 'Not bad, not bad! Still... make it newer.' : undefined,
      function () {
        new new new new new new newFunction()()()()()();
        console.log('Your function is ludicrously, preposterously new. ');
        novelty++;
      }
    );
    Test.expectNoError(
      novelty == 6
        ? "Your function doesn't work if it's a thousand times new."
        : undefined,
      function () {
        eval('new '.repeat(1000) + 'newFunction');
        console.log(
          'Your function is a thousand times new, and it still works!!'
        );
        console.log('Great job! You are cool! ');
      }
    );
  });
});
