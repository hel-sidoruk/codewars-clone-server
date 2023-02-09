const { assert } = require('chai');
const { describe, it } = require('mocha');
const functionsToTest = require('./functionsToTest');

const finalGrade = functionsToTest['5ad0d8356165e63c140014d4'];

function solution(a, b) {
  if (a > 90 || b > 10) return 100;
  if (a > 75 && b >= 5) return 90;
  if (a > 50 && b >= 2) return 75;
  return 0;
}
describe('Fixed tests', () => {
  for (let exam = 0; exam <= 10; exam++)
    for (let projects = 0; projects <= 11; projects++)
      it(`exam = ${exam}, projects = ${projects}`, () => {
        assert.strictEqual(
          finalGrade(exam, projects),
          solution(exam, projects)
        );
      });
});
describe('Testing for 100 random tests', () => {
  for (let i = 0; i < 100; i++) {
    let a = Math.ceil(Math.random() * 100);
    let b = Math.ceil(Math.random() * 20);
    it(`Testing for exam = ${a}, projects = ${b}`, () => {
      assert.strictEqual(finalGrade(a, b), solution(a, b));
    });
  }
});
