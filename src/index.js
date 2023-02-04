require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.port || 5000;
const sequelize = require('./db');
const models = require('./models/models');
const cors = require('cors');
const router = require('./routes/index');
const errorHandler = require('./middleware/ErrorHandlingMiddleware');
const { wsServer, onConnect } = require('./ws/webSocket');
const path = require('path');
const { createTestsFiles } = require('./utils/createTestsFiles');

app.use(cors());
app.use(express.json());
app.use('/api', router);

app.use(errorHandler);

wsServer.on('connection', onConnect);

// createTestsFiles();

const start = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
  } catch (e) {
    console.log(`There is an error: ${e}`);
  }
};

// start();
