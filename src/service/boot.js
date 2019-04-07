const app = require('@app');
const config = require('@config');

module.exports = (err) => {
  if (err) {
    return console.log(err);
  }
  app.listen(config.app.port, (err) => {
    if (err) {
      return console.log('erro');
    }
    console.log(`iniciou em http://localhost:${config.app.port}`);
  });
};
