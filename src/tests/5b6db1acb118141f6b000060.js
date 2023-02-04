const { assert } = require('chai');
const { describe, it } = require('mocha');
const functionsToTest = require('./functionsToTest');

const recycle = functionsToTest['5b6db1acb118141f6b000060'];
describe('Fixed tests', function () {
  it('Tests', function () {
    let a = [
      { type: 'rotten apples', material: 'organic' },
      {
        type: 'out of date yogurt',
        material: 'organic',
        secondMaterial: 'plastic',
      },
      { type: 'wine bottle', material: 'glass', secondMaterial: 'paper' },
      { type: 'amazon box', material: 'paper' },
      { type: 'beer bottle', material: 'glass', secondMaterial: 'paper' },
    ];
    let b = [
      ['wine bottle', 'amazon box', 'beer bottle'],
      ['wine bottle', 'beer bottle'],
      ['rotten apples', 'out of date yogurt'],
      ['out of date yogurt'],
    ];
    assert.deepEqual(recycle(a), b);
  });
});

function solution(array) {
  let bins = [[], [], [], []];
  for (let i = 0; i < array.length; i++) {
    if (array[i].material === 'paper') {
      if (Object.keys(array[i]).length === 2) {
        bins[0].push(array[i].type);
      } else {
        switch (array[i].secondMaterial) {
          case 'glass':
            bins[0].push(array[i].type);
            bins[1].push(array[i].type);
            break;
          case 'organic':
            bins[0].push(array[i].type);
            bins[2].push(array[i].type);
            break;
          case 'plastic':
            bins[0].push(array[i].type);
            bins[3].push(array[i].type);
            break;
        }
      }
    } else if (array[i].material === 'glass') {
      if (Object.keys(array[i]).length === 2) {
        bins[1].push(array[i].type);
      } else {
        switch (array[i].secondMaterial) {
          case 'paper':
            bins[1].push(array[i].type);
            bins[0].push(array[i].type);
            break;
          case 'organic':
            bins[1].push(array[i].type);
            bins[2].push(array[i].type);
            break;
          case 'plastic':
            bins[1].push(array[i].type);
            bins[3].push(array[i].type);
            break;
        }
      }
    } else if (array[i].material === 'organic') {
      if (Object.keys(array[i]).length === 2) {
        bins[2].push(array[i].type);
      } else {
        switch (array[i].secondMaterial) {
          case 'paper':
            bins[2].push(array[i].type);
            bins[0].push(array[i].type);
            break;
          case 'glass':
            bins[2].push(array[i].type);
            bins[1].push(array[i].type);
            break;
          case 'plastic':
            bins[2].push(array[i].type);
            bins[3].push(array[i].type);
            break;
        }
      }
    } else if (array[i].material === 'plastic') {
      if (Object.keys(array[i]).length === 2) {
        bins[3].push(array[i].type);
      } else {
        switch (array[i].secondMaterial) {
          case 'paper':
            bins[3].push(array[i].type);
            bins[0].push(array[i].type);
            break;
          case 'glass':
            bins[3].push(array[i].type);
            bins[1].push(array[i].type);
            break;
          case 'organic':
            bins[3].push(array[i].type);
            bins[2].push(array[i].type);
            break;
        }
      }
    }
  }
  return bins;
}

const { random, sample, sampleSize } = require('lodash');

describe('Random tests', function () {
  it('Tests', function () {
    const materials = ['paper', 'glass', 'organic', 'plastic'];
    const types = [
      'blue bottle',
      'rotten pear',
      'rotten bananas',
      'food',
      'pasta',
      'amazon box',
      'broken record',
      'newspaper',
      'usb cable',
      'printer box',
      'iphone box',
      'statue',
      'glass',
      'grapes',
      'table',
      'jar',
      'toy',
      'bucket',
      'mask',
      'chair',
      'sunglasses',
      'shoes',
      'sword',
      'knife',
      'fork',
      'beef',
      'chicken',
      'salmon',
    ];

    for (let i = 0; i < 100; i++) {
      let array = [];
      for (let x of sampleSize(types, random(1, 20))) {
        let obj = { type: x, material: sample(materials) };
        if (random(0, 1)) {
          let s;
          do {
            s = sample(materials);
          } while (s === obj.material);
          obj.secondMaterial = s;
        }
        array.push(obj);
      }
      let expected = solution(array);
      assert.deepEqual(recycle(array), expected);
    }
  });
});
