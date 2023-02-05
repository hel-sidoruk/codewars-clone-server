const { assert } = require('chai');
const { describe, it } = require('mocha');
const functionsToTest = require('./functionsToTest');

const nicknameGenerator = functionsToTest['593b1909e68ff627c9000186'];

describe('Example Test Cases', function () {
  Test.assertEquals(nicknameGenerator('Jimmy'), 'Jim');
  Test.assertEquals(nicknameGenerator('Samantha'), 'Sam');
  Test.assertEquals(nicknameGenerator('Sam'), 'Error: Name too short');
  Test.assertEquals(nicknameGenerator('Kayne'), 'Kay', "'y' is not a vowel");
  Test.assertEquals(nicknameGenerator('Melissa'), 'Mel');
  Test.assertEquals(nicknameGenerator('James'), 'Jam');
});

describe('Basic Test Cases', function () {
  it('Correct Names (General)', function () {
    Test.assertEquals(nicknameGenerator('Gregory'), 'Greg');
    Test.assertEquals(nicknameGenerator('Jeannie'), 'Jean');
    Test.assertEquals(nicknameGenerator('Kimberly'), 'Kim');
    Test.assertEquals(nicknameGenerator('Timothy'), 'Tim');
    Test.assertEquals(nicknameGenerator('Dani'), 'Dan');
  });

  it('Correct Names (Vowel Checking)', function () {
    Test.assertEquals(nicknameGenerator('Saamy'), 'Saam');
    Test.assertEquals(nicknameGenerator('Saemy'), 'Saem');
    Test.assertEquals(nicknameGenerator('Saimy'), 'Saim');
    Test.assertEquals(nicknameGenerator('Saomy'), 'Saom');
    Test.assertEquals(nicknameGenerator('Saumy'), 'Saum');

    Test.assertEquals(nicknameGenerator('Boyna'), 'Boy', "'y' is not a vowel");
    Test.assertEquals(nicknameGenerator('Kiyna'), 'Kiy', "'y' is not a vowel");
    Test.assertEquals(nicknameGenerator('Sayma'), 'Say', "'y' is not a vowel");
  });

  it('Incorrect Names (Too Short)', function () {
    Test.assertEquals(nicknameGenerator('Ni'), 'Error: Name too short');
    Test.assertEquals(nicknameGenerator('Jam'), 'Error: Name too short');
    Test.assertEquals(nicknameGenerator('Suv'), 'Error: Name too short');
  });
});

describe('Random Test Cases', function () {
  function nicknameGeneratorCheck(name) {
    if (name.length < 4) {
      return 'Error: Name too short';
    }

    if (/[aeiou]/i.test(name[2])) {
      return name.slice(0, 4);
    } else {
      return name.slice(0, 3);
    }
  }

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  function makeRandomName() {
    let randomName = '';
    let length = getRandomInt(3, 10);

    let possible = 'abcdefghijklmnopqrstuvwxyz';
    for (let i = 0; i < length; i++) {
      randomName += possible.charAt(
        Math.floor(Math.random() * possible.length)
      );
    }
    return capitalizeFirstLetter(randomName);
  }

  for (let _ = 0; _ < 50; _++) {
    let randomName = makeRandomName();
    let dupString = randomName.slice();
    let expected = nicknameGeneratorCheck(randomName);
    let actual = nicknameGenerator(randomName);

    Test.assertEquals(actual, expected, `Input: '${dupString}'`);
  }
});
