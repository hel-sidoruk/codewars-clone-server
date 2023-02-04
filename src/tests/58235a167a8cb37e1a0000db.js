const { assert } = require('chai');
const { describe, it } = require('mocha');
const functionsToTest = require('./functionsToTest');

const numberOfPairs = functionsToTest['58235a167a8cb37e1a0000db'];

describe('Fixed Tests', () => {
  it('Should work for Example tests', function () {
    let tests = [
      [['red', 'red'], 1],
      [['red', 'green', 'blue'], 0],
      [['gray', 'black', 'purple', 'purple', 'gray', 'black'], 3],
    ];

    tests.forEach((a) => {
      assert.strictEqual(numberOfPairs(a[0]), a[1], `Testing for ${a[0]}`);
    });
  });
});

describe('Random tests', function () {
  const colors = [
    'White',
    'Yellow',
    'Fuchsia',
    'Red',
    'Silver',
    'Gray',
    'Olive',
    'Purple',
    'Maroon',
    'Aqua',
    'Lime',
    'Teal',
    'Green',
    'Blue',
    'Navy',
    'Black',
  ];
  function randGloveArray(length) {
    let gloves = [];
    for (let i = 0; i < length; i++) {
      let pickColor = colors[(Math.random() * colors.length) | 0];
      gloves.push(pickColor);
    }
    return gloves;
  }

  function __solution__(gloves) {
    let found = {};
    let pairs = 0;
    gloves.forEach((glove) => {
      if (found[glove]) {
        pairs++;
        delete found[glove];
      } else {
        found[glove] = glove;
      }
    });
    return pairs;
  }
  it(`Should work for random test`, () => {
    const random = (min, max) =>
      Math.floor(Math.random() * (max - min + 1) + min);
    for (let i = 0; i < 20; i++) {
      let testArr = randGloveArray(random(0, 100));
      let testArrCopy = testArr.slice();
      let his = numberOfPairs(testArrCopy);
      let sol = __solution__(testArr);
      assert.strictEqual(his, sol);
      assert.strictEqual(
        JSON.stringify(testArr),
        JSON.stringify(testArrCopy),
        'Should not modify the input'
      );
    }
  });
});
