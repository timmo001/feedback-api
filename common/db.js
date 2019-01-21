const Datastore = require('nedb');

const db = new Datastore({ filename: process.env.DB_PATH || 'files/responses.db', autoload: true });

const getResponses = (cb) => {
  console.log('Getting responses..');
  cb(null, db.getAllData());
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
