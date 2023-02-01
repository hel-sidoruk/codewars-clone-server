const Mocha = require('mocha');
const path = require('path');
const functionsToTest = require('./functionsToTest');

const mochaInstance = new Mocha();

function fnTest(a, b) {
  return a ** b;
}
const strFn = fnTest.toString();
const fnCreated = new Function('return ' + strFn)();
console.log('INDEX', functionsToTest);
functionsToTest.pow = fnCreated;

mochaInstance.addFile(path.resolve(__dirname, './pow.js'));
mochaInstance
  .run((failures) => console.log('Tests failed: ', failures))
  .on('test', function (test) {
    console.log('Test started: ' + test.title);
  })
  .on('test end', function (test) {
    console.log('Test ended: ' + test.title);
  })
  .on('pass', function (test) {
    console.log('Test passed: ' + test.title);
  })
  .on('fail', function (test, err) {
    console.log('-----------');
    console.log('Test failed: ' + test.title);
    console.log('ACTUAL: ' + err.actual);
    console.log('EXPECTED: ' + err.expected);
    console.log('-----------');
  })
  .on('end', function () {
    console.log('All tests done');
    mochaInstance.unloadFiles();
    functionsToTest.pow = null;
    console.log(functionsToTest);
  });
