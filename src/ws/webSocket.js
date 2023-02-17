const Mocha = require('mocha');
const path = require('path');
const functionsToTest = require('../tests/functionsToTest');
const { parseFunction } = require('../utils/parseFunction');

function onConnect(wsClient) {
  const mochaInstance = new Mocha();
  const stats = {
    tests: 0,
    passes: 0,
    pending: 0,
    failures: 0,
  };

  wsClient.on('message', (message) => {
    let { kataId, solution, testSuites } = JSON.parse(message);

    if (testSuites === 'fixed') mochaInstance.grep(/Fixed tests/i);

    try {
      if (solution.match(/^const|^let|^var/))
        solution = parseFunction(solution);
      const fn = new Function('return ' + solution)();
      if (!(typeof fn === 'function')) {
        wsClient.send('THIS IS NOT A FUNCTION');
        wsClient.close();
        return;
      }
      functionsToTest[kataId] = fn;
    } catch (error) {
      wsClient.send('-red' + error.toString());
      wsClient.send('--failure--');
      wsClient.close();
      return;
    }
    if (!Object.keys(functionsToTest).includes(kataId)) {
      wsClient.send('NO TESTS FOR THIS KATA');
      wsClient.close();
      return;
    }

    mochaInstance.addFile(path.resolve(__dirname, `../tests/${kataId}.js`));
    mochaInstance
      .run((failures) => {
        if (failures) wsClient.send('--failure--');
        else wsClient.send('--success--');
        wsClient.close();
      })
      .on('start', () => {
        stats.start = new Date();
      })
      .on('suite', (suite) => {
        if (suite.title) {
          wsClient.send('--suite-start--' + suite.title);
        }
      })
      .on('suite end', (suite) => {
        if (suite.title) wsClient.send('--suite-end--');
      })
      .on('pending', () => {
        stats.pending++;
      })
      .on('pass', function (test) {
        stats.passes++;
        wsClient.send('-successTest passed: ' + test.title);
      })
      .on('test end', () => {
        stats.tests++;
      })
      .on('fail', function (test, err) {
        stats.failures++;
        wsClient.send('-failTest failed: ' + test.title);
        wsClient.send('-redACTUAL: ' + `${err.actual}`);
        wsClient.send('-greenEXPECTED: ' + err.expected);
        wsClient.send('-----------');
      })
      .on('end', function () {
        stats.end = new Date();
        stats.duration = stats.end - stats.start;
        wsClient.send('--stats--' + JSON.stringify(stats));
        wsClient.send('Completed in ' + stats.duration + 'ms');
        mochaInstance.unloadFiles();
        functionsToTest[kataId] = null;
      });
  });
  wsClient.on('close', function () {
    console.log('Client disconnected');
  });
}

module.exports = {
  onConnect,
};
