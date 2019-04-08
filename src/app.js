const express = require('express');
const sendError = require('@helper/sendError');
const routes = require('./routes');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(sendError);

app.use('/', routes);

module.exports = app;
