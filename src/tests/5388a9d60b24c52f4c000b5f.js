const { assert } = require('chai');
const { describe, it } = require('mocha');
const functionsToTest = require('./functionsToTest');

const powerbind = functionsToTest['5388a9d60b24c52f4c000b5f'];

//! полифил function.bind

let func = function () {
  return this.prop;
};
let func2 = function () {
  return this.prop + 1;
};

let obj1 = { prop: 1 },
  obj2 = { prop: 2 },
  obj3 = { prop: 3 };

describe('Testing first function', function () {
  func = func.bind(obj1);
  Test.expect(func() === 1);
  func = func.bind(obj2);
  Test.expect(func() === 2);
  func = func.bind(obj3);
  Test.expect(func() === 3);
});

describe('Testing second function', function () {
  func2 = func2.bind(obj1);
  Test.expect(func2() === 2);
  func2 = func2.bind(obj2);
  Test.expect(func2() === 3);
  func2 = func2.bind(obj3);
  Test.expect(func2() === 4);
});

describe('Testing both functions', function () {
  Test.expect(func() === 3);
  Test.expect(func2() === 4);
});
