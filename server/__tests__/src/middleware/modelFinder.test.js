'use strict';

jest.mock('require-dir');

import moduleFinder from '../../../src/lib/middleware/moduleFinder';

describe('moduleFinder Middleware test', () => {

  test('should throw an error if no valid model is included in the request', () => {
    let req = {}, res = {};
    let next = () => { };

    expect(() => {
      moduleFinder(req, res, next);
    }).toThrow();
  });
});