var express = require('express');
var router = express.Router();

/* GET all users. */
router.get('/', function(req, res, next) {
  db.collections("employee").find().toArray().then(
    results => {
        console.log("GET request successful, here are the all current users:")
        console.log(results)
        console.log("sending results to recipient...")
        res.send(results);
    }).catch(error => {
        console.error(error)
    })
});
/* GET users from a specifc office. */
router.get('/:officename/:date', function(req, res, next) {
  db.collections("employee").find().toArray().then(
    results => {
        console.log("GET request successful, here are the all the users in "
        +req.params.officename+" on "+req.params.date+":")
        console.log(results)
        console.log("sending results to recipient...")
        res.send(results);
    }).catch(error => {
        console.error(error)
    })
});

router.get('/')

module.exports = router;

