const { assert } = require('chai');
const { describe, it } = require('mocha');
const functionsToTest = require('./functionsToTest');

const mutualRecursion = functionsToTest['53a1eac7e0afd3ad3300008b'];

//! в этой задаче для теста не одна функция, а две - F(n) и M(n)

let f_arr = [],
  m_arr = [];

for (let i = 0; i < 10; i++) {
  f_arr.push(F(i));
  m_arr.push(M(i));
}

describe('Checking the first 10 integers in sequence...', function () {
  Test.assertEquals(f_arr.toString(), '1,1,2,2,3,3,4,5,5,6');
  Test.assertEquals(m_arr.toString(), '0,0,1,2,2,3,4,4,5,6');
});

for (let i = 10; i < 25; i++) {
  f_arr.push(F(i));
  m_arr.push(M(i));
}

describe('Checking the first 25 integers in sequence...', function () {
  Test.assertEquals(
    f_arr.toString(),
    '1,1,2,2,3,3,4,5,5,6,6,7,8,8,9,9,10,11,11,12,13,13,14,14,15'
  );
  Test.assertEquals(
    m_arr.toString(),
    '0,0,1,2,2,3,4,4,5,6,6,7,7,8,9,9,10,11,11,12,12,13,14,14,15'
  );
});
