const { assert } = require('chai');
const { describe, it } = require('mocha');
const functionsToTest = require('./functionsToTest');

const getCard = functionsToTest['566d5e2e57d8fae53c00000c'];

describe('Bingo Card:', function () {
  it('Has 24 numbers', function () {
    assert.strictEqual(getCard().length, 24);
  });

  it('Each number is unique', function () {
    let card = getCard();

    let areAllUnique = true;
    for (let i = 0; i < card.length; i++) {
      for (let j = 0; j < card.length; j++) {
        if (areAllUnique && i != j && card[i] == card[j]) {
          areAllUnique = false;
        }
      }
    }
    assert.strictEqual(areAllUnique, true);
  });

  it('Contains a column B that has 5 items', function () {
    testColumnCount(5, 'B');
  });

  it('Contains a column I that has 5 items', function () {
    testColumnCount(5, 'I');
  });

  it('Contains a column N that has 4 items', function () {
    testColumnCount(4, 'N');
  });

  it('Contains a column G that has 5 items', function () {
    testColumnCount(5, 'G');
  });

  it('Contains a column O that has 5 items', function () {
    testColumnCount(5, 'O');
  });

  it('Numbers within a column are in random order', function () {
    let card = getCard();

    let bigger = 0;
    let n0 = Number(card[0].substring(1, card[0].length));

    for (let i = 1; i < card.length; i++) {
      let n1 = Number(card[i].substring(1, card[i].length));
      if (n0 > n1) {
        bigger++;
      }
      n0 = n1;
    }

    assert.strictEqual(
      bigger > 6,
      true,
      'Unlikely variation, found only ' +
        bigger.toString() +
        ' times out of 24 that the next number was bigger than the previous number.'
    );
    assert.strictEqual(
      bigger < 23,
      true,
      'Unlikely variation, found ' +
        bigger.toString() +
        ' times out of 24 that the next number was bigger than the previous number.'
    );
  });

  it('Numbers in column B are all in range 1-15', function () {
    testColumnRange('B', 1, 15);
  });

  it('Numbers in column I are all in range 16-30', function () {
    testColumnRange('I', 16, 30);
  });

  it('Numbers in column N are all in range 31-45', function () {
    testColumnRange('N', 31, 45);
  });

  it('Numbers in column G are all in range 46-60', function () {
    testColumnRange('G', 46, 60);
  });

  it('Numbers in column O are all in range 61-75', function () {
    testColumnRange('O', 61, 75);
  });

  it('Randomness test 1', function () {
    let card1 = getCard();
    let card2 = getCard();

    let matches = 0;
    for (let i = 0; i < 24; i++) {
      if (card1[i] == card2[i]) {
        matches++;
      }
    }
    assert.strictEqual(
      matches < 18,
      true,
      'Unlike event happened, are the cards random?'
    );
  });

  it('Randomness test 2', function () {
    let numbers = [];
    for (let i = 0; i < 20; i++) {
      let n = getCard()[11];
      let numbers = [];
      let isUnique = true;

      for (let j = 0; j < numbers.length; j++) {
        if (numbers[j] == n) {
          isUnique = false;
          break;
        }
        if (isUnique) {
          numbers.push(n);
        }
        if (numbers.length > 6) {
          break;
        }
      }
    }
    assert.strictEqual(
      numbers.length < 7,
      true,
      'Unlike event happened, are the cards random?'
    );
  });

  function testColumnRange(column, start, end) {
    let card = getCard();
    for (let i = 0; i < card.length; i++) {
      if (card[i].substring(0, 1) == column) {
        let n = Number(card[i].substring(1, card[i].length));
        assert.strictEqual(n >= start, true, 'Found: ' + card[i]);
        assert.strictEqual(n <= end, true, 'Found: ' + card[i]);
      }
    }
  }

  function testColumnCount(expected, column) {
    let card = getCard();
    let count = 0;
    for (let i = 0; i < card.length; i++) {
      if (card[i].substring(0, 1) == column) {
        count++;
      }
    }
    assert.strictEqual(expected, count);
  }
});
