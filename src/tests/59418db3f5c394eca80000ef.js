const { describe, it } = require('mocha');
const functionsToTest = require('./functionsToTest');
const Test = require('@codewars/test-compat');

const find = functionsToTest['59418db3f5c394eca80000ef'];

const object = {
  user: {
    addresses: [
      {
        street: '23 A Street',
        city: 'New York',
        state: 'NY',
        zip: '10001',
      },
      {
        street: '27 B Street',
        city: 'Los Angeles',
        state: 'LA',
        zip: '90404',
      },
    ],
    name: {
      first: 'John',
      last: 'Snow',
    },
  },
};
const _describes = [
  () =>
    describe('valid string paths', function () {
      it('should find the first name', function () {
        let path = 'user.name.first';
        let actual = find(object, path);
        let expected = 'John';
        Test.assertEquals(actual, expected);
      });
      it('should find the last name', function () {
        let path = 'user.name.last';
        let actual = find(object, path);
        let expected = 'Snow';
        Test.assertEquals(actual, expected);
      });
    }),
  () =>
    describe('invalid string paths', function () {
      it('should not find initials on the name', function () {
        let path = 'user.name.first.initial.capitalized';
        let actual = find(object, path);
        let expected = undefined;
        Test.assertEquals(actual, expected);
      });
      it('should not find a toString property', function () {
        let path = 'user.name.first.toString';
        let actual = find(object, path);
        let expected = undefined;
        Test.assertEquals(
          actual,
          expected,
          'Be sure check if the property belongs to the object and is not inherited!'
        );
      });
    }),
  () =>
    describe('valid array paths', function () {
      it('should find the first street', function () {
        let path = 'user.addresses.0.street';
        let actual = find(object, path);
        let expected = '23 A Street';
        Test.assertEquals(actual, expected);
      });
      it('should find the second city', function () {
        let path = 'user.addresses.1.city';
        let actual = find(object, path);
        let expected = 'Los Angeles';
        Test.assertEquals(actual, expected);
      });
    }),
  () =>
    describe('invalid array paths', function () {
      it('should not find the first province', function () {
        let path = 'user.addresses.0.province';
        let actual = find(object, path);
        let expected = undefined;
        Test.assertEquals(actual, expected);
      });
      it('should not find the fourth city', function () {
        let path = 'user.addresses.3.city';
        let actual = find(object, path);
        let expected = undefined;
        Test.assertEquals(actual, expected);
      });
    }),
];

describe('#find', function () {
  _describes.forEach((x) => x());
});
describe('random test cases', () => {
  Test.randomize(new Array(20)).forEach(() => {
    Test.randomize(_describes).forEach((x) => x());
  });
});
