
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}
const mongoose = require('mongoose');
const User = require('../models/user');

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useCreateIndex: true,
  reconnectTries: Number.MAX_VALUE,
  reconnectInterval: 1000,
});

const user = new User({
  username: process.env.ADMIN_USERNAME,
  password: process.env.ADMIN_PASSWORD,
});

user.save((err) => {
  if (err) {
    /* eslint-disable no-console */
    console.log(err);
    /* eslint-enable no-console */
  }
  mongoose.disconnect();
});