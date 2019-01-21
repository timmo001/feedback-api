const response = require('./response');

module.exports = (app, jsonParser, db) => {
  app.get('/api', (req, res) => {
    res.render('index', { title: 'Feedback API' });
  });
  response(app, jsonParser, db);
};
