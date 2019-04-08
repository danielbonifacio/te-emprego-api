const Test = require('@model/test');

const TestController = {
  helloWorld(req, res) {
    res.sendError('Erro no banco de dados', 500);
  },

  createSomeone(req, res) {
    const { name, age } = req.body;
    const person = new Test({ name, age });
    person.save((err, person) => {
      if (err) {
        return res.status(500).send({ message: 'erro' });
      }
      res.send(person);
    });
  },
};

module.exports = TestController;
