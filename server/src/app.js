'use strict';

// import express from 'express';
const express = require('express');
// import cors from 'cors';
const cors = require('cors');

let app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

let isRunning = false;

app.start = (port) => {
  if (isRunning) {
    console.log(`Server is already running on port ${port}`);

  } else {
    app.listen(port, err => {
      if (err) { throw err; }
      console.log(`Server is running on port ${port}`);
      isRunning = true;
    });
  }
};

app.stop = () => {
  app.close(() => {
    isRunning = false;
    console.log(`Server has been shut down`);
  });
};

module.exports = app;