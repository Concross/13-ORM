'use strict';

// const express = require('express');
import express from 'express';
const router = express.Router();

router.post('/api/v1/customers', (req, res, next) => {
  res.status(200).end();
});

router.get('/api/v1/customers/:id', (req, res, next) => {
  res.status(200).send({ id: req.params.id });
});

router.delete('/api/v1/customers/:id', (req, res, next) => {
  res.status(200).end();
});

router.put('/api/v1/customers/:id', (req, res, next) => {
  res.status(200).end();
});

router.post('*', (req, res, next) => {
  res.status(404).end();
});

export default router;