const { describe, it } = require('mocha');
const functionsToTest = require('./functionsToTest');
const Test = require('@codewars/test-compat');

const isSantaClausable = functionsToTest['52b50a20fa0e77b304000103'];

describe('Fixed tests', function () {
  let SantaClaus = (function () {
    function SantaClaus(name) {
      this.name = name;
    }
    SantaClaus.prototype.sayHoHoHo = function () {
      console.log(this.name + ' says: "Ho Ho Ho!"');
    };
    SantaClaus.prototype.distributeGifts = function () {
      console.log(this.name + ' hands out gifts to all the children');
    };
    SantaClaus.prototype.goDownTheChimney = function () {
      console.log('*Whoosh* ' + this.name + ' goes down the chimney.');
    };
    return SantaClaus;
  })();

  let DummySantaClaus = (function () {
    function DummySantaClaus() {}
    DummySantaClaus.prototype.sayHoHoHo = function () {
      throw 'Ho Ho Ho!';
    };
    DummySantaClaus.prototype.distributeGifts = function () {
      throw 'Gifts for all!';
    };
    DummySantaClaus.prototype.goDownTheChimney = function () {
      throw 'Whooosh!';
    };
    DummySantaClaus.prototype.harnessReindeers = function () {};
    return DummySantaClaus;
  })();

  let anotherSanta = {
    sayHoHoHo: function () {},
    distributeGifts: function () {},
    goDownTheChimney: function () {},
    justAnotherMethod: function () {},
  };

  let NotSantaClaus = (function () {
    function NotSantaClaus(name) {
      this.name = name;
    }
    NotSantaClaus.prototype.sayHoHoHo = true;
    NotSantaClaus.prototype.distributeGifts = true;
    NotSantaClaus.prototype.goDownTheChimney = true;
    return NotSantaClaus;
  })();

  let anotherNotSanta = {
    sayhohoho: function () {},
    distributegifts: function () {},
    godownthechimney: function () {},
  };

  it('should implement the SantaClausable interface', function () {
    let santa = new SantaClaus('Santa');
    Test.assertEquals(isSantaClausable(santa), true, 'Instance of SantaClaus');
    Test.assertEquals(
      isSantaClausable(new DummySantaClaus()),
      true,
      'Instance of DummySantaClaus'
    );
    Test.assertEquals(
      isSantaClausable(anotherSanta),
      true,
      'Object like in the description'
    );

    santa.sayHoHoHo();
    santa.goDownTheChimney();
    santa.sayHoHoHo();
    santa.distributeGifts();
    santa.sayHoHoHo();
  });

  it('should not implement the SantaClausable interface', function () {
    Test.assertEquals(
      isSantaClausable(new NotSantaClaus()),
      false,
      'Boolean properties instead of functions'
    );
    Test.assertEquals(
      isSantaClausable('just a string'),
      false,
      'A string does not implement the SantaClausable interface'
    );
    Test.assertEquals(
      isSantaClausable({}),
      false,
      'An empty object does not implement the SantaClausable interface'
    );

    let santa = new SantaClaus('Santa');
    delete SantaClaus.prototype.sayHoHoHo;
    Test.assertEquals(
      isSantaClausable(santa),
      false,
      'The "sayHoHoHo" method was deleted'
    );
    Test.assertEquals(
      isSantaClausable(anotherNotSanta),
      false,
      'Lowercase method names'
    );
  });
});
