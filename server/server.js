/** @format */

const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');

const app = express();
const apiRouter = require('./routes/api');

const PORT = process.env.PORT || '3000';

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser());

app.use('/build/bundle', express.static(path.resolve(__dirname, '../build')));
app.use(express.static(path.resolve(__dirname, '../build')));
app.use(express.static(path.resolve(__dirname, '../index.html')));
app.use(express.static(path.resolve(__dirname, '../client/styles.css')));

//routes
app.use('/api', apiRouter);

// express error handler
app.use((req, res) => res.status(404).send('page is not found'));

// global error handler
app.use((err, req, res, next) => {
  const defaultError = {
    log: 'express error cought unknown middleware error',
    status: 500,
    message: { err: `error in middleware ${err}` },
  };
  const errorObj = { ...defaultError, ...err };
  console.log(errorObj);
  return res.status(errorObj.status).json(errorObj.message);
});

module.exports = app.listen(PORT, () =>
  console.log(`listening on port ${PORT}`)
);
