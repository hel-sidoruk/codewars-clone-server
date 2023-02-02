const WebSocket = require('ws');
const WS_PORT = process.env.WS_PORT || 9000;
const wsServer = new WebSocket.Server({ port: WS_PORT });
const Mocha = require('mocha');

const path = require('path');
const functionsToTest = require('../tests/functionsToTest');

function onConnect(wsClient) {
  const mochaInstance = new Mocha();
  const stats = {
    suites: 0,
    tests: 0,
    passes: 0,
    pending: 0,
    failures: 0,
  };

  wsClient.on('message', (message) => {
    const fn = new Function('return ' + message)();
    const FN_NAME = 'simpleMultiplication';

    functionsToTest[FN_NAME] = fn;
    mochaInstance.addFile(path.resolve(__dirname, `../tests/${FN_NAME}.js`));
    mochaInstance
      .run((failures) => {
        if (failures) {
          wsClient.send('-redFAILURES: ' + failures);
          wsClient.send('--failure--');
        }
        if (!failures) wsClient.send('--success--');
        wsClient.close();
      })
      .on('start', () => {
        stats.start = new Date();
      })
      .on('suite', (suite) => {
        wsClient.send('-greenSUITE ' + suite.title);
        suite.root || stats.suites++;
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
        functionsToTest[FN_NAME] = null;
      });
  });
  wsClient.on('close', function () {
    console.log('Client disconnected');
  });
}

module.exports = {
  onConnect,
  wsServer,
};
