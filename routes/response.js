const express = require('express'),
  router = express.Router();

/* POST response */
router.post('/', (req, res, next) => {
  if (!req.body.id) res.status(400).send('No ID specified');
  if (req.body.status === undefined) res.status(400).send('No status specified');
  console.log('id:', req.body.id);
  console.log('status:', req.body.status);
  console.log('comment:', req.body.comment);

  res.sendStatus(200);
});

module.exports = router;
