const { assert } = require('chai');
const { describe, it } = require('mocha');
const functionsToTest = require('./functionsToTest');

const myLanguages = functionsToTest['5b16490986b6d336c900007d'];

const sol = (r) =>
  Object.entries(r)
    .filter((a) => a[1] > 59)
    .sort((a, b) => b[1] - a[1])
    .reduce((a, b) => [...a, ...b], [])
    .filter((s) => s.length);

describe('Fixed tests', () => {
  it('myLanguages', () => {
    assert.deepEqual(myLanguages({ Java: 10, Ruby: 80, Python: 65 }), [
      'Ruby',
      'Python',
    ]);
    assert.deepEqual(myLanguages({ Hindi: 60, Greek: 71, Dutch: 93 }), [
      'Dutch',
      'Greek',
      'Hindi',
    ]);
    assert.deepEqual(myLanguages({ 'C++': 50, ASM: 10, Haskell: 20 }), []);
  });
});

describe('Random tests', () => {
  it('tests', () => {
    const langs1 =
      `Arabic Bengali Bulgarian Chinese  Croatian Czech Danish Dutch English Estonian Finnish French German Greek Hindi Hungarian Irish Italian Japanese Korean Latvian Lithuanian Maltese Polish Portuguese Punjabi Romanian Russian Slovak Slovenian Spanish Swedish Turkish`
        .split(' ')
        .filter((s) => s);
    const langs2 =
      `ASM C Clojure CoffeeScript C++ Crystal C# Dart Elixir Erlang Fortran F# Go Groovy Haskell Java JavaScript Julia Kotlin Lua Nim Objective-C OCaml PHP PowerShell Python R Ruby Rust Scala Shell Solidity SQL Swift TypeScript`
        .split(' ')
        .filter((s) => s);

    for (let i = 0; i < 50; i++) {
      const l1 = [...langs1],
        l2 = [...langs2];
      const langs = Math.random() > 0.5 ? l1 : l2,
        n = ~~(Math.random() * 8) + 1,
        results = {},
        scores = [];

      scores.length = 100;

      for (let i = 0; i < 100; i++) scores[i] = i + 1;

      for (let i = 0; i < n; i++) {
        const targetLang = langs[~~(Math.random() * langs.length)],
          language = langs.splice(targetLang, 1)[0];
        let targetScore = scores[~~(scores.length * Math.random())];
        targetScore =
          targetScore >= scores.length ? targetScore - (i + 1) : targetScore; //.length wasn't working properly above
        results[targetLang] = scores.splice(targetScore, 1)[0];
      }
      const answer = sol(results);
      console.log(results);
      assert.deepEqual(myLanguages(results), answer);
    }
  });
});
