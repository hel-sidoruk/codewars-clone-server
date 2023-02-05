const { assert } = require('chai');
const { describe, it } = require('mocha');
const functionsToTest = require('./functionsToTest');

const solution = functionsToTest['62c93765cef6f10030dfa92b'];

function generateAnswer(start, finish) {
  let jumps = 0;
  while (start + 3 <= finish) {
    start += 3;
    jumps++;
  }
  while (start != finish) {
    start++;
    jumps++;
  }
  return jumps;
}

describe('Example test cases', function () {
  it('Test case in description', function () {
    assert.strictEqual(solution(1, 5), 2);
  });
});

describe('One more test case', function () {
  it('start = 3 & finish = 3', function () {
    assert.strictEqual(solution(3, 3), 0);
  });
});

describe('Mew', function () {
  it('start = 2 & finish = 4', function () {
    assert.strictEqual(solution(2, 4), 2);
  });
});

describe('Final test cases', function () {
  for (let test = 1; test <= 47; test++) {
    let sInput = Math.round(Math.random() * 998) + 1;
    let fInput = sInput - 1 + Math.round(Math.random() * 998) + 1;
    let eOutput = generateAnswer(sInput, fInput);
    it(
      'Random test cases, start: ' + sInput + ', finish:' + fInput,
      function () {
        assert.strictEqual(solution(sInput, fInput), eOutput);
      }
    );
  }
});
