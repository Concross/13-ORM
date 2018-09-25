'use strict';

import Customer from '../../../src/lib/models/customers';

describe('customer model', () => {

  test('should be invalid if name is empty', (done) => {
    let customer = new Customer();

    customer.validate(err => {
      expect(err.errors.name).toBeDefined();
      done();
    });
  });

  test('should be invalid if gender is empty', (done) => {
    let customer = new Customer();

    customer.validate(err => {
      expect(err.errors.gender).toBeDefined();
      done();
    });
  });
});