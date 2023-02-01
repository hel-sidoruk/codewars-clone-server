const WebSocket = require('ws');
const WS_PORT = process.env.WS_PORT || 9000;
const wsServer = new WebSocket.Server({ port: WS_PORT });
const Mocha = require('mocha');

const path = require('path');
const functionsToTest = require('../tests/functionsToTest');

function onConnect(wsClient) {
  const mochaInstance = new Mocha();
  console.log('New client');
  wsClient.send('Connection established');

  wsClient.on('message', (message) => {
    const fn = new Function('return ' + message)();

    functionsToTest.pow = fn;
    mochaInstance.addFile(path.resolve(__dirname, '../tests/pow.js'));
    mochaInstance
      .run()
      .on('test', function (test) {
        wsClient.send('Test started: ' + test.title);
      })
      .on('test end', function (test) {
        wsClient.send('Test ended: ' + test.title);
      })
      .on('pass', function (test) {
        wsClient.send('Test passed: ' + test.title);
      })
      .on('fail', function (test, err) {
        wsClient.send('-----------');
        wsClient.send('Test failed: ' + test.title);
        wsClient.send('ACTUAL: ' + `${err.actual}`);
        wsClient.send('EXPECTED: ' + err.expected);
        wsClient.send('-----------');
      })
      .on('end', function () {
        wsClient.send('All tests done');
        wsClient.close();
        mochaInstance.unloadFiles();

        functionsToTest.pow = null;
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
