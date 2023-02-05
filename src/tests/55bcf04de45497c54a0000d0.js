const { assert, config } = require('chai');
const { describe, it } = require('mocha');
const functionsToTest = require('./functionsToTest');
const _ = require('lodash');

config.truncateThreshold = 0;

const Person = functionsToTest['55bcf04de45497c54a0000d0'];

describe('Fixed Tests', () => {
  it('Tests', () => {
    let marcusFenix = new Person('Marcus', 'Fenix'),
      augustusCole = new Person('Augustus', 'Cole'),
      damonBaird = new Person('Damon', 'Baird'),
      dominicSantiago = new Person('Dominic', 'Santiago');

    assert.strictEqual(marcusFenix.name, 'Marcus Fenix');
    assert.strictEqual(augustusCole.name, 'Augustus Cole');
    assert.strictEqual(damonBaird.name, 'Damon Baird');
    assert.strictEqual(dominicSantiago.name, 'Dominic Santiago');

    augustusCole.name = 'Cole Train';
    dominicSantiago.name = 'Dom Santiago';

    assert.strictEqual(augustusCole.getName(), 'Cole Train');
    assert.strictEqual(dominicSantiago.getName(), 'Dom Santiago');
  });
});

describe('Random Tests', () => {
  const uppercase = [...'ABCDEFGHIJKLMNOPQRSTUVWXYZ'];
  const lowercase = [...'abcdefghijklmnopqrstuvwxyz'];
  function getRandName() {
    return (
      _.sample(uppercase) + _.sampleSize(lowercase, _.random(3, 8)).join('')
    );
  }
  it('Tests', () => {
    for (let i = 0; i < 100; i++) {
      let initialFirstName = getRandName();
      let initialLastName = getRandName();
      let initialFullName = initialFirstName + ' ' + initialLastName;
      let obj = new Person(initialFirstName, initialLastName);

      assert.strictEqual(obj.firstName, initialFirstName);
      assert.strictEqual(obj.lastName, initialLastName);
      assert.strictEqual(obj.getName(), initialFullName);
      assert.strictEqual(obj.name, initialFullName);

      for (let j = 0; j < 5; j++) {
        let newFirstName = getRandName();
        let newLastName = getRandName();
        let newFullName = newFirstName + ' ' + newLastName;
        obj.name = newFullName;

        assert.strictEqual(obj.firstName, newFirstName);
        assert.strictEqual(obj.lastName, newLastName);
        assert.strictEqual(obj.getName(), newFullName);
        assert.strictEqual(obj.name, newFullName);
      }
    }
  });
});
