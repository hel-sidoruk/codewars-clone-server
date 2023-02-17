require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.port || 5000;
const sequelize = require('./db');
const models = require('./models/models');
const cors = require('cors');
const router = require('./routes/index');
const errorHandler = require('./middleware/ErrorHandlingMiddleware');
const { onConnect } = require('./ws/webSocket');
const fileUpload = require('express-fileupload');
const path = require('path');
const { WebSocketServer } = require('ws');

app.use(cors());
app.use(express.json());
app.use(express.static(path.resolve(__dirname, 'assets')));
app.use(fileUpload({}));
app.use('/api', router);

app.use(errorHandler);

const start = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    const server = app.listen(PORT, () =>
      console.log(`Listening on port ${PORT}`)
    );
    const wsServer = new WebSocketServer({ server });
    wsServer.on('connection', onConnect);
  } catch (e) {
    console.log(`There is an error: ${e}`);
  }
};

start();
