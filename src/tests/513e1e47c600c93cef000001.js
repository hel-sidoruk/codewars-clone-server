const { describe, it } = require('mocha');
const Test = require('@codewars/test-compat');

const functionsToTest = require('./functionsToTest');

const Animal = functionsToTest['513e1e47c600c93cef000001'];

describe('Fixed tTests', () => {
  it('animal.name should return correct value', () => {
    let cat = new Animal('Sam', 'cat');
    Test.expect(cat.name == 'Sam', 'animal.name does not return correct value');
  });
  it('animal.type should return correct value', () => {
    let cat = new Animal('Sam', 'cat');
    Test.expect(cat.type == 'cat', 'animal.type does not return correct value');
  });
  it('animal.toString() should return correct value', () => {
    let cat = new Animal('Sam', 'cat');
    Test.expect(
      cat.toString() == 'Sam is a cat',
      'animal.toString() does not return correct value'
    );
    cat.name = 'Max';
    Test.expect(
      cat.toString() == 'Max is a cat',
      'animal.toString() does not return correct value'
    );
  });
});
