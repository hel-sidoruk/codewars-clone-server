const { assert } = require('chai');
const { describe, it } = require('mocha');
const functionsToTest = require('./functionsToTest');

const nicknameGenerator = functionsToTest['593b1909e68ff627c9000186'];

describe('Example Test Cases', function () {
  assert.strictEqual(nicknameGenerator('Jimmy'), 'Jim');
  assert.strictEqual(nicknameGenerator('Samantha'), 'Sam');
  assert.strictEqual(nicknameGenerator('Sam'), 'Error: Name too short');
  assert.strictEqual(nicknameGenerator('Kayne'), 'Kay', "'y' is not a vowel");
  assert.strictEqual(nicknameGenerator('Melissa'), 'Mel');
  assert.strictEqual(nicknameGenerator('James'), 'Jam');
});

describe('Basic Test Cases', function () {
  it('Correct Names (General)', function () {
    assert.strictEqual(nicknameGenerator('Gregory'), 'Greg');
    assert.strictEqual(nicknameGenerator('Jeannie'), 'Jean');
    assert.strictEqual(nicknameGenerator('Kimberly'), 'Kim');
    assert.strictEqual(nicknameGenerator('Timothy'), 'Tim');
    assert.strictEqual(nicknameGenerator('Dani'), 'Dan');
  });

  it('Correct Names (Vowel Checking)', function () {
    assert.strictEqual(nicknameGenerator('Saamy'), 'Saam');
    assert.strictEqual(nicknameGenerator('Saemy'), 'Saem');
    assert.strictEqual(nicknameGenerator('Saimy'), 'Saim');
    assert.strictEqual(nicknameGenerator('Saomy'), 'Saom');
    assert.strictEqual(nicknameGenerator('Saumy'), 'Saum');

    assert.strictEqual(nicknameGenerator('Boyna'), 'Boy', "'y' is not a vowel");
    assert.strictEqual(nicknameGenerator('Kiyna'), 'Kiy', "'y' is not a vowel");
    assert.strictEqual(nicknameGenerator('Sayma'), 'Say', "'y' is not a vowel");
  });

  it('Incorrect Names (Too Short)', function () {
    assert.strictEqual(nicknameGenerator('Ni'), 'Error: Name too short');
    assert.strictEqual(nicknameGenerator('Jam'), 'Error: Name too short');
    assert.strictEqual(nicknameGenerator('Suv'), 'Error: Name too short');
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
    it(`Input: '${dupString}'`, () => {
      assert.strictEqual(actual, expected);
    });
  }
});
