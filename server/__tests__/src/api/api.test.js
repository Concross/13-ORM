'use strict';

import superagent from 'superagent';
import mongoose from 'mongoose';
import Customer from '../../../src/lib/models/customers';

describe('API CRUD operations', () => {

  const basePath = 'http://localhost:3000/api/v1';
  let customer;

  beforeAll(() => {
    customer = new Customer({
      name: 'Adam',
      age: 31,
      salary: 15000,
      gender: 'm',
    });

  });

  // afterAll(() => {
  //   console.log('disconnecting from db...');
  //   mongoose.connection.close();
  // });

  test('should respond with 200 for a POST request', () => {
    return superagent.post(`${basePath}/customers`)
      .accept('application/json')
      .send(customer)
      .then(res => {
        expect(res.status).toBe(200);
      });
  });

  test('should respond with 404 for a bad POST request', () => {
    return superagent.post(`http://localhost:3000/badPath`)
      .then(res => { })
      .catch(err => expect(err.status).toBe(404));
  });

  test('should respond with a valid _id for POST request', () => {
    let cust = {
      name: 'sam',
      age: 42,
      salary: 10000,
      gender: 'f',
    };

    return superagent.post(`${basePath}/customers`)
      .send(cust)
      .then(res => {
        expect(res.body._id).toBeDefined();
      });
  });

  test('should respond with 200 for a GET request', () => {
    return superagent.get(`${basePath}/customers/${customer._id}`)
      .then(res => {
        expect(res.status).toEqual(200);
        expect(res.body._id.toString()).toBe(customer._id.toString());
      })
      .catch(err => console.error(err));
  });

  test('should respond with 200 for a PUT request', () => {
    customer.name = 'newName';
    return superagent.put(`${basePath}/customers/${customer._id}`)
      .send(customer)
      .then(res => {
        expect(res.status).toBe(200);
        expect(res.body.name).toBe('newName');
      });
  });

  test('should respond with 200 for a DELETE request', () => {
    return superagent.delete(`${basePath}/customers/${customer._id}`)
      .then(res => {
        expect(res.status).toBe(200);
        expect(res.text).toBe('Delete successful');
      });
  });
});
