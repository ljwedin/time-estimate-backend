var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  req.app.locals.db.collection('issues').find().toArray()
  .then(results => {
    console.log(results);
    res.send(results);
  })
});

router.post('/', function(req, res, next) {
    req.app.locals.db.collection('issues').insertOne({
      url: req.body.url,
      issueId: req.body.issueId,
      title: req.body.title,
      body: req.body.body,
      assignees: req.body.assignees,
      created: req.body.created,
      estimates: req.body.estimates
    })
    .then(result => {
        res.send(result);
    })
  });

module.exports = router;