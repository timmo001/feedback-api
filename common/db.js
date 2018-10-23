const Datastore = require('nedb');

const db = new Datastore({ filename: process.env.DB_PATH || 'files/responses.db', autoload: true });

const getResponses = (cb) => {
  console.log('Getting responses..');
  db.getAllData((err, docs) => {
    if (err) { cb(err); return; }
    cb(null, docs);
  });
};

const addResponse = (response, cb) => {
  console.log(`Adding response from ${response.id}..`);
  db.insert(response,
    (err, newDoc) => err ? cb(err) : cb(null, newDoc)
  );
};

module.exports = {
  getResponses,
  addResponse
};
