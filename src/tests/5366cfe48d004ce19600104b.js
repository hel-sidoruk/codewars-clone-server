const { assert } = require('chai');
const { describe, it } = require('mocha');
const functionsToTest = require('./functionsToTest');

const implementingObjectcreate = functionsToTest['5366cfe48d004ce19600104b'];

describe('Testing you solution', function () {
  let citizen = {
    sleep: function () {
      return 'zzZ...';
    },
    panic: function () {
      return 'AaAaAaAa!';
    },
  };

  const obj = gashjrep494mgm43gigdgjl4g5hh63;

  function typeOf(o) {
    return Object.prototype.toString.call(o).slice(8, -1).toLowerCase();
  }

  it('Testing `Object`', function () {
    assert(
      typeof Object !== 'undefined' && Object === obj.Object,
      'Problem with `Object` object'
    );
  });

  it('Testing `Object.create`', function () {
    assert(
      typeOf(Object.create) === 'function',
      'Object.create must be a function'
    );

    let throwed = false,
      o,
      o2;
    try {
      o = Object.create();
    } catch (e) {
      if (e instanceof TypeError) throwed = true;
    }

    assert(
      throwed,
      'Object.create() - i.e. with no arguments - must throw TypeError'
    );

    throwed = false;
    try {
      o = Object.create(null);
      o2 = Object.create(null);
    } catch (e) {
      throwed = true;
    }

    assert(!throwed, 'Object.create(null) must not throw error');
    if (!throwed) {
      assert(
        typeOf(o) === 'object' && typeOf(o2) === 'object' && o !== o2,
        'Object.create(null) must create a new object'
      );
      assert(
        o.__proto__ === null || o.__proto__ === undefined,
        'Object.create(null) must set inner prototype field (and __proto__) of returned object to null'
      );

      throwed = false;
      try {
        o = Object.create(citizen);
      } catch (e) {
        throwed = true;
      }

      assert(
        !throwed && typeOf(o) === 'object' && citizen.isPrototypeOf(o),
        'Object.create(proto) must return object, that inherits proto prototype'
      );

      throwed = false;
      try {
        o = Object.create(null, null);
        o = Object.create(citizen, null);
      } catch (e) {
        throwed = true;
      }

      assert(
        throwed,
        'Object.create(proto, properties) must not catch exception thrown by inner call to Object.definedProperties()'
      );

      throwed = false;
      try {
        o = Object.create(null, undefined);
        o = Object.create(citizen, undefined);
      } catch (e) {
        throwed = true;
      }

      assert(
        !throwed,
        'Object.create(proto, properties) must not call Object.definedProperties() if properties is undefined'
      );

      throwed = false;
      try {
        o = Object.create(citizen, {
          order: {
            value: function () {
              return 'Fire at will!';
            },
          },
        });
      } catch (e) {
        throwed = true;
      }

      assert(
        !throwed &&
          typeOf(o) === 'object' &&
          citizen.isPrototypeOf(o) &&
          o.hasOwnProperty('order') &&
          o.order() === 'Fire at will!',
        'Object.create(proto, properties) must define properties from second argument at object returned with use of Object.defineProperties()'
      );
    }
  }); //end of it
}); //end of describe
