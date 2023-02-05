const { assert } = require('chai');
const { describe, it } = require('mocha');
const functionsToTest = require('./functionsToTest');

const extractNestedObject = functionsToTest['527a6e602a7db3456e000a2b'];

describe('Fixed Tests', () => {
  it('Tests', () => {
    const results1 = obj.hash('person.name');
    const results2 = obj.hash('person.history.bio');
    const results3 = obj.hash('person.history.homeAddress');
    const results4 = obj.hash('person.animal.pet.needNoseAntEater');
    const results5 = obj.hash('z.a.c');

    assert.strictEqual(results1, 'joe');
    assert.strictEqual(results2.funFact, 'I like fishing.');
    assert.strictEqual(results3, undefined);
    assert.strictEqual(results4, undefined);
    assert.strictEqual(results5.e, 'f');
    assert.strictEqual(results5.g.h.k.l, 'you win');
  });
});
