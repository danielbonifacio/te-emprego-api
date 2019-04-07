require('dotenv').config();
require('module-alias/register');
const mongoose = require('mongoose');
const boot = require('@service/boot');
const config = require('@config');

mongoose.set('useNewUrlParser', true);
mongoose.set('useCreateIndex', true);

if (config.db.connectionString) {
  mongoose.connect(config.db.connectionString, boot);
} else {
  console.log('No connection string provided.');
}
