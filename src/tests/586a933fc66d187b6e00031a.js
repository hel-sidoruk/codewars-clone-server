const { describe, it } = require('mocha');
const functionsToTest = require('./functionsToTest');
const Test = require('@codewars/test-compat');

const generateName = functionsToTest['586a933fc66d187b6e00031a'];

describe('Tests', () => {
  it('test', () => {
    for (let i = 0; i < 10; i++) {
      let name = generateName();

      Test.assertEquals(typeof name, 'string', 'Name has to be a string.');
      Test.assertEquals(name.length, 6, 'Name has to be 6 digits long.');
    }
  });
});
