const router = require('express').Router();

const TestController = require('@controller/test');

router
  .get('/', TestController.helloWorld)
  .post('/', TestController.createSomeone);

module.exports = router;
