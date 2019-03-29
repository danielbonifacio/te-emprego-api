const router = require('express').Router();

const TestController = require('@controller/test');

router
  .get('/', TestController.helloWorld);

module.exports = router;
