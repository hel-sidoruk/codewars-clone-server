const { assert } = require('chai');
const { describe, it } = require('mocha');
const functionsToTest = require('./functionsToTest');

const getParticipants = functionsToTest['5574835e3e404a0bed00001b'];

describe('Handshake problem', () => {
  it('Testing for fixed tests', () => {
    assert.strictEqual(getParticipants(0), 0);
    assert.strictEqual(getParticipants(1), 2);
    assert.strictEqual(getParticipants(3), 3);
    assert.strictEqual(getParticipants(6), 4);
    assert.strictEqual(getParticipants(7), 5);
  });

  it('Some random tests', () => {
    let getHandShakes = function (p) {
      return (p * (p - 1)) / 2;
    };

    for (let x = 0; x < 100; x++) {
      let expected = (Math.random() * 999 + 5) | 0;
      let input = getHandShakes(expected);
      let actual = getParticipants(input);
      assert.strictEqual(actual, expected, `Testing for handshakes=${input}`);
    }
  });
});
