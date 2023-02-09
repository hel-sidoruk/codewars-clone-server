const { assert } = require('chai');
const { describe, it } = require('mocha');
const functionsToTest = require('./functionsToTest');

const getParticipants = functionsToTest['5574835e3e404a0bed00001b'];

describe('Fixed tests', () => {
  it('Handshake problem', () => {
    assert.strictEqual(getParticipants(0), 0);
    assert.strictEqual(getParticipants(1), 2);
    assert.strictEqual(getParticipants(3), 3);
    assert.strictEqual(getParticipants(6), 4);
    assert.strictEqual(getParticipants(7), 5);
  });
});

describe('Random tests', () => {
  let getHandShakes = function (p) {
    return (p * (p - 1)) / 2;
  };

  for (let x = 0; x < 100; x++) {
    let expected = (Math.random() * 999 + 5) | 0;
    let input = getHandShakes(expected);
    let actual = getParticipants(input);
    it(`Testing for handshakes=${input}`, () => {
      assert.strictEqual(actual, expected);
    });
  }
});
