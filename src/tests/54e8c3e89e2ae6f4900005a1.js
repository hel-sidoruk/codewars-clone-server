/* eslint-disable no-prototype-builtins */
const { describe, it } = require('mocha');
const functionsToTest = require('./functionsToTest');
const Test = require('@codewars/test-compat');

const addProperty = functionsToTest['54e8c3e89e2ae6f4900005a1'];
let questions = [
  {
    question: "What's the currency of the USA?",
    choices: ['US dollar', 'Ruble', 'Horses', 'Gold'],
    corAnswer: 0,
  },
  {
    question: 'Where was the American Declaration of Independence signed?',
    choices: ['Philadelphia', 'At the bottom', "Frankie's Pub", 'China'],
    corAnswer: 0,
  },
];
describe('Tests', () => {
  it('test', () => {
    Test.expect(questions[0].usersAnswer === null);
    questions.forEach(function (i) {
      Test.expect(
        i.usersAnswer === null,
        'Should have usersAnswer property set to null'
      );
      Test.expect(
        Object.keys(i).length === 5,
        'The number of properties is not what is expected'
      );
      Test.expect(
        i.hasOwnProperty('usersAnswer'),
        'Should have own property "usersAnswer"'
      );
    });
    Test.expect(
      questions.length === 11,
      'The length of the array should not be modified'
    );
  });
});
