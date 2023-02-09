const { assert } = require('chai');
const { describe, it } = require('mocha');
const functionsToTest = require('./functionsToTest');

const bingo = functionsToTest['57f625992f4d53c24200070e'];

describe('Fixed tests', () => {
  it('tests', () => {
    assert.strictEqual(
      bingo(
        [
          ['ABC', 65],
          ['HGR', 74],
          ['BYHT', 74],
        ],
        2
      ),
      'Loser!'
    );
    assert.strictEqual(
      bingo(
        [
          ['ABC', 65],
          ['HGR', 74],
          ['BYHT', 74],
        ],
        1
      ),
      'Winner!'
    );
    assert.strictEqual(
      bingo(
        [
          ['HGTYRE', 74],
          ['BE', 66],
          ['JKTY', 74],
        ],
        3
      ),
      'Loser!'
    );
  });
});
describe('Random tests', () => {
  const randint = (a, b) => ~~(Math.random() * (b - a + 1)) + a;

  function mybingo(ticket, win) {
    let tot = [];
    for (let i = 0; i < ticket.length; i++) {
      if (ticket[i][0].includes(String.fromCharCode(ticket[i][1])))
        tot.push(true);
      else tot.push(false);
    }
    return tot.filter((x) => x == true).length == null
      ? 'Loser!'
      : tot.filter((x) => x == true).length >= win
      ? 'Winner!'
      : 'Loser!';
  }

  let names = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
  ];
  let nums = [
    65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83,
    84, 85, 86, 87, 88, 89, 90,
  ];

  for (let i = 0; i < 100; i++) {
    let a = [],
      c = [],
      ticket = [],
      len = randint(2, 10),
      need = randint(0, 8);
    let win = randint(1, len);

    for (let k = 0; k < len; k++) {
      c = [];
      let room = randint(2, 8);
      let y = nums[randint(0, nums.length - 1)];
      let count = 0;
      a = [];
      while (count < room) {
        a.push(names[randint(0, names.length - 1)]);
        count++;
      }
      c.push(a.join(''));
      c.push(y);
      ticket.push(c);
    }

    it(`Testing for [${ticket
      .map(([a, b]) => `[${a},${b}]`)
      .join(', ')}] and ${win}`, () => {
      const exp = mybingo(ticket, win);
      assert.strictEqual(
        bingo(ticket, win),
        exp,
        'It should work for random inputs too'
      );
    });
  }
});
