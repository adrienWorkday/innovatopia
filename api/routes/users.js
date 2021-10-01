var express = require('express');
var router = express.Router();
var db = require('../database/employee')

/* GET users listing. */
router.get('/', async function(req, res, next) {
  await db.getAllEmployees().then(
    results => {
      console.log("GET request successful. Here is a list of all employees");
      // console.log(results);
      res.send(results);
    }).catch(error => {
      console.error(error)
    })
});

/* GET users from a specifc office on a specific day. */
// router.get('/:officename/:date', async function(req, res, next) {
router.get('/date/:date/officeID/:officeID', async function(req, res, next) {

  await db.getAllEmployeesInOfficeOnDate(req.params.officeID, req.params.date).then(
    results => {
        console.log("GET request successful, here are the all the users in "
        +req.params.officeID+" on "+req.params.date+":")
        // console.log(results)
        console.log("sending results to recipient...")
        res.send(results);
    }).catch(error => {
        console.error(error)
    })
});

router.get('/')

module.exports = router;
