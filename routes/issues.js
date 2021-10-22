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
      name: req.body.name,
      owner: req.body.estimate,
      notes: req.body.issue
    })
    .then(result => {
        res.send(result);
    })
  });

module.exports = router;