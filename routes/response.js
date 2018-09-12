const loki = require('lokijs');

var users;
const databaseInitialize = () => {
  users = db.getCollection('users')
  if (!users) users = db.addCollection('users');
};

var db = new loki('responses.db', {
  autoload: true,
  autoloadCallback: databaseInitialize,
  autosave: true,
  autosaveInterval: 4000
});

const addResponse = (response) => {
  console.log('Adding response to db..');
  return users.insert(response);
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
};
