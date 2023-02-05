const { assert } = require('chai');
const { describe, it } = require('mocha');
const functionsToTest = require('./functionsToTest');

const brightest = functionsToTest['62eb800ba29959001c07dfee'];

function dotest(arr, expected) {
  const actual = brightest(arr.slice());
  assert.deepEqual(actual, expected, `Test failed with colors = ${arr}`);
}

describe('Fixed tests', function () {
  it('Basic tests', function () {
    dotest(['#001000', '#000000'], '#001000');
    dotest(['#ABCDEF', '#123456'], '#ABCDEF');
    dotest(['#00FF00', '#FFFF00'], '#00FF00');
    dotest(['#FFFFFF', '#1234FF'], '#FFFFFF');
    dotest(['#FFFFFF', '#123456', '#000000'], '#FFFFFF');
  });
});

function randint(a, b) {
  // exclusive
  return Math.floor(Math.random() * (b - a) + a);
}

function random_color() {
  return `#${randint(0, 1 << 24)
    .toString(16)
    .padStart(6, '0')}`.toUpperCase();
}

function brightest_(colors) {
  let v_max = 0;
  let i_max = 0;

  for (let i = 0; i < colors.length; i++) {
    let color = colors[i];
    let r = parseInt(color.slice(1, 3), 16);
    let g = parseInt(color.slice(3, 5), 16);
    let b = parseInt(color.slice(5, 7), 16);
    let v = Math.max(r, g, b);

    if (v > v_max) {
      v_max = v;
      i_max = i;
    }
  }

  return colors[i_max];
}

describe('Random tests', function () {
  it('300 random tests', function () {
    for (let i = 0; i < 300; i++) {
      // console.log(random_color())
      let testcase = [];
      for (let i = 0; i < randint(1, 16); i++) {
        testcase.push(random_color());
      }
      dotest(testcase, brightest_(testcase));
    }
  });
});
