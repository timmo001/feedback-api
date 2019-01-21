const response = require('./response');

module.exports = (app, jsonParser) => {
  app.get('/api', (req, res) => {
    res.render('index', { title: 'Feedback API' });
  });
  response(app, jsonParser);
};
