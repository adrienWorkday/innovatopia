var express = require('express');
var router = express.Router();
var db = require('../database/employee')

/* GET users listing. */
router.get('/', async function(req, res, next) {
  await db.getAllEmployees().then(
    results => {
      console.log("GET request successful. Here is a list of all employees");
      console.log(results);
      res.send(results);
    }).catch(error => {
      console.error(error)
    })
});

module.exports = router;
