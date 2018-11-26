require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const router = require('./router');
const mongoose = require('mongoose');
const cors = require('cors');

mongoose.connect(process.env.DB_URL, {
  useNewUrlParser: true,
  useCreateIndex: true,
  reconnectTries: Number.MAX_VALUE,
  reconnectInterval: 1000,
});

const app = express();

app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(cors());

router(app);

const port = process.env.PORT || 8081;

app.listen(port);