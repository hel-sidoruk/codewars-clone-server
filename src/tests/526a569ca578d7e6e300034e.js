const { assert } = require('chai');
const { describe, it } = require('mocha');
const functionsToTest = require('./functionsToTest');

const convert = functionsToTest['526a569ca578d7e6e300034e'];

let Alphabet = {
  BINARY: '01',
  OCTAL: '01234567',
  DECIMAL: '0123456789',
  HEXA_DECIMAL: '0123456789abcdef',
  ALPHA_LOWER: 'abcdefghijklmnopqrstuvwxyz',
  ALPHA_UPPER: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  ALPHA: 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ',
  ALPHA_NUMERIC:
    '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ',
};

describe('example tests', function () {
  let bin = Alphabet.BINARY,
    oct = Alphabet.OCTAL,
    dec = Alphabet.DECIMAL,
    hex = Alphabet.HEXA_DECIMAL,
    allow = Alphabet.ALPHA_LOWER,
    alup = Alphabet.ALPHA_UPPER,
    alpha = Alphabet.ALPHA,
    alnum = Alphabet.ALPHA_NUMERIC;

  it('should convert between numeral systems', function () {
    Test.assertEquals(convert('15', dec, bin), '1111', '"15" dec -> bin');
    Test.assertEquals(convert('15', dec, oct), '17', '"15" dec -> oct');
    Test.assertEquals(convert('1010', bin, dec), '10', '"1010" bin -> dec');
    Test.assertEquals(convert('1010', bin, hex), 'a', '"1010" bin -> hex');
  });

  it('should convert between other bases', function () {
    Test.assertEquals(convert('0', dec, alpha), 'a', '"0" dec -> alpha');
    Test.assertEquals(
      convert('27', dec, allow),
      'bb',
      '"27" dec -> alpha_lower'
    );
    Test.assertEquals(
      convert('hello', allow, hex),
      '320048',
      '"hello" alpha_lower -> hex'
    );
    Test.assertEquals(
      convert('SAME', alup, alup),
      'SAME',
      '"SAME" alpha_upper -> alpha_upper'
    );
  });
});

describe('advanced tests', function () {
  let bin = Alphabet.BINARY,
    oct = Alphabet.OCTAL,
    dec = Alphabet.DECIMAL,
    hex = Alphabet.HEXA_DECIMAL,
    allow = Alphabet.ALPHA_LOWER,
    alup = Alphabet.ALPHA_UPPER,
    alpha = Alphabet.ALPHA,
    alnum = Alphabet.ALPHA_NUMERIC;

  it('should convert BINARY to any', function () {
    let input = '1001001100101100000001011010010'; // = 1234567890 dec

    Test.assertEquals(
      convert(input, bin, oct),
      '11145401322',
      '"' + input + '" bin -> oct'
    );
    Test.assertEquals(
      convert(input, bin, dec),
      '1234567890',
      '"' + input + '" bin -> dec'
    );
    Test.assertEquals(
      convert(input, bin, hex),
      '499602d2',
      '"' + input + '" bin -> hex'
    );
    Test.assertEquals(
      convert(input, bin, allow),
      'dzxprwk',
      '"' + input + '" bin -> alpha_lower'
    );
    Test.assertEquals(
      convert(input, bin, alup),
      'DZXPRWK',
      '"' + input + '" bin -> alpha_upper'
    );
    Test.assertEquals(
      convert(input, bin, alpha),
      'dmSkYk',
      '"' + input + '" bin -> alpha'
    );
    Test.assertEquals(
      convert(input, bin, alnum),
      '1ly7vk',
      '"' + input + '" bin -> alpha_numeric'
    );
  });

  it('should convert DECIMAL to any', function () {
    let input = '1337';

    Test.assertEquals(
      convert(input, dec, bin),
      '10100111001',
      '"' + input + '" dec -> bin'
    );
    Test.assertEquals(
      convert(input, dec, oct),
      '2471',
      '"' + input + '" dec -> oct'
    );
    Test.assertEquals(
      convert(input, dec, hex),
      '539',
      '"' + input + '" dec -> hex'
    );
    Test.assertEquals(
      convert(input, dec, allow),
      'bzl',
      '"' + input + '" dec -> alpha_lower'
    );
    Test.assertEquals(
      convert(input, dec, alup),
      'BZL',
      '"' + input + '" dec -> alpha_upper'
    );
    Test.assertEquals(
      convert(input, dec, alpha),
      'zL',
      '"' + input + '" dec -> alpha'
    );
    Test.assertEquals(
      convert(input, dec, alnum),
      'lz',
      '"' + input + '" dec -> alpha_numeric'
    );
  });

  it('should convert ALPHA to any', function () {
    let input = 'CodeWars';

    Test.assertEquals(
      convert(input, alpha, bin),
      '110100110111011111011110001100111111110000110',
      '"' + input + '" alpha -> bin'
    );
    Test.assertEquals(
      convert(input, alpha, oct),
      '646737361477606',
      '"' + input + '" alpha -> oct'
    );
    Test.assertEquals(
      convert(input, alpha, dec),
      '29063972814726',
      '"' + input + '" alpha -> dec'
    );
    Test.assertEquals(
      convert(input, alpha, hex),
      '1a6efbc67f86',
      '"' + input + '" alpha -> hex'
    );
    Test.assertEquals(
      convert(input, alpha, allow),
      'fjepvaubis',
      '"' + input + '" alpha -> alpha_lower'
    );
    Test.assertEquals(
      convert(input, alpha, alup),
      'FJEPVAUBIS',
      '"' + input + '" alpha -> alpha_upper'
    );
    Test.assertEquals(
      convert(input, alpha, alnum),
      '8fGCU1me',
      '"' + input + '" alpha -> alpha_numeric'
    );
  });

  it('should convert between ALPHA_LOWER and ALPHA_UPPER', function () {
    Test.assertEquals(
      convert('FOOBAR', alup, allow),
      'foobar',
      '"FOOBAR" alpha_upper -> alpha_lower'
    );
    Test.assertEquals(
      convert('codewars', allow, alup),
      'CODEWARS',
      '"codewars" alpha_lower -> alpha_upper'
    );
  });

  it('should not change between same source and target alphabet', function () {
    let input,
      random = function (alphabet, length) {
        let str = alphabet.charAt(Math.random() * (alphabet.length - 1) + 1); // we don't want leading zeros
        while (str.length < length) {
          str += alphabet.charAt(Math.random() * alphabet.length);
        }
        return str;
      };

    let testAlphabet = function (alphabet, length) {
      input = random(eval(alphabet), length);
      Test.assertEquals(
        convert(input, eval(alphabet), eval(alphabet)),
        input,
        '"' + input + '" ' + alphabet + ' -> ' + alphabet
      );
    };

    testAlphabet('bin', 20);
    testAlphabet('oct', 16);
    testAlphabet('dec', 14);
    testAlphabet('hex', 12);
    testAlphabet('allow', 8);
    testAlphabet('alup', 8);
    testAlphabet('alpha', 8);
    testAlphabet('alnum', 6);
  });

  it('should solve ROT13 with custom alphabet', function () {
    let rot13 = 'nopqrstuvwxyzabcdefghijklmNOPQRSTUVWXYZABCDEFGHIJKLM';

    Test.assertEquals(
      convert('PbqrJnef', alpha, rot13),
      'CodeWars',
      '"PbqrJnef" alpha_lower -> rot13 custom alphabet'
    );
    Test.assertEquals(
      convert('chAllEnge', alpha, rot13),
      'puNyyRatr',
      '"chAllEnge" alpha_lower -> rot13 custom alphabet'
    );
  });
});
