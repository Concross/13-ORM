'use strict';

import express from 'express';
import modelFinder from '../middleware/modelFinder';

const router = express.Router();
router.param('model', modelFinder);

router.post('/api/v1/:model', (req, res, next) => {
  let document = new req.model(req.body);
  document.save()
    .then(data => {
      res.status(200).json(data);
    })
    .catch(next);
});

router.get('/api/v1/:model/:id', (req, res, next) => {
  req.model.findById(req.params.id)
    .then(data => {
      res.status(200).json(data);
    })
    .catch(next);
});

router.delete('/api/v1/customers/:id', (req, res, next) => {
  res.status(200).end();
});

router.put('/api/v1/customers/:id', (req, res, next) => {
  res.status(200).end();
});

router.all('*', (req, res, next) => {
  next();
});

export default router;