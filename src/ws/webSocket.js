const WebSocket = require('ws');
const WS_PORT = process.env.WS_PORT || 9000;
const wsServer = new WebSocket.Server({ port: WS_PORT });
const Mocha = require('mocha');

const path = require('path');
const functionsToTest = require('../tests/functionsToTest');

function onConnect(wsClient) {
  const mochaInstance = new Mocha();
  const stats = {
    tests: 0,
    passes: 0,
    pending: 0,
    failures: 0,
  };

  wsClient.on('message', (message) => {
    const { kataId, solution } = JSON.parse(message);
    const fn = new Function('return ' + solution)();
    if (!Object.keys(functionsToTest).includes(kataId)) {
      wsClient.send('NO TESTS FOR THIS KATA');
      wsClient.close();
      return;
    }

    if (!(typeof fn === 'function')) {
      wsClient.send('THIS IS NOT A FUNCTION');
      wsClient.close();
      return;
    }

    functionsToTest[kataId] = fn;
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
  wsServer,
};
