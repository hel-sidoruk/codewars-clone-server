const { describe, it } = require('mocha');
const functionsToTest = require('./functionsToTest');
const Test = require('@codewars/test-compat');

const Cube = functionsToTest['56fcc1ee45040039ab0016da'];

describe('class Cube', () => {
  it('should initialize properly and have working getters and setters', () => {
    let cube = new Cube(1);
    Test.assertEquals(cube.length, 1);
    Test.assertEquals(cube.surfaceArea, 6);
    Test.assertEquals(cube.volume, 1);
    cube.length = 2;
    Test.assertEquals(cube.surfaceArea, 24);
    Test.assertEquals(cube.volume, 8);
    cube.surfaceArea = 54;
    Test.assertEquals(cube.length, 3);
    Test.assertEquals(cube.volume, 27);
    cube.surfaceArea = 96;
    Test.assertEquals(cube.length, 4);
    Test.assertEquals(cube.volume, 64);
    cube.volume = 125;
    Test.assertEquals(Math.roundTo(cube.length, 5), 5);
    Test.assertEquals(Math.roundTo(cube.surfaceArea, 5), 150);
    cube.volume = 1000;
    Test.assertEquals(Math.roundTo(cube.length, 5), 10);
    Test.assertEquals(Math.roundTo(cube.surfaceArea, 5), 600);
  });
  it('should work for random tests', () => {
    let length, cube;
    for (let i = 0; i < 10; i++) {
      length = Test.randomNumber();
      cube = new Cube(length);
      Test.assertEquals(cube.length, length);
      Test.assertEquals(cube.surfaceArea, 6 * length ** 2);
      Test.assertEquals(cube.volume, length ** 3);
      length = Test.randomNumber();
      cube.surfaceArea = 6 * length ** 2;
      Test.assertEquals(Math.roundTo(cube.length, 5), length);
      Test.assertEquals(Math.roundTo(cube.volume, 5), length ** 3);
      length = Test.randomNumber();
      cube.volume = length ** 3;
      Test.assertEquals(Math.roundTo(cube.length, 5), length);
      Test.assertEquals(Math.roundTo(cube.surfaceArea, 5), 6 * length ** 2);
    }
  });
});
