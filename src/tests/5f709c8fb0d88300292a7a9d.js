const { assert } = require('chai');
const { describe, it } = require('mocha');
const functionsToTest = require('./functionsToTest');

const killer = functionsToTest['5f709c8fb0d88300292a7a9d'];

function nameMaker() {
  let s = '';
  let len = Math.floor(Math.random() * 10) + 3;
  for (let i = 0; i < len; i++) {
    s += 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'[
      Math.floor(Math.random() * 52)
    ];
  }
  return s;
}

function infoMaker() {
  let amountOfSuspects = Math.floor(Math.random() * 50) + 1;
  let innocent = {};
  let arr;
  let randRange;
  for (let suspect = 0; suspect < amountOfSuspects; suspect++) {
    arr = [];
    randRange = Math.floor(Math.random() * 100) + 1;
    for (let name = 0; name < randRange; name++) {
      arr.push(nameMaker());
    }
    innocent[nameMaker()] = arr;
  }
  let murderer = nameMaker();
  let killed = [];
  for (let loop = 1; loop < 25; loop++) {
    killed.push(nameMaker());
  }
  let eS = [];
  for (let loop = 0; loop < 10; loop++) {
    eS.push(nameMaker());
  }
  innocent[murderer] = [...new Set([...killed, ...eS])];
  return [innocent, killed, murderer];
}

describe('Fixed tests', function () {
  it('The killer is James!', function () {
    assert.deepEqual(
      killer(
        {
          James: ['Jacob', 'Bill', 'Lucas'],
          Johnny: ['David', 'Kyle', 'Lucas'],
          Peter: ['Lucy', 'Kyle'],
        },
        ['Lucas', 'Bill']
      ),
      'James'
    );
  });

  it('The killer is Megan!', function () {
    assert.deepEqual(
      killer({ Brad: [], Megan: ['Ben', 'Kevin'], Finn: [] }, ['Ben']),
      'Megan'
    );
  });
});

describe('Random tests', function () {
  for (let i = 0; i < 100; i++) {
    let inps = infoMaker();
    let suspects = inps[0];
    let killed = inps[1];
    let murderer = inps[2];
    it('The killer is ' + murderer + '!', function () {
      assert.deepEqual(killer(suspects, killed), murderer);
    });
  }
});
