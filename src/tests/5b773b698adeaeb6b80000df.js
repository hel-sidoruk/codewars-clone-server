/* eslint-disable no-param-reassign */
const { describe, it } = require('mocha');
const functionsToTest = require('./functionsToTest');
const Test = require('@codewars/test-compat');

const reusableMemoisation = functionsToTest['5b773b698adeaeb6b80000df'];

describe('Fixed tests', () => {
  const factorial = (i) => (i ? i * factorial(i - 1) : 1);
  const factorialMemo = reusableMemoisation((i) =>
    i ? i * factorialMemo(i - 1) : 1
  );
  const nTests = 1e6;
  let durationMemo;
  it('a million factorial( 15 )s with memoisation', () => {
    const startMemo = Date.now();
    for (let i = nTests; i--; ) {
      const f = factorialMemo(15);
      if (f !== 1307674368000) Test.assertEquals(f, 1307674368000);
    }
    Test.assertEquals(factorialMemo(15), 1307674368000);
    durationMemo = Date.now() - startMemo;
  });
  let duration;
  it('a million factorial( 15 )s without memoisation', () => {
    const start = Date.now();
    for (let i = nTests; i--; ) {
      const f = factorial(15);
      if (f !== 1307674368000) Test.assertEquals(f, 1307674368000);
    }
    Test.assertEquals(factorial(15), 1307674368000);
    duration = Date.now() - start;
  });
  it('That should have been done at least four times faster <em>with</em> memoisation', () => {
    Test.expect(
      duration >= 4 * durationMemo,
      `but actual speedup was by a factor of ${(
        duration / durationMemo
      ).toFixed(2)}`
    );
  });
});
describe('Ackermann', () => {
  const A = reusableMemoisation((m) =>
    reusableMemoisation((n) =>
      m ? (n ? A(m - 1)(A(m)(n - 1)) : A(m - 1)(1)) : n + 1
    )
  );
  let duration;
  it('Ackermann( 3, 10 )', () => {
    const start = Date.now();
    Test.assertEquals(A(3)(10), 8189);
    duration = Date.now() - start;
  });
  it('That should have been done in milliseconds', () => {
    Test.expect(duration < 100, `but it took ${duration} ms`);
  });
});
describe('Fibonacci', () => {
  const fibonacci = reusableMemoisation((i) =>
    i < 2 ? i : fibonacci(i - 1) + fibonacci(i - 2)
  );
  it('fibonacci( 50 )', () => {
    Test.assertEquals(fibonacci(50), 12586269025);
  });
});
describe('longest common subsequence', () => {
  Function.prototype.on = function (fn) {
    return (...a) => a.map(fn).reduce(this);
  };
  const compare = (v, w) => Number(v > w) - Number(v < w);
  const length = (v) => v.length;
  const maximumBy = (cmp) => (a) =>
    a.reduce((acc, v) => (cmp(acc, v) >= 0 ? acc : v));
  const lcs = reusableMemoisation((s) =>
    reusableMemoisation((t) =>
      s && t
        ? s[0] === t[0]
          ? s[0] + lcs(s.slice(1))(t.slice(1))
          : maximumBy(compare.on(length))([
              lcs(s.slice(1))(t),
              lcs(s)(t.slice(1)),
            ])
        : ''
    )
  );
  it('lcs( "abcdefghijklmnopq", "apcdefghijklmnobq" )', () => {
    Test.assertEquals(
      lcs('abcdefghijklmnopq')('apcdefghijklmnobq'),
      'acdefghijklmnoq'
    );
  });
});
describe('cumulative tree depth with expensive depth', () => {
  const toTree = (s) =>
    s
      ? {
          value: s[0],
          left: toTree(s.slice(1, s.length / 2 + 1)),
          right: toTree(s.slice(s.length / 2 + 1)),
        }
      : null;
  const depth = reusableMemoisation((tree) =>
    tree
      ? busyWait(5e3) || 1 + Math.max(depth(tree.left), depth(tree.right))
      : 0
  );
  const sumDepth = (tree) =>
    tree ? depth(tree) + sumDepth(tree.left) + sumDepth(tree.right) : 0;
  const busyWait = (n) => n && busyWait(n - 1);
  let duration;
  it('sumDepth()', () => {
    const start = Date.now();
    Test.assertEquals(
      sumDepth(toTree('-'.repeat(1e4))),
      23843,
      'Possibly your memo function cannot handle `Object` arguments'
    );
    duration = Date.now() - start;
  });
  it('That should have been done within a second', () => {
    Test.expect(duration < 1000, `but it took ${duration} ms`);
  });
});
describe('sanity check', () => {
  let v = 0;
  const update = reusableMemoisation(() => v++);
  it('side effects should happen exactly once', () => {
    for (let i = 10; i--; ) Test.assertEquals(update(), 0);
    Test.assertEquals(v, 1);
  });
});
describe('Random tests', () => {
  const uncurry = (fn) =>
    function (...args) {
      for (const arg of args) fn = fn(arg);
      return fn;
    };
  const factorial = reusableMemoisation((i) => (i ? i * factorial(i - 1) : 1));
  const A = reusableMemoisation((m) =>
    reusableMemoisation((n) =>
      m ? (n ? A(m - 1)(A(m)(n - 1)) : A(m - 1)(1)) : n + 1
    )
  );
  const fibonacci = reusableMemoisation((i) =>
    i < 2 ? i : fibonacci(i - 1) + fibonacci(i - 2)
  );
  const rnd = (n) => Math.floor(Math.random() * n);
  for (let i = 10; i--; ) {
    const i = rnd(3);
    const fn = [factorial, uncurry(A), fibonacci][i];
    const args = [[rnd(16)], [rnd(4), rnd(5)], [rnd(51)]][i];
    const actual = fn(...args);
    const expected = [
      [
        1, 1, 2, 6, 24, 120, 720, 5040, 40320, 362880, 3628800, 39916800,
        479001600, 6227020800, 87178291200, 1307674368000,
      ],
      [1, 2, 3, 4, 5, 2, 3, 4, 5, 6, 3, 5, 7, 9, 11, 5, 13, 29, 61, 125],
      [
        0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597,
        2584, 4181, 6765, 10946, 17711, 28657, 46368, 75025, 121393, 196418,
        317811, 514229, 832040, 1346269, 2178309, 3524578, 5702887, 9227465,
        14930352, 24157817, 39088169, 63245986, 102334155, 165580141, 267914296,
        433494437, 701408733, 1134903170, 1836311903, 2971215073, 4807526976,
        7778742049, 12586269025,
      ],
    ][i][args.reduce((v, w) => v * 5 + w)];
    it(`${['factorial', 'Ackermann', 'Fibonacci'][i]}( ${args.join(
      ', '
    )} )`, () => {
      Test.assertEquals(actual, expected);
    });
  }
});
