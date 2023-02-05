const { assert } = require('chai');
const { describe, it } = require('mocha');
const functionsToTest = require('./functionsToTest');

const fakeFilesBasic = functionsToTest['5784c8116211383b5f0001d3'];

//! тестируется класс File

describe('The "File" class', function () {
  it('should work for the example provided by the Kata author', function () {
    let example = new File('example.txt', 'An example file');
    Test.assertEquals(example.fullName, 'example.txt');
    Test.assertEquals(example.filename, 'example');
    Test.assertEquals(example.extension, 'txt');
    example.fullName = 'modified.txt';
    Test.assertNotEquals(example.fullName, 'modified.txt');
    Test.assertEquals(example.fullName, 'example.txt');
    example.filename = 'hacked';
    Test.assertNotEquals(example.filename, 'hacked');
    Test.assertEquals(example.filename, 'example');
    example.extension = 'locky';
    Test.assertNotEquals(example.extension, 'locky');
    Test.assertEquals(example.extension, 'txt');
    Test.assertEquals(example.getContents(), 'An example file');
    example.write('Hello World');
    Test.assertEquals(example.getContents(), 'An example file\nHello World');
    example.write('This is an example file provided to you by the Kata author');
    Test.assertEquals(
      example.getContents(),
      'An example file\nHello World\nThis is an example file provided to you by the Kata author'
    );
    example.write('This example file is used as an example test case.');
    Test.assertEquals(
      example.getContents(),
      'An example file\nHello World\nThis is an example file provided to you by the Kata author\nThis example file is used as an example test case.'
    );
    Test.assertEquals(example.gets(), 'An example file');
    Test.assertEquals(example.gets(), 'Hello World');
    Test.assertEquals(
      example.gets(),
      'This is an example file provided to you by the Kata author'
    );
    Test.assertEquals(
      example.gets(),
      'This example file is used as an example test case.'
    );
    Test.assertEquals(example.gets(), undefined);
    Test.assertEquals(example.gets(), undefined);
    Test.assertEquals(example.gets(), undefined);
    Test.assertEquals(example.getc(), 'A');
    Test.assertEquals(example.getc(), 'n');
    Test.assertEquals(example.getc(), ' ');
    Test.assertEquals(example.getc(), 'e');
    Test.assertEquals(example.getc(), 'x');
    Test.assertEquals(example.getc(), 'a');
    Test.assertEquals(example.getc(), 'm');
    Test.assertEquals(example.getc(), 'p');
    Test.assertEquals(example.getc(), 'l');
    Test.assertEquals(example.getc(), 'e');
    for (let i = 0; i < 1000; i++) {
      example.getc();
    }
    Test.assertEquals(example.getc(), undefined);
    Test.assertEquals(example.getc(), undefined);
    Test.assertEquals(example.getc(), undefined);
  });
  let file1 = new File('hello_world.txt', 'Hello World');
  let file2 = new File(
    'File with multiple lines.txt',
    'Line 1\nLine 2\nLine 3'
  );
  let file3 = new File(
    'class.phptester.php',
    '<?php /* Some PHP code here */ ?>'
  );
  let file4 = new File(
    'alpha beta.gamma_Delta01.md',
    'alpha\nbeta\ngamma\ndelta'
  );
  let file5 = new File('empty_file.txt', '');
  it('should initialize the "fullName" property properly (which should be read-only)', function () {
    Test.assertEquals(file1.fullName, 'hello_world.txt');
    Test.assertEquals(file2.fullName, 'File with multiple lines.txt');
    Test.assertEquals(file3.fullName, 'class.phptester.php');
    Test.assertEquals(file4.fullName, 'alpha beta.gamma_Delta01.md');
    Test.assertEquals(file5.fullName, 'empty_file.txt');
    file1.fullName = 'goodbye_world.txt';
    file2.fullName = 'Hacked File.txt';
    file3.fullName = 'class.hacked.php';
    file4.fullName = 'delta Psi.beta01.md';
    file5.fullName = 'full_file.txt';
    Test.assertNotEquals(file1.fullName, 'goodbye_world.txt');
    Test.assertNotEquals(file2.fullName, 'Hacked File.txt');
    Test.assertNotEquals(file3.fullName, 'class.hacked.php');
    Test.assertNotEquals(file4.fullName, 'delta Psi.beta01.md');
    Test.assertNotEquals(file5.fullName, 'full_file.txt');
    Test.assertEquals(file1.fullName, 'hello_world.txt');
    Test.assertEquals(file2.fullName, 'File with multiple lines.txt');
    Test.assertEquals(file3.fullName, 'class.phptester.php');
    Test.assertEquals(file4.fullName, 'alpha beta.gamma_Delta01.md');
    Test.assertEquals(file5.fullName, 'empty_file.txt');
  });
  it('should initialize the "filename" property properly (which should be read-only)', function () {
    Test.assertEquals(file1.filename, 'hello_world');
    Test.assertEquals(file2.filename, 'File with multiple lines');
    Test.assertEquals(file3.filename, 'class.phptester');
    Test.assertEquals(file4.filename, 'alpha beta.gamma_Delta01');
    Test.assertEquals(file5.filename, 'empty_file');
    file1.filename = 'goodbye_world';
    file2.filename = 'Hacked file with no lines';
    file3.filename = 'class.completelyhacked';
    file4.filename = 'DELTA PSI';
    file5.filename = 'full file';
    Test.assertNotEquals(file1.filename, 'goodbye_world');
    Test.assertNotEquals(file2.filename, 'Hacked file with no lines');
    Test.assertNotEquals(file3.filename, 'class.completelyhacked');
    Test.assertNotEquals(file4.filename, 'DELTA PSI');
    Test.assertNotEquals(file5.filename, 'full file');
    Test.assertEquals(file1.filename, 'hello_world');
    Test.assertEquals(file2.filename, 'File with multiple lines');
    Test.assertEquals(file3.filename, 'class.phptester');
    Test.assertEquals(file4.filename, 'alpha beta.gamma_Delta01');
    Test.assertEquals(file5.filename, 'empty_file');
  });
  it('should correctly identify the file extension from the full filename (which should be read-only)', function () {
    Test.assertEquals(file1.extension, 'txt');
    Test.assertEquals(file2.extension, 'txt');
    Test.assertEquals(file3.extension, 'php');
    Test.assertEquals(file4.extension, 'md');
    Test.assertEquals(file5.extension, 'txt');
    file1.extension = 'html';
    file2.extension = 'htm';
    file3.extension = 'js';
    file4.extension = 'rb';
    file5.extension = 'py';
    Test.assertNotEquals(file1.extension, 'html');
    Test.assertNotEquals(file2.extension, 'htm');
    Test.assertNotEquals(file3.extension, 'js');
    Test.assertNotEquals(file4.extension, 'rb');
    Test.assertNotEquals(file5.extension, 'py');
    Test.assertEquals(file1.extension, 'txt');
    Test.assertEquals(file2.extension, 'txt');
    Test.assertEquals(file3.extension, 'php');
    Test.assertEquals(file4.extension, 'md');
    Test.assertEquals(file5.extension, 'txt');
  });
  it('should have a working "write" and "getContents" method', function () {
    Test.assertEquals(file1.getContents(), 'Hello World');
    Test.assertEquals(file2.getContents(), 'Line 1\nLine 2\nLine 3');
    Test.assertEquals(file3.getContents(), '<?php /* Some PHP code here */ ?>');
    Test.assertEquals(file4.getContents(), 'alpha\nbeta\ngamma\ndelta');
    Test.assertEquals(file5.getContents(), '');
    file1.write('Goodbye World');
    file2.write('Line 4');
    file2.write('Line 5');
    file2.write('Line 6');
    file4.write('pi');
    file5.write('Line 1');
    file5.write('Line 2');
    file5.write('Line 3');
    Test.assertEquals(file1.getContents(), 'Hello World\nGoodbye World');
    Test.assertEquals(
      file2.getContents(),
      'Line 1\nLine 2\nLine 3\nLine 4\nLine 5\nLine 6'
    );
    Test.assertEquals(file3.getContents(), '<?php /* Some PHP code here */ ?>');
    Test.assertEquals(file4.getContents(), 'alpha\nbeta\ngamma\ndelta\npi');
    Test.assertEquals(file5.getContents(), 'Line 1\nLine 2\nLine 3');
  });
  it('should have a working "gets" and "getc" method', function () {
    Test.assertEquals(file1.gets(), 'Hello World');
    Test.assertEquals(file1.gets(), 'Goodbye World');
    Test.assertEquals(file1.gets(), undefined);
    Test.assertEquals(file2.gets(), 'Line 1');
    Test.assertEquals(file2.gets(), 'Line 2');
    Test.assertEquals(file2.gets(), 'Line 3');
    Test.assertEquals(file2.gets(), 'Line 4');
    Test.assertEquals(file2.gets(), 'Line 5');
    Test.assertEquals(file2.gets(), 'Line 6');
    Test.assertEquals(file2.gets(), undefined);
    Test.assertEquals(file3.gets(), '<?php /* Some PHP code here */ ?>');
    Test.assertEquals(file3.gets(), undefined);
    Test.assertEquals(file4.gets(), 'alpha');
    Test.assertEquals(file4.gets(), 'beta');
    Test.assertEquals(file4.gets(), 'gamma');
    Test.assertEquals(file4.gets(), 'delta');
    Test.assertEquals(file4.gets(), 'pi');
    Test.assertEquals(file4.gets(), undefined);
    Test.assertEquals(file5.gets(), 'Line 1');
    Test.assertEquals(file5.gets(), 'Line 2');
    Test.assertEquals(file5.gets(), 'Line 3');
    Test.assertEquals(file5.gets(), undefined);
    Test.assertEquals(file1.getc(), 'H');
    Test.assertEquals(file1.getc(), 'e');
    Test.assertEquals(file1.getc(), 'l');
    Test.assertEquals(file1.getc(), 'l');
    Test.assertEquals(file1.getc(), 'o');
    Test.assertEquals(file1.getc(), ' ');
    Test.assertEquals(file1.getc(), 'W');
    Test.assertEquals(file1.getc(), 'o');
    Test.assertEquals(file1.getc(), 'r');
    Test.assertEquals(file1.getc(), 'l');
    Test.assertEquals(file1.getc(), 'd');
    Test.assertEquals(file1.getc(), '\n');
    Test.assertEquals(file1.getc(), 'G');
    Test.assertEquals(file1.getc(), 'o');
    Test.assertEquals(file1.getc(), 'o');
    Test.assertEquals(file1.getc(), 'd');
    Test.assertEquals(file1.getc(), 'b');
    Test.assertEquals(file1.getc(), 'y');
    Test.assertEquals(file1.getc(), 'e');
    Test.assertEquals(file1.getc(), ' ');
    Test.assertEquals(file1.getc(), 'W');
    Test.assertEquals(file1.getc(), 'o');
    Test.assertEquals(file1.getc(), 'r');
    Test.assertEquals(file1.getc(), 'l');
    Test.assertEquals(file1.getc(), 'd');
    Test.assertEquals(file1.getc(), undefined);
  });
  it('should work for a test involving random input', function () {
    const randomToken = () =>
      Math.random().toString(36).substring(2, 15) +
      Math.random().toString(36).substring(2, 15);
    let filename = `${randomToken()}.${randomToken()}.${randomToken()}`;
    let extension = randomToken();
    const l1 = randomToken(),
      l2 = randomToken(),
      l3 = randomToken(),
      l4 = randomToken(),
      l5 = randomToken(),
      l6 = randomToken(),
      l7 = randomToken(),
      l8 = randomToken(),
      l9 = randomToken(),
      l10 = randomToken();
    let content = [l1, l2, l3, l4, l5, l6, l7, l8, l9, l10].join('\n');
    let file = new File(`${filename}.${extension}`, content);
    Test.assertEquals(file.fullName, `${filename}.${extension}`);
    Test.assertEquals(file.filename, filename);
    Test.assertEquals(file.extension, extension);
    let fullNameHacked = `${randomToken()}.${randomToken()}`;
    Test.assertNotEquals(file.fullName, fullNameHacked);
    Test.assertEquals(file.fullName, `${filename}.${extension}`);
    let filenameHacked = randomToken(),
      extensionHacked = randomToken();
    Test.assertNotEquals(file.filename, filenameHacked);
    Test.assertNotEquals(file.extension, extensionHacked);
    Test.assertEquals(file.filename, filename);
    Test.assertEquals(file.extension, extension);
    Test.assertEquals(file.getContents(), content);
    let l11 = randomToken(),
      l12 = randomToken(),
      l13 = randomToken();
    file.write(l11);
    file.write(l12);
    file.write(l13);
    Test.assertEquals(file.getContents(), `${content}\n${l11}\n${l12}\n${l13}`);
    Test.assertEquals(file.gets(), l1);
    Test.assertEquals(file.gets(), l2);
    Test.assertEquals(file.gets(), l3);
    Test.assertEquals(file.gets(), l4);
    Test.assertEquals(file.gets(), l5);
    Test.assertEquals(file.gets(), l6);
    Test.assertEquals(file.gets(), l7);
    Test.assertEquals(file.gets(), l8);
    Test.assertEquals(file.gets(), l9);
    Test.assertEquals(file.gets(), l10);
    Test.assertEquals(file.gets(), l11);
    Test.assertEquals(file.gets(), l12);
    Test.assertEquals(file.gets(), l13);
    Test.assertEquals(file.gets(), undefined);
    Test.assertEquals(file.getc(), l1[0]);
    Test.assertEquals(file.getc(), l1[1]);
    Test.assertEquals(file.getc(), l1[2]);
    Test.assertEquals(file.getc(), l1[3]);
    Test.assertEquals(file.getc(), l1[4]);
    Test.assertEquals(file.getc(), l1[5]);
    Test.assertEquals(file.getc(), l1[6]);
    Test.assertEquals(file.getc(), l1[7]);
    Test.assertEquals(file.getc(), l1[8]);
    Test.assertEquals(file.getc(), l1[9]);
    Test.assertEquals(file.getc(), l1[10]);
    for (let i = 0; i < 1000; i++) {
      file.getc();
    }
    Test.assertEquals(file.getc(), undefined);
  });
});
