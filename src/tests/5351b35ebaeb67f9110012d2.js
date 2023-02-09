const { describe, it } = require('mocha');
const functionsToTest = require('./functionsToTest');
const Test = require('@codewars/test-compat');

const createSecretHolder = functionsToTest['5351b35ebaeb67f9110012d2'];

describe('Fixed tests ', function () {
  let isFunc = function (functionToCheck) {
      let getType = {};
      return (
        functionToCheck &&
        getType.toString.call(functionToCheck) === '[object Function]'
      );
    },
    secretHolder = createSecretHolder(5);

  it('have a setter and getter', function () {
    Test.expect(isFunc(secretHolder.getSecret));
    Test.expect(isFunc(secretHolder.setSecret));
  });

  it('accept default secrets', function () {
    Test.assertEquals(secretHolder.getSecret(), 5);
  });

  it('remember secrets', function () {
    secretHolder.setSecret(7);
    Test.assertEquals(secretHolder.getSecret(), 7);
  });

  it("not have property called 'secret'", function () {
    Test.expect(secretHolder.secret === undefined);
  });
});

describe('createSecretHolder() must', function () {
  it('work when multiple holders are created with different secrets', function () {
    let secretHolder1 = createSecretHolder(0),
      secretHolder2 = createSecretHolder(5);
    Test.assertEquals(secretHolder1.getSecret(), 0);
    Test.assertEquals(secretHolder2.getSecret(), 5);
  });
});
