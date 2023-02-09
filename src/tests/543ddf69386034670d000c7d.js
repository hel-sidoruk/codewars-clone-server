const { describe, it } = require('mocha');
const functionsToTest = require('./functionsToTest');
const approximately = require('chai').assert.approximately;

const handAngle = functionsToTest['543ddf69386034670d000c7d'];

const DELTA = 1e-4;

function makeDate(hours, minutes) {
  const date = new Date();
  date.setMinutes(minutes);
  date.setHours(hours);
  return date;
}

function doTest(date, expected) {
  const log = `for date: ${date}\n`;
  const actual = handAngle(date);
  approximately(actual, expected, DELTA, log);
}

describe('Fixed tests', () => {
  it('sample tests', () => {
    doTest(makeDate(0, 0), 0.0);
    doTest(makeDate(12, 0), 0.0);
    doTest(makeDate(6, 0), 3.141592653589793);
    doTest(makeDate(1, 0), 0.5235987755982988);
    doTest(makeDate(9, 0), 1.5707963267948966);
    doTest(makeDate(10, 0), 1.0471975511965976);
    doTest(makeDate(0, 15), 1.4398966328953218);
    doTest(makeDate(0, 45), 1.9634954084936207);
    doTest(makeDate(12, 30), 2.8797932657906435);
    doTest(makeDate(7, 15), 2.2252947962927703);
    doTest(makeDate(6, 5), 2.6616271092913526);
  });
});

describe('Tests', () => {
  function solution(date) {
    let full = Math.PI * 2,
      minutes = date.getMinutes(),
      partialHour = minutes / 60.0,
      hours = date.getHours() + partialHour,
      diff;

    minutes = (minutes / 60.0) * full;
    hours = ((hours % 12) / 12.0) * full;

    diff = Math.abs(hours - minutes);
    diff = Math.min(diff, full - diff);

    return diff;
  }

  const randInt = (min, max) =>
    Math.floor(Math.random() * (max - min + 1) + min);

  it('random tests', () => {
    const date = makeDate(randInt(1, 12), randInt(0, 59));
    const expected = solution(date);
    doTest(date, expected);
  });
});
