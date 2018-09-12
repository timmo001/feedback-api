const response = require('./response');

module.exports = (app, jsonParser) => {
  app.get('/', (req, res) => {
    res.render('index', { title: 'Feedback API' });
  });
  response(app, jsonParser);
};
