const path = require('path');
const fs = require('fs');
const { readdir } = require('fs/promises');
const { Challenges } = require('../models/models');

const TESTS_DIR = path.join(__dirname, '../tests');

async function createTestsFiles() {
  const existingFiles = await readdir(TESTS_DIR, { withFileTypes: true });
  const challenges = await Challenges.findAll({ limit: 20, offset: 20 });
  const existingTests = existingFiles
    .map((el) => el.name.replace('.js', ''))
    .filter((file) => file.match(/\d+/));
  const katasByID = {};

  challenges.forEach((el) => {
    if (!existingTests.includes(el.id)) katasByID[el.id] = el.name;
  });

  console.log(katasByID);

  const idsArray = Object.keys(katasByID);
  idsArray.forEach((id) => {
    // console.log(katasByID[id], toCamelCase(katasByID[id]));
    const content = newTest(id, toCamelCase(katasByID[id]));
    writeTestFile(id, content);
  });
}

function writeTestFile(id, content) {
  const writeStream = fs.createWriteStream(path.join(TESTS_DIR, `${id}.js`));
  writeStream.write(content);
}

function toCamelCase(str) {
  const newStr = str
    .split(' ')
    .map((el) => el[0].toUpperCase() + el.slice(1))
    .join('')
    .replaceAll(/[^a-z\d]/gi, '');
  return newStr[0].toLowerCase() + newStr.slice(1);
}

function newTest(id, name) {
  return `const { assert } = require('chai');
const { describe, it } = require('mocha');
const functionsToTest = require('./functionsToTest');

const ${name} = functionsToTest['${id}'];

describe('', () => {
  it('', () => {
    assert.strictEqual(${name}(), '');
  });
  it('', () => {
    assert.strictEqual(${name}(), '');
  });
  it('', () => {
    assert.strictEqual(${name}(), '');
  });
  it('', () => {
    assert.strictEqual(${name}(), '');
  });
  it('', () => {
    assert.strictEqual(${name}(), '');
  });
});
`;
}

module.exports = {
  createTestsFiles,
};
