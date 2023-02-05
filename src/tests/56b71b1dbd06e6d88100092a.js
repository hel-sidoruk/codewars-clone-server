const { assert } = require('chai');
const { describe, it } = require('mocha');
const functionsToTest = require('./functionsToTest');

const buildFun = functionsToTest['56b71b1dbd06e6d88100092a'];

describe('Basic tests', () => {
  for (let i = 0; i < 10; i++) {
    Test.assertEquals(buildFun(10)[i](), i);
  }

  for (let i = 0; i < 20; i++) {
    Test.assertEquals(buildFun(20)[i](), i);
  }
});

describe('Random tests', () => {
  for (let i = 0; i < 40; i++) {
    n = ~~(Math.random() * 10);
    for (let j = 0; j < n; j++) {
      Test.assertEquals(buildFun(n)[j](), j);
    }
  }
});
