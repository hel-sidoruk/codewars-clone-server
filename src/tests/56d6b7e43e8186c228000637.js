const { assert } = require('chai');
const { describe, it } = require('mocha');
const functionsToTest = require('./functionsToTest');

const colourAssociation = functionsToTest['56d6b7e43e8186c228000637'];

describe('Fixed tests', () => {
  it('Should pass basic tests', () => {
    assert.deepEqual(
      colourAssociation([
        ['white', 'goodness'],
        ['blue', 'tranquility'],
      ]),
      [{ white: 'goodness' }, { blue: 'tranquility' }]
    );
    assert.deepEqual(
      colourAssociation([
        ['red', 'energy'],
        ['yellow', 'creativity'],
        ['brown', 'friendly'],
        ['green', 'growth'],
      ]),
      [
        { red: 'energy' },
        { yellow: 'creativity' },
        { brown: 'friendly' },
        { green: 'growth' },
      ]
    );
    assert.deepEqual(
      colourAssociation([
        ['pink', 'compassion'],
        ['purple', 'ambition'],
      ]),
      [{ pink: 'compassion' }, { purple: 'ambition' }]
    );
    assert.deepEqual(
      colourAssociation([
        ['gray', 'intelligence'],
        ['black', 'classy'],
      ]),
      [{ gray: 'intelligence' }, { black: 'classy' }]
    );
    //Test.assertNotSimilar(colourAssociation([["white", "goodness"], ["blue", "tranquility"]]), [{ 'white,goodness': [ 'white', 'goodness' ] }, { 'blue,tranquility': [ 'blue', 'tranquility' ] }])
  });
});

describe('Random tests', function () {
  let randint = (a, b) => Math.floor(Math.random() * (b - a + 1) + a);
  function sol(array) {
    let newArray = array.map(function (colour) {
      let newObj = {};
      newObj[colour[0]] = colour[1];
      return newObj;
    });
    return newArray;
  }
  let colours = [
    'green',
    'yellow',
    'orange',
    'pink',
    'red',
    'blue',
    'white',
    'black',
  ];
  let states = [
    'humerous',
    'angry',
    'lazy',
    'sensitive',
    'mystical',
    'flexible',
    'dramatic',
  ];

  for (let i = 0; i < 10; i++) {
    let arr = [],
      len = randint(1, 10);
    for (let j = 0; j < len; j++) {
      arr.push([
        colours[randint(0, colours.length - 1)],
        states[randint(0, states.length - 1)],
      ]);
    }
    it(`Testing for [${arr.map((a) => `[${a}]`)}]`, function () {
      let expected = sol(arr);
      assert.deepEqual(
        colourAssociation(arr),
        expected,
        'It should work for random tests too'
      );
    });
  }
});
