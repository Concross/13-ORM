# Single Resource Mongo and Express API
===
## Features
* HTTP Server using `express`
* **Customer** resource that uses `mongoose.Schema` and `mongoose.model`

## Server Endpoints
### `/api/v1/:model`
* `POST` request
  * pass data as stringifed JSON in the body of a post request to create a new resource

### `/api/v1/:model/:id`
* `GET` request
  * pass the id of a resource through the url endpoint to get a resource
* `PUT` request
  * pass data as stringifed JSON in the body of a put request to overwrite a pre-existing resource
* `DELETE` request
  * pass the id of a resource though the url endpoint to delete a resource

### Tests
 * `GET` - test 200, returns a resource with a valid body
 * `GET` - test 404, respond with 'not found' for valid requests made with an id that was not found
 * `POST` - test 400, responds with 'bad request' if no request body was provided
 * `POST` - test 200, returns a resource for requests made with a valid body
