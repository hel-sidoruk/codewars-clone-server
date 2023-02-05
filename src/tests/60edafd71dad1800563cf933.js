const { expect } = require('chai');
const { describe, it } = require('mocha');
const functionsToTest = require('./functionsToTest');

const counter = functionsToTest['60edafd71dad1800563cf933'];

describe('counter', () => {
  it('should return a function', () => {
    expect(typeof counter()).to.equal('function');
  });
  it('should return 1 when the returned function is invoked', () => {
    expect(counter()()).to.equal(1);
  });
  it('should increment and return the number each time the function is invoked', () => {
    const counterFunction = counter();
    expect(counterFunction()).to.equal(1);
    expect(counterFunction()).to.equal(2);
    expect(counterFunction()).to.equal(3);
    expect(counterFunction()).to.equal(4);
    expect(counterFunction()).to.equal(5);
  });
  it('should have two diferent acumulators if two counters are created', () => {
    const counterOne = counter();
    const counterTwo = counter();
    expect(counterOne()).to.equal(1);
    expect(counterOne()).to.equal(2);
    expect(counterOne()).to.equal(3);
    expect(counterOne()).to.equal(4);
    expect(counterOne()).to.equal(5);
    expect(counterTwo()).to.equal(1);
    expect(counterTwo()).to.equal(2);
    expect(counterTwo()).to.equal(3);
    expect(counterTwo()).to.equal(4);
    expect(counterTwo()).to.equal(5);
  });
});
