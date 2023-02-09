const { assert } = require('chai');
const { describe, it } = require('mocha');
const functionsToTest = require('./functionsToTest');

const solution = functionsToTest['51f2d1cafc9c0f745c00037d'];
describe('Fixed tests', () => {
  function check(str, ending, expected) {
    let result = solution(str, ending);
    it(
      "Expected solution('" +
        str +
        "', '" +
        ending +
        "') to return " +
        expected,
      () => {
        assert.strictEqual(result, expected);
      }
    );
  }

  check('samurai', 'ai', true);
  check('sumo', 'omo', false);
  check('ninja', 'ja', true);
  check('sensei', 'i', true);
  check('samurai', 'ra', false);
  check('abc', 'abcd', false);
  check('abc', 'abc', true);
  check('abcabc', 'bc', true);
  check('ails', 'fails', false);
  check('fails', 'ails', true);
  check('this', 'fails', false);
  check('abc', '', true);
  check(':-)', ':-(', false);
  check('!@#$%^&*() :-)', ':-)', true);
});
