const { assert } = require('chai');
const { describe, it } = require('mocha');
const functionsToTest = require('./functionsToTest');

const duplicateEncode = functionsToTest['54b42f9314d9229fd6000d9c'];

describe('Fixed tests', () => {
  it('Testing for fixed tests', () => {
    assert.strictEqual(
      duplicateEncode('din'),
      '(((',
      "Incorrect answer for 'din'"
    );
    assert.strictEqual(
      duplicateEncode('recede'),
      '()()()',
      "Incorrect answer for 'recede'"
    );
    assert.strictEqual(
      duplicateEncode('Success'),
      ')())())',
      "Incorrect answer for 'Success' - should ignore case"
    );
    assert.strictEqual(
      duplicateEncode('CodeWarrior'),
      '()(((())())',
      "Incorrect answer for 'CodeWarrior'"
    );
    assert.strictEqual(
      duplicateEncode('Supralapsarian'),
      ')()))()))))()(',
      "Incorrect answer for 'Supralapsarian' - should ignore case"
    );
    assert.strictEqual(
      duplicateEncode('iiiiii'),
      '))))))',
      "Incorrect answer for 'iiiiii' (duplicate only string)"
    );
  });

  it("Tests with '(' and ')'", () => {
    assert.strictEqual(
      duplicateEncode('(( @'),
      '))((',
      "Incorrect answer for '(( @'"
    );
    assert.strictEqual(
      duplicateEncode(' ( ( )'),
      ')))))(',
      "Incorrect answer for ' ( ( )'"
    );
  });

  it('And now... some random tests !', () => {
    let rndEncode = function () {
      let chars = 'abcdeFGHIJklmnOPQRSTuvwxyz() @!'
        .split('')
        .sort(function () {
          return Math.random() > 0.5 ? 1 : -1;
        })
        .join('');
      let enc = '',
        src = '',
        count = 0,
        len = 10 + ~~(Math.random() * 10),
        dup = chars[chars.length - 1];
      for (let c = 0; c < len; c++) {
        if (Math.random() > 0.5) {
          enc += '(';
          src += chars[c];
        } else {
          enc += ')';
          src += dup;
          count++;
        }
      }
      if (count === 1) {
        enc += ')';
        src += dup;
      }
      return { src: src, res: enc };
    };

    let t = 5;
    while (t--) {
      let tst = rndEncode();
      assert.strictEqual(
        duplicateEncode(tst.src),
        tst.res,
        "should encode '" + tst.src + "'"
      );
    }
  });
});
