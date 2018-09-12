const loki = require('lokijs');

var responses;
const databaseInitialize = () => {
  responses = db.getCollection('responses')
  if (!responses) responses = db.addCollection('responses');
};

var db = new loki('files/responses.db', {
  autoload: true,
  autoloadCallback: databaseInitialize,
  autosave: true,
  autosaveInterval: 4000
});

const addResponse = (response) => {
  console.log('Adding response to db..');
  return responses.insert(response);
};

const getResponses = () => {
  console.log('Getting responses');
  return responses.simplesort('id').data();
};

module.exports = (app, jsonParser) => {
  app.post('/response', jsonParser, (req, res) => {
    if (!req.body.id) res.status(400).send('No ID specified');
    else if (req.body.status === undefined) res.status(400).send('No status specified');
    else {
      addResponse(req.body);
      res.sendStatus(200);
    }
  });
  app.post('/response/get-all', jsonParser, (req, res) => {
    if (!req.body.token) res.status(400).send('No token specified');
    else if (req.body.token !== process.env.TOKEN) res.status(401).send('Bad token');
    else res.json(getResponses());
  });
};
