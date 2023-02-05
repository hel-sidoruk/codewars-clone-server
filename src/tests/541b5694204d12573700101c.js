const { assert } = require('chai');
const { describe, it } = require('mocha');
const functionsToTest = require('./functionsToTest');

const flip = functionsToTest['541b5694204d12573700101c'];

describe('Tests', () => {
  it('test', () => {
    Test.assertEquals(flip(print)(4, 5), '5 -> 4');
    Test.assertEquals(flip(rev)(1, 2, 3, 4), 1234);
    Test.assertEquals(
      flip(arr)(
        ['are ', 'you?'],
        ['how '],
        ['James', ', '],
        ['Hello ', 'there ']
      ),
      'Hello there James, how are you?'
    );
  });
});
