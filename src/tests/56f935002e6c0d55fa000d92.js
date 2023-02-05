const { assert } = require('chai');
const { describe, it } = require('mocha');
const functionsToTest = require('./functionsToTest');

const animalsAndInheritance = functionsToTest['56f935002e6c0d55fa000d92'];

//! в этой задаче тестируются три класса Shark, Cat, Dog, которые наследуются от класса Animal

describe('The Animal class', () => {
  it('should still function as expected (anti-cheat test)', () => {
    let chicken = new Animal('Bob', 1, 2, 'chicken', 'alive');
    Test.assertEquals(chicken.name, 'Bob');
    Test.assertEquals(chicken.age, 1);
    Test.assertEquals(chicken.legs, 2);
    Test.assertEquals(chicken.species, 'chicken');
    Test.assertEquals(chicken.status, 'alive');
    Test.assertEquals(
      chicken.introduce(),
      `Hello, my name is Bob and I am 1 years old.`
    );
    let dino = new Animal('Barney', 5, 2, 'dinosaur', 'Alive and Happy');
    Test.assertEquals(dino.name, 'Barney');
    Test.assertEquals(dino.age, 5);
    Test.assertEquals(dino.legs, 2);
    Test.assertEquals(dino.species, 'dinosaur');
    Test.assertEquals(dino.status, 'Alive and Happy');
    Test.assertEquals(
      dino.introduce(),
      `Hello, my name is Barney and I am 5 years old.`
    );
  });
});

describe('The Shark class', () => {
  it('should construct an object properly', () => {
    let billy = new Shark('Billy', 3, 'Alive and well');
    Test.assertEquals(billy.name, 'Billy');
    Test.assertEquals(billy.age, 3);
    Test.assertEquals(billy.legs, 0);
    Test.assertEquals(billy.species, 'shark');
    Test.assertEquals(billy.status, 'Alive and well');
    Test.assertEquals(
      billy.introduce(),
      `Hello, my name is Billy and I am 3 years old.`
    );
    let charles = new Shark('Charles', 8, 'Finding a mate');
    Test.assertEquals(charles.name, 'Charles');
    Test.assertEquals(charles.age, 8);
    Test.assertEquals(charles.legs, 0);
    Test.assertEquals(charles.species, 'shark');
    Test.assertEquals(charles.status, 'Finding a mate');
    Test.assertEquals(
      charles.introduce(),
      `Hello, my name is Charles and I am 8 years old.`
    );
  });
  it('should work for random tests as well', () => {
    class Solution extends Animal {
      constructor(name, age, status) {
        super(name, age, 0, 'shark', status);
      }
    }
    let a, b, c;
    for (let i = 0; i < 10; i++) {
      a = Test.randomToken();
      b = Test.randomNumber();
      c = Test.randomToken();
      Test.assertEquals(new Shark(a, b, c).name, a);
      Test.assertEquals(new Shark(a, b, c).age, b);
      Test.assertEquals(new Shark(a, b, c).legs, 0);
      Test.assertEquals(new Shark(a, b, c).species, 'shark');
      Test.assertEquals(new Shark(a, b, c).status, c);
      Test.assertEquals(
        new Shark(a, b, c).introduce(),
        new Solution(a, b, c).introduce()
      );
    }
  });
});

describe('The Cat class', () => {
  it('should construct an object properly', () => {
    let cathy = new Cat('Cathy', 7, 'Playing with a ball of yarn');
    Test.assertEquals(cathy.name, 'Cathy');
    Test.assertEquals(cathy.age, 7);
    Test.assertEquals(cathy.legs, 4);
    Test.assertEquals(cathy.species, 'cat');
    Test.assertEquals(cathy.status, 'Playing with a ball of yarn');
    Test.assertEquals(
      cathy.introduce(),
      'Hello, my name is Cathy and I am 7 years old.  Meow meow!'
    );
    let spitsy = new Cat('Spitsy', 6, 'sleeping');
    Test.assertEquals(spitsy.name, 'Spitsy');
    Test.assertEquals(spitsy.age, 6);
    Test.assertEquals(spitsy.legs, 4);
    Test.assertEquals(spitsy.species, 'cat');
    Test.assertEquals(spitsy.status, 'sleeping');
    Test.assertEquals(
      spitsy.introduce(),
      'Hello, my name is Spitsy and I am 6 years old.  Meow meow!'
    );
  });
  it('should work for random tests as well', () => {
    class Solution extends Animal {
      constructor(name, age, status) {
        super(name, age, 4, 'cat', status);
      }
      introduce() {
        return super.introduce() + '  Meow meow!';
      }
    }
    let a, b, c;
    for (let i = 0; i < 10; i++) {
      a = Test.randomToken();
      b = Test.randomNumber();
      c = Test.randomToken();
      Test.assertEquals(new Cat(a, b, c).name, a);
      Test.assertEquals(new Cat(a, b, c).age, b);
      Test.assertEquals(new Cat(a, b, c).legs, 4);
      Test.assertEquals(new Cat(a, b, c).species, 'cat');
      Test.assertEquals(new Cat(a, b, c).status, c);
      Test.assertEquals(
        new Cat(a, b, c).introduce(),
        new Solution(a, b, c).introduce()
      );
    }
  });
});

describe('The Dog class', () => {
  it('should construct an object properly', () => {
    let doug = new Dog('Doug', 12, 'Serving his master', 'Eliza');
    Test.assertEquals(doug.name, 'Doug');
    Test.assertEquals(doug.age, 12);
    Test.assertEquals(doug.legs, 4);
    Test.assertEquals(doug.species, 'dog');
    Test.assertEquals(doug.status, 'Serving his master');
    Test.assertEquals(
      doug.introduce(),
      'Hello, my name is Doug and I am 12 years old.'
    );
    Test.assertEquals(doug.greetMaster(), 'Hello Eliza');
  });
  it('should work for random tests as well', () => {
    class Solution extends Animal {
      constructor(name, age, status, master) {
        super(name, age, 4, 'dog', status);
        this.master = master;
      }
      greetMaster() {
        return `Hello ${this.master}`;
      }
    }
    let a, b, c, d, dog, solution;
    for (let i = 0; i < 6; i++) {
      a = Test.randomToken();
      b = Test.randomNumber();
      c = Test.randomToken();
      d = Test.randomToken();
      dog = new Dog(a, b, c, d);
      solution = new Solution(a, b, c, d);
      Test.assertEquals(dog.name, solution.name);
      Test.assertEquals(dog.age, solution.age);
      Test.assertEquals(dog.legs, solution.legs);
      Test.assertEquals(dog.species, solution.species);
      Test.assertEquals(dog.status, solution.status);
      Test.assertEquals(dog.introduce(), solution.introduce());
      Test.assertEquals(dog.greetMaster(), solution.greetMaster());
    }
  });
});
