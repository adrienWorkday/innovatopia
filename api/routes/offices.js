var express = require('express');
var router = express.Router();
var officeDB = require('../database/offices')

/* GET all offices data */
router.get('/', async function(req, res, next) {
    await officeDB.getAllOffices().then(results => {
        console.log("GET request successful, here are the offices found:")
        console.log(results)
        console.log("sending results to recipient...")
        res.send(results);
    }).catch(error => {
        console.error(error);
    })
});

/*GET all offices names */
router.get('/names',async function(req,res,next){
    await officeDB.getAllOfficeNames().then(
        results => {
            console.log("GET request successful, here is a list of currently supported offices:");
            console.log(results);
            console.log("sending offices to recipient...");
            res.send(results);
        }).catch(error =>{
            console.error(error);
        })
})

module.exports = router;