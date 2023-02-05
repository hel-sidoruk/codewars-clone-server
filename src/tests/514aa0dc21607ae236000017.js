const { assert } = require('chai');
const { describe, it } = require('mocha');
const functionsToTest = require('./functionsToTest');

const shiftyClosures = functionsToTest['514aa0dc21607ae236000017'];

//! здесь две задачи для тестирования - greet_abe и greet_ben

describe('Tests', () => {
  it('test', () => {
    assert.strictEqual(
      greet_abe(),
      'Hello, Abe!',
      'greet_abe() is not greeting Abe'
    );
    assert.strictEqual(
      greet_ben(),
      'Hello, Ben!',
      'greet_ben() is not greeting Ben'
    );
  });
});
