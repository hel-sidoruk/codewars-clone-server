const { describe, it } = require('mocha');
const functionsToTest = require('./functionsToTest');
const Test = require('@codewars/test-compat');

const whoseBicycle = functionsToTest['5a2cb4bff28b820c33000082'];

describe('Fixed tests', function () {
  it('fixed tests', () => {
    Test.assertEquals(
      whoseBicycle(
        {
          algebra: 6,
          history: 7,
          physics: 8,
          geography: 9,
          chemistry: 10,
        },
        {
          algebra: 8,
          history: 7,
          physics: 8,
          geography: 9,
          chemistry: 10,
        },
        {
          algebra: 6,
          history: 5,
          physics: 5,
          geography: 9,
          chemistry: 10,
        }
      ),
      'I need to buy a bicycle for my second son.'
    );

    Test.assertEquals(
      whoseBicycle(
        {
          algebra: 6,
          history: 7,
          physics: 8,
          geography: 9,
          chemistry: 10,
        },
        {
          algebra: 6,
          history: 7,
          physics: 8,
          geography: 9,
          chemistry: 10,
        },
        {
          algebra: 6,
          history: 7,
          physics: 8,
          geography: 9,
          chemistry: 10,
        }
      ),
      'I need to buy a bicycle for my third son.'
    );

    Test.assertEquals(
      whoseBicycle(
        {
          algebra: 6,
          history: 7,
          physics: 8,
          geography: 9,
          chemistry: 5,
        },
        {
          algebra: 6,
          history: 7,
          physics: 8,
          geography: 9,
          chemistry: 10,
        },
        {
          algebra: 6,
          history: 7,
          physics: 8,
          geography: 9,
          chemistry: 10,
        }
      ),
      'I need to buy a bicycle for my third son.'
    );

    Test.assertEquals(
      whoseBicycle(
        {
          algebra: 3,
          history: 7,
          physics: 8,
          geography: 4,
          chemistry: 10,
        },
        {
          algebra: 6,
          history: 7,
          physics: 8,
          geography: 9,
          chemistry: 4,
        },
        {
          algebra: 9,
          history: 7,
          physics: 9,
          geography: 9,
          chemistry: 10,
        }
      ),
      'I need to buy a bicycle for my third son.'
    );
  });
});

describe('Random tests', function () {
  const randomInt = (a, b) => Math.floor(Math.random() * (b - a + 1) + a);
  const check = (diary1, diary2, diary3) => {
    const marks1 = Object.values(diary1).reduce((sum, item) => sum + item);
    const marks2 = Object.values(diary2).reduce((sum, item) => sum + item);
    const marks3 = Object.values(diary3).reduce((sum, item) => sum + item);

    if (marks1 > marks2 && marks1 > marks3)
      return 'I need to buy a bicycle for my first son.';
    if (marks2 > marks1 && marks2 > marks3)
      return 'I need to buy a bicycle for my second son.';
    if (marks3 > marks2 && marks3 > marks1)
      return 'I need to buy a bicycle for my third son.';
    if (marks2 === marks1 && marks2 > marks3)
      return 'I need to buy a bicycle for my second son.';

    return 'I need to buy a bicycle for my third son.';
  };

  for (let i = 0; i < 96; i++) {
    const diary1 = {
      algebra: randomInt(1, 10),
      history: randomInt(1, 10),
      physics: randomInt(1, 10),
      geography: randomInt(1, 10),
      chemistry: randomInt(1, 10),
    };

    const diary2 = {
      algebra: randomInt(1, 10),
      history: randomInt(1, 10),
      physics: randomInt(1, 10),
      geography: randomInt(1, 10),
      chemistry: randomInt(1, 10),
    };

    const diary3 = {
      algebra: randomInt(1, 10),
      history: randomInt(1, 10),
      physics: randomInt(1, 10),
      geography: randomInt(1, 10),
      chemistry: randomInt(1, 10),
    };

    it(`Testing for whoseBicycle`, () => {
      Test.assertSimilar(
        whoseBicycle(diary1, diary2, diary3),
        check(diary1, diary2, diary3),
        'It should work for random tests too'
      );
    });
  }
});
