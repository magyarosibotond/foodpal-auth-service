const express = require('express');
const bodyParser = require('body-parser');

import { HttpError } from './app/error';
import { authRouter, profileRouter } from './app/router';

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').load();
}

var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Setup Routers
app.use('/', authRouter);
app.use('/user', profileRouter);

// Error handler
app.use(function (err, req, res, next) {
  console.error(err.stack);
  const error = HttpError.serialize(err);
  res.status(error.status).send(error);
});

app.listen(3000, () => {
  console.log('Auth Service running on port ' + 3000);
});  
