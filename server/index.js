'use strict';
// import app from './src/app';
const app = require('./src/app');

require('dotenv').config();

require('babel-register')({
  presets: ['env'],
});

console.log(process.env.PORT);
app.start(process.env.PORT);