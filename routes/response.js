const db = require('../common/db');

module.exports = (app, jsonParser) => {
  app.post('/api/response', jsonParser, (req, res) => {
    if (!req.body.id) res.status(400).send('No ID specified');
    else if (req.body.status === undefined) res.status(400).send('No status specified');
    else {
      db.addResponse(req.body, (err) =>
        err ? res.sendStatus(500) : res.sendStatus(200)
      );
    }
  });
  app.post('/api/response/get-all', jsonParser, (req, res) => {
    if (!req.body.token) res.status(400).send('No token specified');
    else if (req.body.token !== process.env.TOKEN) res.status(401).send('Bad token');
    else db.getResponses(responses => res.json(responses));
  });
};
